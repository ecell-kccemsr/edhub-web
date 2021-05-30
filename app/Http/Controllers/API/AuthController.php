<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\EmailVerification;
use App\Http\Requests\StoreSignUp;
use App\Jobs\DeleteUnverifiedUser;
use App\Jobs\EmailTokenExpiration;
use App\Notifications\VerifyEmail;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
    * Signup
    *
    * This endpoint allows you to Signup and retrieve an access token.
    * @group Authenticating requests
    *
    * @bodyParam name string required The name of the user.
    * @bodyParam email string required The email of the user.
    * @bodyParam confirm_password string required The confirm_password of the user.
    * @bodyParam gender string required The gender of the user.
    *
    * @response 401 {
    *  "message" : "Unauthorized"
    * }
    * @response {
    *  "access_token" : "<ACCESS_TOKEN>",
    *  "token_type" : "Bearer",
    *  "expires_at" : "<EXPIRES_AT>",
    * }
    */
    public function signUp(SignUpRequest $request)
    {
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('confirm_password'));
        $user->gender = $request->input('gender');
        $user->save();

        $token = Str::random(128);
        $email_verification = new EmailVerification();
        $email_verification->user_id = $user->id;
        $email_verification->token = $token; 
        $email_verification->save();

        $user->notify(new VerifyEmail($token));
        DeleteUnverifiedUser::dispatch($user)->delay(now()->addHours(24));
        return response()->json([
            'message' => 'Veification email sent successfully'
        ]);
    }

    /**
    * Login
    *
    * This endpoint allows you to login and retrieve an access token.
    * @group Authenticating requests
    *
    * @bodyParam email string required The email of the user.
    * @bodyParam password string required The password of the user.
    *      
    * @response 401 {
    *  "message" : "Unauthorized"
    * }
    * @response {
    *  "access_token" : "<ACCESS_TOKEN>",
    *  "token_type" : "Bearer",
    *  "expires_at" : "<EXPIRES_AT>",
    * }
    */
    public function login(Request $request){
        $request->validate([
            'email' => 'required | string ',
            'password' => 'required | string',
        ]);
        $credentials = request(['email', 'password']);

        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken(config('app.name') . 'Personal Access Client');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
        ]);
    }

    /**
    * Logout
    *
    * This endpoint allows you to logout.
    * @group Authenticating requests
    *          
    * @response 401 {
    *  "message" : "Unauthorized"
    * }
    * @response {
    *  "message" : "Successfully logged out!",
    * }
    */
    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out!'
        ]);
    }

    /**
    * Get Authenticated User
    *
    * This endpoint allows you to get authenticated User.
    * @group Authenticating requests
    *
    * @authenticated 
    * 
    * @apiResource App\Http\Resources\UserResource
    * @apiResourceModel App\Models\User
    * 
    */
    public function user()
    {
        return new UserResource(Auth::user());
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        if($request->has('name'))
            $user->name = $request->input('name');
        if($request->file('avatar'))
            $user->avatar = $request->file('avatar')->store('users');
        if($request->has('gender'))
            $user->gender = $request->input('gender');
        $user->save();
        return new UserResource(Auth::user());
    }

    public function updateEmail(Request $request){
        $user = Auth::user();
        $user->email = $request->input('email');
        $user->email_verified_at = null;
        $user->save();

        $token = Str::random(128);
        $email_verification = EmailVerification::where('user_id',$user->id)->first();
        $email_verification->token = $token;
        $email_verification->updated_at = Carbon::now(); 
        $email_verification->save();
    
        $user->notify(new VerifyEmail($token));
        EmailTokenExpiration::dispatch($user)->delay(now()->addHours(4));
        return response()->json([
            'message' => 'Veification email sent successfully'
        ]);
    }

    public function resend_email(){
        $user = Auth::user();

        if($user->email_verified_at === null){
            EmailVerification::where('user_id',$user->id)->first()->delete();
            $token = Str::random(128);
            $email_verification = new EmailVerification();
            $email_verification->user_id = $user->id;
            $email_verification->token = $token; 
            $email_verification->save();
            
            $user->notify(new VerifyEmail($token));
            EmailTokenExpiration::dispatch($user)->delay(now()->addHours(4));
            return response()->json([
                'message' => 'Veification email sent successfully'
            ]);
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\EmailVerification;
use App\Http\Requests\StoreSignUp;
use App\Notifications\VerifyEmail;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
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
        return response()->json([
            'message' => 'Veification email sent successfully'
        ]);
    }

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

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out!'
        ]);
    }

    public function user()
    {
        return new UserResource(Auth::user());
    }

}

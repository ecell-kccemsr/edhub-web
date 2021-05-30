<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Http\Controllers\Controller;
use App\Http\Requests\ResetPasswordRequest;
use App\Jobs\PasswordResetTokenExpiration;
use App\Notifications\ResetPassword;
use Illuminate\Support\Facades\Hash;
use App\Notifications\ResetPasswordSuccessful;

class ForgotPasswordController extends Controller
{
    /**
    * ResetLink
    *
    * This endpoint allows you to reset link.
    * @group Authenticating requests
    *
    * @bodyParam email string required The email of the user.
    *      
    * @response 401 {
    *  "message" : "Unauthorized user"
    * }
    * @response {
    *  "success" : "true",
    * }
    */
    public function resetLink(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();
        if($user)
        {
            $token = Str::random(64);
            $password_reset = new PasswordReset();
            $password_reset->user_id = $user->id;
            $password_reset->token = $token;
            $password_reset->created_at = now();
            $password_reset->save();
            $user->notify(new ResetPassword($token));
            PasswordResetTokenExpiration::dispatch($user)->delay(now()->addHours(4));
            return 'Ok';
        }
        return response()->json([
            'message' => 'Unauthorized user'
        ]);
    }
    
    /**
    * Verify
    *
    * This endpoint allows you to verify token.
    * @group Authenticating requests
    *
    * @bodyParam verified_token string required The verified_token of the user.
    *      
    * @response 401 {
    *  "message" : "ok"
    * }
    * @response {
    *  "message" : "Wrong Token passed"
    * }
    */
    public function verify(Request $request)
    {
        $verified_token = PasswordReset::where('token', $request->input('token'))->first();
        if($verified_token)
        {
            return 'ok';
        }
        return response()->json([
            'message' => 'Wrong token passed'
        ]);
    }

    /**
    * Change Password
    *
    * This endpoint allows you to Change Password.
    * @group Authenticating requests
    *
    * @bodyParam verified_token string required The verified_token of the user.
    * @bodyParam confirm_password string required The confirm_password of the user.
    *      
    * @response 401 {
    *  "message" : "ok"
    * }
    * @response {
    *  "message" : "Token not verified"
    * }
    */
    public function changePassword(ResetPasswordRequest $request)
    {
        $verified_token = PasswordReset::where('token', $request->input('token'))->first();
        if($verified_token)
        {
            $user = User::findOrFail($verified_token->user_id);
            $user->password = Hash::make($request->input('confirm_password'));
            $user->save();
            $user->notify(new ResetPasswordSuccessful());
            return 'ok';
        }
        return response()->json([
            'message' => 'Token not verified'
        ]);
    }
}

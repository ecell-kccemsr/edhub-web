<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Http\Controllers\Controller;
use App\Http\Requests\ResetPasswordRequest;
use App\Notifications\ResetPassword;
use Illuminate\Support\Facades\Hash;
use App\Notifications\ResetPasswordSuccessful;

class ForgotPasswordController extends Controller
{
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
            return 'Ok';
        }
        return response()->json([
            'message' => 'Unauthorized user'
        ]);
    }
    

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

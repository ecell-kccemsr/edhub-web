<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\EmailVerification;
use App\Http\Controllers\Controller;

class EmailVerificationController extends Controller
{
    public function verify(Request $request)
    {
        $verified_token = EmailVerification::where('token',$request->input('token'))->first();
        if($verified_token)
        {
            $user = User::find($verified_token->user_id);
            $user->email_verified_at = Carbon::now();
            $user->save();
            return redirect('/');
        }
        return response()->json([
            'message' => 'Wrong token passed'
        ]);
    }
}

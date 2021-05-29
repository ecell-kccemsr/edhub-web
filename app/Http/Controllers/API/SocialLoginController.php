<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    public function redirect(Request $request, $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(Request $request, $provider)
    {
        $data = Socialite::driver($provider)->user();
        $user = User::where($provider, $data->getId())->first();
        if ($user === null) {
            $user = new User();
            $user->$provider = $data->getId();
        }
        $user->name = $data->getName();
        $user->email = $data->getEmail();
        $user->avatar = $data->getAvatar();
        $user->email_verified_at = now();
        $user->save();
        $tokenResult = $user->createToken(config('app.name') . 'Personal Access Client');
        $token = $tokenResult->token;
        $token->save();
        return redirect('/');
    }
}

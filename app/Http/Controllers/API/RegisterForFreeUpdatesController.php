<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\RegisterForFreeUpdates;
use App\Http\Requests\RegisterForFreeUpdatesRequest;

class RegisterForFreeUpdatesController extends Controller
{
    public function add(RegisterForFreeUpdatesRequest $request)
    {
        $register = new RegisterForFreeUpdates();
        $register->name = $request->input('name');
        $register->email = $request->input('email');
        $register->mobile_no = $request->input('mobile_no');
        $register->save();
        return 'OK';
    }
}

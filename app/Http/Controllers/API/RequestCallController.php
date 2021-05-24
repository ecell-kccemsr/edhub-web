<?php

namespace App\Http\Controllers\API;

use App\Models\RequestCall;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RequestCallRequest;

class RequestCallController extends Controller
{
    public function add(RequestCallRequest $request)
    {
        $register = new RequestCall();
        $register->name = $request->input('name');
        $register->mobile_no = $request->input('mobile_no');
        $register->save();
        return 'OK';
    }
}

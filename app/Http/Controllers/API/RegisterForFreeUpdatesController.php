<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\RegisterForFreeUpdates;
use App\Http\Requests\RegisterForFreeUpdatesRequest;

class RegisterForFreeUpdatesController extends Controller
{
    /**
     * Add a Category
     *
     * This endpoint allows you to add a category.
     *      
     * @bodyParam name string required The name of the category
     * @bodyParam email file required The email of the category
     * @bodyParam mobile_no file required The mobile_no of the category    
     * 
     */
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

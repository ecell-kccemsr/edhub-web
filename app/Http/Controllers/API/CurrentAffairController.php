<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\CurrentAffair;
use App\Http\Controllers\Controller;
use App\Http\Resources\CurrentAffairResourceCollection;

class CurrentAffairController extends Controller
{
    /**
     * Get All Current Affairs
     *
     * This endpoint allows you to fetch all Current Affairs.
     * 
     * @queryParam category_id integer Field to fetch Current Affairs to particular category_id.
     * @queryParam subcategory_id integer Field to fetch Current Affairs to particular subcategory_id.
     * 
     * @apiResourceCollection App\Http\Resources\CurrentAffairResourceCollection
     * @apiResourceModel App\Models\CurrentAffair
     * 
     */
    public function get(Request $request)
    {
        $current_affairs = CurrentAffair::query();
        if($request->has('category_id'))
        {
            $current_affairs = $current_affairs->where('category_id',$request->input('category_id'));
        }
        if($request->has('subcategory_id'))
        {
            $current_affairs = $current_affairs->where('subcategory_id',$request->input('subcategory_id'));
        }
        return new CurrentAffairResourceCollection($current_affairs->get());
    }
}

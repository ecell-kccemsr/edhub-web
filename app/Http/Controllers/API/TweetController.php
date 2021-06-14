<?php

namespace App\Http\Controllers\API;

use App\Models\Tweet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TweetResourceCollection;

class TweetController extends Controller
{
    public function get(Request $request)
    {
        $tweets = Tweet::query();
        if($request->has('news_id'))
        {
            $tweets = $tweets->where('news_id',$request->input('news_id'));
        }
        return new TweetResourceCollection($tweets->paginate($request->input('per_page', 10)));
    }
}

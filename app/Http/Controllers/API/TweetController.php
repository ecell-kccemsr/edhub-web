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
        $tweets = Tweet::where('news_id',$request->input('news_id'))->get();
        return new TweetResourceCollection($tweets);
    }
}

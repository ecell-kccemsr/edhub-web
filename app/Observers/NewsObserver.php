<?php

namespace App\Observers;

use App\Models\News;
use App\Models\Tweet;
use App\Jobs\AddNewsTweets;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class NewsObserver
{
    /**
     * Handle the News "created" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public $afterCommit = true;

    public function created(News $news)
    {
        $token = env('TWITTER_BEARER_TOKEN');
        $tags = $news->tags;
        $response = Http::withHeaders([
            "Accept" => "application/json, text/plain, */*",
            "Authorization" => "Bearer $token",
            "Content-Type" => "application/json;charset=utf-8"
        ])->get("https://api.twitter.com/2/tweets/search/recent?query=$tags&expansions=attachments.media_keys&media.fields=url&tweet.fields=created_at");

        if ($response->successful() === true)
        { 
            $tweets = $response->json() ['data'];
            foreach ($tweets as $tweet)
            {
                $dbtweet = new Tweet();
                $dbtweet->body = $tweet['text'];
                $dbtweet->news_id = $news->id;
                $dbtweet->published_at = Carbon::parse($tweet['created_at'])->format('Y-m-d h:i:s');
                $tweet_users = $response->json()['includes']['users'];
                foreach($tweet_users as $tweet_user)
                {
                    if($tweet_user['id']==$tweet['author_id'])
                    {
                        $dbtweet->author_name=$tweet_user['name'];
                    }
                }
                if(count($tweet)>4){
                    $tweet_media = $response->json()['includes']['media'];
                    foreach($tweet_media as $media)
                    {
                        if($media['media_key']==$tweet['attachments']['media_keys'][0])
                        {
                            if($media['type']=="photo")
                            {
                                $dbtweet->image=$media['url'];
                            }
                        }
                    }
                }
                $dbtweet->save();
            }
        }
    }
        
    

    /**
     * Handle the News "updated" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function updated(News $news)
    {
        $token = env('TWITTER_BEARER_TOKEN');
        $tags = $news->tags;
        Tweet::where('news_id',$news->id)->delete();
        $response = Http::withHeaders([
            "Accept" => "application/json, text/plain, */*",
            "Authorization" => "Bearer $token",
            "Content-Type" => "application/json;charset=utf-8"
        ])->get("https://api.twitter.com/2/tweets/search/recent?query=$tags&expansions=attachments.media_keys&media.fields=url&tweet.fields=created_at");

        if ($response->successful() === true)
        { 
            $tweets = $response->json() ['data'];
            foreach ($tweets as $tweet)
            {
                $dbtweet = new Tweet();
                $dbtweet->body = $tweet['text'];
                $dbtweet->news_id = $news->id;
                $dbtweet->published_at = Carbon::parse($tweet['created_at'])->format('Y-m-d h:i:s');
                $tweet_users = $response->json()['includes']['users'];
                foreach($tweet_users as $tweet_user)
                {
                    if($tweet_user['id']==$tweet['author_id'])
                    {
                        $dbtweet->author_name=$tweet_user['name'];
                    }
                }
                if(count($tweet)>4){
                    $tweet_media = $response->json()['includes']['media'];
                    foreach($tweet_media as $media)
                    {
                        if($media['media_key']==$tweet['attachments']['media_keys'][0])
                        {
                            if($media['type']=="photo")
                            {
                                $dbtweet->image=$media['url'];
                            }
                        }
                    }
                }
                $dbtweet->save();
            }
        }
    }

    /**
     * Handle the News "deleted" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function deleted(News $news)
    {
        //
    }

    /**
     * Handle the News "restored" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function restored(News $news)
    {
        //
    }

    /**
     * Handle the News "force deleted" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function forceDeleted(News $news)
    {
        //
    }
}

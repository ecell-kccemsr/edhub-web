<?php

namespace App\Jobs;

use App\Models\Tweet;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class AddNewsTweets implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $news;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($news)
    {
        $this->news = $news;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $token = env('TWITTER_BEARER_TOKEN');
        $tags = $this->news->tags;
        $response = Http::withHeaders([
            "Accept" => "application/json, text/plain, */*",
            "Authorization" => "Bearer $token",
            "Content-Type" => "application/json;charset=utf-8"
        ])->get("https://api.twitter.com/2/tweets/search/recent?query=$tags&expansions=attachments.media_keys,author_id&media.fields=url&tweet.fields=created_at&user.fields=name");

        if ($response->successful() === true)
        { 
            $tweets = $response->json() ['data'];
            foreach ($tweets as $tweet)
            {
                $dbtweet = new Tweet();
                $dbtweet->body = $tweet['text'];
                $dbtweet->news_id = $this->news->id;
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
}

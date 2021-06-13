<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\News;
use App\Models\Tweet;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class FetchTweets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:tweets';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch tweets';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $token = env('TWITTER_BEARER_TOKEN');
        Tweet::truncate();
        foreach(News::all() as $news){
            $tags = $news->tags;
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
    }
}

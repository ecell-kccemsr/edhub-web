<?php

namespace App\Jobs;

use App\Models\Tweet;
use Error;
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
        ])->get("https://api.twitter.com/2/tweets/search/recent?query=$tags&expansions=attachments.media_keys,author_id&media.fields=url&tweet.fields=created_at,source,entities,public_metrics&user.fields=name,profile_image_url");

        if ($response->successful() === true) {
            $tweets = $response->json()['data'];
            foreach ($tweets as $tweet) {
                $dbtweet = new Tweet();
                $dbtweet->body = $tweet['text'];
                $dbtweet->news_id = $this->news->id;
                $dbtweet->tweet_source = $tweet['source'];
                $dbtweet->published_at = Carbon::parse($tweet['created_at'])->format('Y-m-d h:i:s');
                $dbtweet->like_count = $tweet['public_metrics']['like_count'];
                $dbtweet->retweet_count = $tweet['public_metrics']['retweet_count'];
                $dbtweet->quote_count = $tweet['public_metrics']['quote_count'];
                $tweet_users = $response->json()['includes']['users'];
                foreach ($tweet_users as $tweet_user) {
                    if ($tweet_user['id'] == $tweet['author_id']) {
                        $dbtweet->author_name = $tweet_user['name'];
                        $dbtweet->author_profile_image = $tweet_user['profile_image_url'];
                        $dbtweet->author_username = $tweet_user['username'];
                        $dbtweet->tweet_url = "https://twitter.com/" . $tweet_user['username'] . "/status/" . $tweet['id'];
                    }
                }
                if (count($tweet) > 7) {
                    $tweet_media = $response->json()['includes']['media'];
                    foreach ($tweet_media as $media) {
                        if ($media['media_key'] == $tweet['attachments']['media_keys'][0]) {
                            if ($media['type'] == "photo") {
                                $dbtweet->image = $media['url'];
                            }
                        }
                    }
                }
                $dbtweet->save();
            }
        } else {
            throw new Error($response->body());
        }
    }
}

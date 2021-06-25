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
        foreach (News::all() as $news) {
            $tags = $news->tags;
            $response = Http::withHeaders([
                "Accept" => "application/json, text/plain, */*",
                "Authorization" => "Bearer $token",
                "Content-Type" => "application/json;charset=utf-8"
            ])->get("https://api.twitter.com/2/tweets/search/recent?query=$tags&expansions=attachments.media_keys,author_id&media.fields=url&tweet.fields=created_at,source,entities,public_metrics&user.fields=name,profile_image_url");

            if ($response->successful() === true) {
                if (isset($response->json()['data']) === false) {
                    $this->line('No results found for ' . $news->title);
                    continue;
                }
                $tweets = $response->json()['data'];
                foreach ($tweets as $tweet) {
                    $dbtweet = new Tweet();
                    $dbtweet->body = $tweet['text'];
                    $dbtweet->news_id = $news->id;
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
                $this->line('Fetched tweets for ' . $news->title);
            }
        }
    }
}

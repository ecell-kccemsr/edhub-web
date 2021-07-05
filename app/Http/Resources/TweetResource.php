<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;

class TweetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
            'author_name' => $this->author_name,
            'published_at' => $this->published_at,
            'image' => $this->image === null ? 'https://via.placeholder.com/600x325?text=Tweet' : (str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image)),
            'news' => new NewsResource($this->news),
            'tweet_url' => $this->tweet_url,
            'author_username' => $this->author_username,
            'author_profile_image' => $this->author_profile_image,
            'tweet_source' => $this->tweet_source,
            'like_count' => $this->like_count,
            'retweet_count' => $this->retweet_count,
            'quote_count' => $this->quote_count
        ];
    }
}

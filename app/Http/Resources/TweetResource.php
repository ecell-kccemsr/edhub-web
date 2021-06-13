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
            'image' => Voyager::image($this->image),
            'news' => new NewsResource($this->news_id),
        ];
    }
}

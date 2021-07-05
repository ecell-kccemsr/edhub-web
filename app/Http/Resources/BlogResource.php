<?php

namespace App\Http\Resources;

use App\Models\Blog;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $hasLiked = false;
        if(Auth::user()) {
            $hasLiked = Auth::user()->hasLiked(Blog::find($this->id)); 
        }
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'image' => $this->image === null ? 'https://via.placeholder.com/600x325?text=Blog' : (str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image)),
            'tags' => $this->tags,
            'author_name' => $this->author_name,
            'author_image' => str_starts_with($this->author_image, 'http') ? $this->author_image : Voyager::image($this->author_image),
            'autor_designation' => $this->autor_designation,
            'read_time' => $this->read_time,
            'published_at' => $this->published_at,
            'slug' => $this->slug,
            'total_likes' => $this->likers()->count(),
            'has_liked' => $hasLiked
        ];
    }
}

<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
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
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'image' => str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image),
            'author_name' => $this->author_name,
            'author_image' => str_starts_with($this->author_image, 'http') ? $this->author_image : Voyager::image($this->author_image),
            'autor_designation' => $this->autor_designation,
            'read_time' => $this->read_time,
            'published_at' => $this->published_at,
            'slug' => $this->slug,
        ];
    }
}

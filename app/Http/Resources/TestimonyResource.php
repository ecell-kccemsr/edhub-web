<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;

class TestimonyResource extends JsonResource
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
        'name' => $this->name,
        'rating' => $this->rating,
        'review' => $this->review,
        'image' => str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image),
        'slug' => $this->slug,
        ];
    }
}

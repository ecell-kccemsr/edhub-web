<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseReviewResource extends JsonResource
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
            'content' => $this->content,
            'rating' => $this->rating,
            'user_name' => $this->user_name,
            'user_image' => str_starts_with($this->user_image, 'http') ? $this->user_image : Voyager::image($this->user_image),
            'course_id' => $this->course_id,
        ];
    }
}

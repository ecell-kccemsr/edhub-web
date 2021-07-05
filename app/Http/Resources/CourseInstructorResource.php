<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseInstructorResource extends JsonResource
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
            'designation' => $this->designation,
            'image' => $this->image === null ? 'https://via.placeholder.com/600x325?text=Course Instructor' : (str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image)),
            'url' => $this->url,
        ];
    }
}

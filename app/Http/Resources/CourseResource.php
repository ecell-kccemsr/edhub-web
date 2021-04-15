<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CourseProviderResource;
use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class CourseResource extends JsonResource
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
            'subtitle' => $this->subtitle,
            'locale' => $this->locale,
            'captions' => $this->captions,
            'image' => str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image),
            'url' => $this->url,
            'course_provider' => new CourseProviderResource($this->course_provider),
            'course_instructor' => new CourseInstructorResourceCollection($this->course_instructors),
            'outcome' => $this->outcome,
            'description' => $this->description,
            'prerequisites' => $this->prerequisites,
            'faq' => $this->faq,
            'certification' => $this->certification,
            'rating' => $this->rating,
            'rating_distribution' => $this->rating_distribution,
            'price' => $this->price,
            'discount_price' => $this->discount_price,
            'slug' => $this->slug,
        ];
    }
}

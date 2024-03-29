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
            'image' => $this->image === null ? 'https://via.placeholder.com/600x325?text=Course' : (str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image)),
            'url' => $this->url,
            'course_provider' => new CourseProviderResource($this->course_provider),
            'course_instructor' => new CourseInstructorResourceCollection($this->course_instructors),
            'outcome' => $this->outcome,
            'description' => $this->description,
            'prerequisites' => $this->prerequisites,
            'faq' => $this->faq,
            'certification' => $this->certification,
            'rating' => $this->rating,
            'rating_distribution' => collect($this->rating_distribution)->sortByDesc(function ($distribution, $key) {
                return $distribution['rating'];
            })->toArray(),
            'price' => $this->price,
            'discount_price' => $this->discount_price,
            'discount_percentage' => $this->discount_percentage,
            'slug' => $this->slug,
            'category' => $this->course_category,
            'sub_category' => $this->course_sub_category,
            'total_hits' => $this->total_hits,
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'titile' => $this->titile,
            'subtitle' => $this->subtitle,
            'image' => $this->image,
            'url' => $this->url,
            'course_provider' => new CourseResource($this->course_provider),
            'skills' => $this->skills,
            'learners_outcome' => $this->learners_outcome,
            'job_opportunities' => $this->job_opportunities,
            'description' => $this->description,
            'career_outcome' => $this->career_outcome,
            'job_opportunities' => $this->job_opportunities,
            'course_content' => $this->course_content,
            'prerequisites' => $this->prerequisites,
            'instructor_name' => $this->instructor_name,
            'instructor_rating' => $this->instructor_rating,
            'instructor_reviews' => $this->instructor_reviews,
            'instructor_students' => $this->instructor_students,
            'instructor_designation' => $this->instructor_designation,
            'instructor_description' => $this->instructor_description,
            'FAQs' => $this->FAQs,
            'certification' => $this->certification,
            'rating' => $this->rating,
            'price' => $this->price,
            'slug' => $this->slug,

        ];
    }
}

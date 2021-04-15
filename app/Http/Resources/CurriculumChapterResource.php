<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CurriculumChapterResource extends JsonResource
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
            'decription' => $this->decription,
            'lectures' => CurriculumLectureResource::collection($this->curriculum_lectures),
            'course_id' => $this->course_id,
        ];
    }
}

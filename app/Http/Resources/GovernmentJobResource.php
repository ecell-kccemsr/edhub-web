<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\GovernmentJobCategoryResource;

class GovernmentJobResource extends JsonResource
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
            'description' => $this->description,
            'salary_and_job_positions' => $this->salary_and_job_positions,
            'eligibility_criteria' => $this->eligibility_criteria,
            'syllabus' => $this->syllabus,
            'exam_pattern' => $this->exam_pattern,
            'cutoff' => $this->cutoff,
            'apply_online' => $this->apply_online,
            'admit_card' => $this->admit_card,
            'category' => new GovernmentJobCategoryResource($this->category),
            'subcategory' => new GovernmentJobSubCategoryResource($this->sub_category),
            'created_at' => $this->created_at,
            'created_at_formated' => $this->created_at === null ? null : $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
            'updated_at_formated' => $this->updated_at === null ? null : $this->updated_at->diffForHumans(),
            'slug' => $this->slug,
            'age_limit' => $this->age_limit
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\QuestionPaperCategoryResource;
use App\Http\Resources\QuestionPaperSubCategoryResource;

class QuestionPaperResource extends JsonResource
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
            'year' => $this->year,
            'category' => new QuestionPaperCategoryResource($this->category),
            'sub_category' => new QuestionPaperSubCategoryResource($this->sub_category),
            'url' => $this->url,
            'created_at' => $this->created_at,
            'created_at_formated' => $this->created_at === null ? null : $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
            'updated_at_formated' => $this->updated_at === null ? null : $this->updated_at->diffForHumans(),
            'slug' => $this->slug,
            'seo_keywords' => $this->seo_keywords,
            'seo_description' => $this->seo_description,
        ];
    }
}
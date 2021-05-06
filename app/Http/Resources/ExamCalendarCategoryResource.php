<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;

class ExamCalendarCategoryResource extends JsonResource
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
            'image' => Voyager::image($this->image),
            'slug' => $this->slug,
            'seo_keywords' => $this->seo_keywords,
            'seo_description' => $this->seo_description,
        ];
    }
}

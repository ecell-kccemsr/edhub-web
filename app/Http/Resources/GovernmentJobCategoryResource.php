<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;

class GovernmentJobCategoryResource extends JsonResource
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
            'image' =>  $this->image === null ? 'https://via.placeholder.com/600x325?text=Government Job' : (str_starts_with($this->image, 'http') ? $this->image : Voyager::image($this->image)),
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

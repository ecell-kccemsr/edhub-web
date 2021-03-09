<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CurrentAffairCategoryResource;
use App\Http\Resources\CurrentAffairSubCategoryResource;

class CurrentAffairResource extends JsonResource
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
            'slug' => $this->slug,
            'image' => Voyager::image($this->image),
            'url' => $this->url,
            'category' => new CurrentAffairCategoryResource($this->category_id),
            'subcategory' => new CurrentAffairSubCategoryResource($this->subcategory_id),
        ];
    }
}

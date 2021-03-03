<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class NewsResource extends JsonResource
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
            'details' => $this->details,
            'image' =>  Voyager::image($this->image),
            'category' => new NewsCategoryResource($this->category),
            'subcategory' => new NewsSubCategoryResource($this->sub_category),
            'created_at' => $this->created_at,
            'created_at_formated' => $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
            'updated_at_formated' => $this->updated_at->diffForHumans(),
        ];
    }
}

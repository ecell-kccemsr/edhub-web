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
            'url' => $this->url,
            'category' => new GovernmentJobCategoryResource($this->category_id),
            'subcategory' => new GovernmentJobSubCategoryResource($this->subcategory_id),
            'created_at' => $this->created_at,
            'created_at_formated' => $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
            'updated_at_formated' => $this->updated_at->diffForHumans(),
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExamCalendarResource extends JsonResource
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
            'name' => $this->name,
            'date' => $this->date,
            'image' => $this->image,
            'official' => $this->official,
            'created_at' => $this->created_at,
            'created_at_formated' => $this->created_at === null ? null : $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
            'updated_at_formated' => $this->updated_at === null ? null : $this->updated_at->diffForHumans(),
        ];
    }
}
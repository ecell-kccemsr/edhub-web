<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'gender' => $this->gender,
            'avatar' => str_starts_with($this->avatar, 'http') ? $this->avatar : Voyager::image($this->avatar),
            'seo_keywords' => $this->seo_keywords,
            'seo_description' => $this->seo_description,
            'verified' => $this->email_verified_at===null?false:true,
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\News;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

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
        $hasLiked = false;
        if(Auth::user()) {
            $hasLiked = Auth::user()->hasLiked(News::find($this->id)); 
        }
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'details' => $this->details,
            'tags' => $this->tags,
            'image' =>  Voyager::image($this->image),
            'total_views' => $this->total_views,
            'category' => new NewsCategoryResource($this->category),
            'subcategory' => new NewsSubCategoryResource($this->sub_category),
            'published_by' => $this->published_by,
            'published_at' => $this->published_at,
            'created_at' => $this->created_at,
            'created_at_formated' => $this->created_at === null ? null : $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
            'updated_at_formated' => $this->updated_at === null ? null : $this->updated_at->diffForHumans(),
            'slug' => $this->slug,
            'seo_keywords' => $this->seo_keywords,
            'seo_description' => $this->seo_description,
            'total_likes' => $this->likers()->count(),
            'has_liked' => $hasLiked,
        ];
    }
}

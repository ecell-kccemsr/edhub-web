<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Overtrue\LaravelLike\Traits\Likeable;
use BeyondCode\Comments\Traits\HasComments;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class News extends Model
{
    use HasFactory, HasSlug, Likeable, HasComments;

    public function category()
    {
        return $this->belongsTo('App\Models\NewsCategory','category_id');
    }

    public function sub_category()
    {
        return $this->belongsTo('App\Models\NewsSubCategory','subcategory_id');
    }
}
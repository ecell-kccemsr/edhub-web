<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCategory extends Model
{
    use HasFactory, HasSlug;
    public function course_sub_categories()
    {
        return $this->hasMany('App\Models\CourseSubCategory','course_category_id');
    }
}

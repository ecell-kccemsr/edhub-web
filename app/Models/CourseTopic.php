<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseTopic extends Model
{
    use HasFactory, HasSlug;

    public function course_sub_category()
    {
        return $this->belongsTo('App\Models\CourseSubCategory');
    }
}
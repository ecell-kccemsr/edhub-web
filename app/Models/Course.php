<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory, HasSlug;

    public function course_provider()
    {
        return $this->belongsTo('App\Models\CourseProvider','course_provider_id');
    }

    public function course_curriculum()
    {
        return $this->hasMany('App\Models\CourseCurriculum','course_id');
    }

    public function course_instructors()
    {
        return $this->hasMany('App\Models\CourseInstructor','course_id');
    }

    public function course_reviews()
    {
        return $this->hasMany('App\Models\CourseReview','course_id');
    }
}

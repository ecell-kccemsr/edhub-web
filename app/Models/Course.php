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

}

<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseSubCategory extends Model
{
    use HasFactory,HasSlug;

    /**
    * The attributes that aren't mass assignable.
    *
    * @var array
    */
    protected $guarded = [
        'id'
    ];

    public function course_category()
    {
        return $this->belongsTo('App\Models\CourseCategory');
    }
    public function course_topics()
    {
        return $this->hasMany('App\Models\CourseTopic','course_sub_category_id');
    }
}

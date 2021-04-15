<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurriculumLecture extends Model
{
    use HasFactory;

    /**
    * The attributes that aren't mass assignable.
    *
    * @var array
    */
    protected $guarded = [
        'id'
    ];


    public function course_chapter()
    {
        return $this->belongsTo('App\Models\CurriculumChapter','curriculum_chapter_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurriculumChapter extends Model
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


    public function curriculum_lectures()
    {
        return $this->hasMany('App\Models\CurriculumLecture','curriculum_chapter_id');
    }
}

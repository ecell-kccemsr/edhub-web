<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseProvider extends Model
{
    use HasFactory, HasSlug;

    public function courses()
    {
        return $this->hasMany("App\Models\Course");
    }
}

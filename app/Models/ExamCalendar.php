<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExamCalendar extends Model
{
    use HasFactory, HasSlug;

    protected $casts = [
        'official' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\ExamCalendarCategory','category_id');
    }

}

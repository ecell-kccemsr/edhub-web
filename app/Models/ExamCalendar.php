<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamCalendar extends Model
{
    use HasFactory;

    protected $casts = [
        'official' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\ExamCalendarCategory','category_id');
    }

}

<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class QuestionPaper extends Model
{
    use HasFactory, HasSlug;

    public function category()
    {
        return $this->belongsTo('App\Models\QuestionPaperCategory','category_id');
    }
}

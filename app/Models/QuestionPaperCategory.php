<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class QuestionPaperCategory extends Model
{
    use HasFactory, HasSlug;

    public function sub_categories()
    {
        return $this->hasMany('App\Models\QuestionPaperSubCategory','category_id');
    }
}

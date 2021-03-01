<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrentAffairSubCategory extends Model
{
    use HasFactory;

    public function category()
    {
        return $this->belongsTo('CurrentAffairCategory','category_id');
    }
}

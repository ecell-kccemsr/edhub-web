<?php

namespace App\Models;

use App\Models\CurrentAffairCategory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CurrentAffairSubCategory;
use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CurrentAffair extends Model
{
    use HasFactory, HasSlug;

    public function category()
    {
        return $this->belongsTo('CurrentAffairCategory','category_id');
    }

    public function sub_category()
    {
        return $this->belongsTo('CurrentAffairSubCategory','subcategory_id');
    }
}

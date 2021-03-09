<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GovernmentJob extends Model
{
    use HasFactory, HasSlug;

    public function category()
    {
        return $this->belongsTo('App\Models\GovernmentJobCategory','category_id');
    }

    public function sub_category()
    {
        return $this->belongsTo('App\Models\GovernmentJobSubCategory','subcategory_id');
    }
}

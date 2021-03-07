<?php 

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;

trait HasSlug {
    /**
    * The "booting" method of the model.
    */
    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (self $model): void {
            $model->generateSlug();
        });

        static::updating(function (self $model): void {
            $model->generateSlug();
        });
    }

    public function generateSlug()
    {
      $column = "name";
      if (Schema::hasColumn($this->getTable(), 'title')){
        $column = "title";
      }
      $slug = Str::slug($this->$column);
      $exists = Self::whereSlug($slug)->first();
      $no = 1;
      while ($exists) {
        $slug = Str::slug($this->$column) . "-$no";
        $exists = Self::whereSlug($slug)->first();
        $no++;
      }
      $this->slug = $slug;
    }

}
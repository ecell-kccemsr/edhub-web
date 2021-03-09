<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CurrentAffairSubCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('current_affair_sub_categories')->delete();
        
        \DB::table('current_affair_sub_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Mobiles',
                'slug' => 'Mobiles',
                'category_id' => 1,
                'created_at' => '2021-03-01 20:54:54',
                'updated_at' => '2021-03-01 20:54:54',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Gadgets',
                'slug' => 'Gadgets',
                'category_id' => 1,
                'created_at' => '2021-03-01 20:58:59',
                'updated_at' => '2021-03-01 20:58:59',
            ),
        ));
        
        
    }
}
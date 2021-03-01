<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CurrentAffairCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('current_affair_categories')->delete();
        
        \DB::table('current_affair_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Technology',
                'created_at' => '2021-03-01 20:54:29',
                'updated_at' => '2021-03-01 20:54:29',
            ),
        ));
        
        
    }
}
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GovernmentJobSubCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('government_job_sub_categories')->delete();
        
        \DB::table('government_job_sub_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'HDFC Bank',
                'image' => ' ',
                'category_id' => 1,
                'slug' => 'hdfc-bank',
                'created_at' => '2021-03-10 18:44:53',
                'updated_at' => '2021-03-10 18:44:53',
            ),
        ));
        
        
    }
}
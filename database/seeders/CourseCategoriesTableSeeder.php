<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_categories')->delete();
        
        \DB::table('course_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Computer Science',
                'slug' => 'computer-science',
                'created_at' => '2021-06-06 22:44:02',
                'updated_at' => '2021-06-06 22:44:02',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Business',
                'slug' => 'business',
                'created_at' => '2021-06-06 22:44:14',
                'updated_at' => '2021-06-06 22:44:14',
            ),
        ));
        
        
    }
}
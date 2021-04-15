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
                'name' => 'Development',
                'slug' => 'development',
                'created_at' => '2021-04-15 16:35:59',
                'updated_at' => '2021-04-15 16:35:59',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Business',
                'slug' => 'business',
                'created_at' => '2021-04-15 16:36:23',
                'updated_at' => '2021-04-15 16:36:23',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Finance & Accounting',
                'slug' => 'finance-accounting',
                'created_at' => '2021-04-15 16:37:02',
                'updated_at' => '2021-04-15 16:37:02',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'IT & Software',
                'slug' => 'it-software',
                'created_at' => '2021-04-15 16:37:16',
                'updated_at' => '2021-04-15 16:37:16',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Office Productivity',
                'slug' => 'office-productivity',
                'created_at' => '2021-04-15 16:37:28',
                'updated_at' => '2021-04-15 16:37:28',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Personal Dev',
                'slug' => 'personal-dev',
                'created_at' => '2021-04-15 16:37:40',
                'updated_at' => '2021-04-15 16:37:40',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Design',
                'slug' => 'design',
                'created_at' => '2021-04-15 16:37:50',
                'updated_at' => '2021-04-15 16:37:50',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Marketing',
                'slug' => 'marketing',
                'created_at' => '2021-04-15 16:38:01',
                'updated_at' => '2021-04-15 16:38:01',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Health & Fitness',
                'slug' => 'health-fitness',
                'created_at' => '2021-04-15 16:38:15',
                'updated_at' => '2021-04-15 16:38:15',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'Music',
                'slug' => 'music',
                'created_at' => '2021-04-15 16:38:29',
                'updated_at' => '2021-04-15 16:38:29',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'Teaching & Acad',
                'slug' => 'teaching-acad-1',
                'created_at' => '2021-04-15 16:38:00',
                'updated_at' => '2021-04-15 16:42:30',
            ),
        ));
        
        
    }
}
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
            2 => 
            array (
                'id' => 3,
                'name' => 'Finance & Accounting Courses',
                'slug' => 'finance-accounting-courses',
                'created_at' => '2021-06-11 12:31:34',
                'updated_at' => '2021-06-11 12:31:34',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'IT & Software',
                'slug' => 'it-software',
                'created_at' => '2021-06-11 12:31:58',
                'updated_at' => '2021-06-11 12:31:58',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Office Productivity',
                'slug' => 'office-productivity',
                'created_at' => '2021-06-11 12:32:14',
                'updated_at' => '2021-06-11 12:32:14',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Personal Development',
                'slug' => 'personal-development',
                'created_at' => '2021-06-11 12:32:29',
                'updated_at' => '2021-06-11 12:32:29',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Design',
                'slug' => 'design',
                'created_at' => '2021-06-11 12:32:46',
                'updated_at' => '2021-06-11 12:32:46',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Marketing',
                'slug' => 'marketing',
                'created_at' => '2021-06-11 12:33:05',
                'updated_at' => '2021-06-11 12:33:05',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Academics',
                'slug' => 'academics',
                'created_at' => '2021-06-19 18:20:17',
                'updated_at' => '2021-06-19 18:20:17',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'Photography & Video',
                'slug' => 'photography-video',
                'created_at' => '2021-06-19 18:21:11',
                'updated_at' => '2021-06-19 18:21:11',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'Fitness & Health',
                'slug' => 'fitness-health',
                'created_at' => '2021-06-19 18:21:34',
                'updated_at' => '2021-06-19 18:21:34',
            ),
        ));
        
        
    }
}
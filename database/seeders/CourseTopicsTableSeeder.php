<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseTopicsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_topics')->delete();
        
        \DB::table('course_topics')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Javascript',
                'course_sub_category_id' => 1,
                'slug' => 'javascript',
                'created_at' => '2021-04-15 17:58:27',
                'updated_at' => '2021-04-15 17:58:27',
            ),
            1 => 
            array (
                'id' => 3,
                'name' => 'React',
                'course_sub_category_id' => 1,
                'slug' => 'react',
                'created_at' => '2021-04-15 17:59:22',
                'updated_at' => '2021-04-15 17:59:22',
            ),
            2 => 
            array (
                'id' => 4,
                'name' => 'PHP',
                'course_sub_category_id' => 1,
                'slug' => 'php',
                'created_at' => '2021-04-15 17:59:38',
                'updated_at' => '2021-04-15 17:59:38',
            ),
            3 => 
            array (
                'id' => 5,
                'name' => 'CSS',
                'course_sub_category_id' => 1,
                'slug' => 'css',
                'created_at' => '2021-04-15 17:59:49',
                'updated_at' => '2021-04-15 17:59:49',
            ),
            4 => 
            array (
                'id' => 6,
                'name' => 'Angular Js',
                'course_sub_category_id' => 1,
                'slug' => 'angular-js',
                'created_at' => '2021-04-15 18:00:03',
                'updated_at' => '2021-04-15 18:00:03',
            ),
        ));
        
        
    }
}
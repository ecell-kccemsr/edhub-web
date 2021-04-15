<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseSubCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_sub_categories')->delete();
        
        \DB::table('course_sub_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Web Development',
                'course_category_id' => 1,
                'slug' => 'web-development',
                'created_at' => '2021-04-15 16:39:12',
                'updated_at' => '2021-04-15 16:39:12',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Data Science',
                'course_category_id' => 1,
                'slug' => 'data-science',
                'created_at' => '2021-04-15 16:39:30',
                'updated_at' => '2021-04-15 16:39:30',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Mobile Development',
                'course_category_id' => 1,
                'slug' => 'mobile-development',
                'created_at' => '2021-04-15 16:39:49',
                'updated_at' => '2021-04-15 16:39:49',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Programming Lang',
                'course_category_id' => 1,
                'slug' => 'programming-lang',
                'created_at' => '2021-04-15 16:40:04',
                'updated_at' => '2021-04-15 16:40:04',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Game Development',
                'course_category_id' => 1,
                'slug' => 'game-development',
                'created_at' => '2021-04-15 16:40:23',
                'updated_at' => '2021-04-15 16:40:23',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Software Testing',
                'course_category_id' => 1,
                'slug' => 'software-testing',
                'created_at' => '2021-04-15 16:40:38',
                'updated_at' => '2021-04-15 16:40:38',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Software Engineering',
                'course_category_id' => 1,
                'slug' => 'software-engineering',
                'created_at' => '2021-04-15 16:40:53',
                'updated_at' => '2021-04-15 16:40:53',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Development Tools',
                'course_category_id' => 1,
                'slug' => 'development-tools',
                'created_at' => '2021-04-15 16:41:14',
                'updated_at' => '2021-04-15 16:41:14',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'No-Code Development',
                'course_category_id' => 1,
                'slug' => 'no-code-development',
                'created_at' => '2021-04-15 16:41:30',
                'updated_at' => '2021-04-15 16:41:30',
            ),
        ));
        
        
    }
}
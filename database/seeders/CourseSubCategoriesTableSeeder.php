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
                'created_at' => '2021-06-06 22:44:35',
                'updated_at' => '2021-06-06 22:44:35',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Data Science',
                'course_category_id' => 1,
                'slug' => 'data-science',
                'created_at' => '2021-06-06 22:44:48',
                'updated_at' => '2021-06-06 22:44:48',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Programming Language',
                'course_category_id' => 1,
                'slug' => 'programming-language',
                'created_at' => '2021-06-06 22:45:06',
                'updated_at' => '2021-06-06 22:45:06',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Mobile Development',
                'course_category_id' => 1,
                'slug' => 'mobile-development',
                'created_at' => '2021-06-06 23:09:58',
                'updated_at' => '2021-06-06 23:09:58',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Database Design & Development',
                'course_category_id' => 1,
                'slug' => 'database-design-development',
                'created_at' => '2021-06-06 23:10:09',
                'updated_at' => '2021-06-06 23:10:09',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Game Development',
                'course_category_id' => 1,
                'slug' => 'game-development',
                'created_at' => '2021-06-06 23:10:20',
                'updated_at' => '2021-06-06 23:10:20',
            ),
            6 => 
            array (
                'id' => 8,
                'name' => 'Software Testing',
                'course_category_id' => 1,
                'slug' => 'software-testing',
                'created_at' => '2021-06-06 23:10:59',
                'updated_at' => '2021-06-06 23:10:59',
            ),
            7 => 
            array (
                'id' => 9,
                'name' => 'Software Engineering',
                'course_category_id' => 1,
                'slug' => 'software-engineering',
                'created_at' => '2021-06-06 23:11:30',
                'updated_at' => '2021-06-06 23:11:30',
            ),
            8 => 
            array (
                'id' => 10,
                'name' => 'Development Tool',
                'course_category_id' => 1,
                'slug' => 'development-tool',
                'created_at' => '2021-06-06 23:11:42',
                'updated_at' => '2021-06-06 23:11:42',
            ),
            9 => 
            array (
                'id' => 11,
                'name' => 'Entrepreneurship',
                'course_category_id' => 2,
                'slug' => 'entrepreneurship',
                'created_at' => '2021-06-06 23:27:31',
                'updated_at' => '2021-06-06 23:27:31',
            ),
            10 => 
            array (
                'id' => 12,
                'name' => 'Communication',
                'course_category_id' => 2,
                'slug' => 'communication',
                'created_at' => '2021-06-06 23:45:37',
                'updated_at' => '2021-06-06 23:45:37',
            ),
            11 => 
            array (
                'id' => 13,
                'name' => 'Management',
                'course_category_id' => 2,
                'slug' => 'management',
                'created_at' => '2021-06-07 00:15:32',
                'updated_at' => '2021-06-07 00:15:32',
            ),
        ));
        
        
    }
}
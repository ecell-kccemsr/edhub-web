<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseProvidersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_providers')->delete();
        
        \DB::table('course_providers')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Udemy',
                'url' => 'https://www.udemy.com',
                'image' => 'course-providers\\udemy.png',
                'slug' => 'udemy',
                'created_at' => '2021-04-02 15:41:58',
                'updated_at' => '2021-04-02 15:50:53',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Coursera',
                'url' => 'https://www.coursera.org',
                'image' => 'course-providers\\coursera.png',
                'slug' => 'coursera',
                'created_at' => '2021-04-02 15:51:43',
                'updated_at' => '2021-04-02 15:51:43',
            ),
        ));
        
        
    }
}
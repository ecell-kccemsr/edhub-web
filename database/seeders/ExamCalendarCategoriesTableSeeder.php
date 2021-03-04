<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ExamCalendarCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('exam_calendar_categories')->delete();
        
        \DB::table('exam_calendar_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Government Exams',
                'created_at' => '2021-03-04 18:22:35',
                'updated_at' => '2021-03-04 18:22:35',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Bank Exams',
                'created_at' => '2021-03-04 18:22:47',
                'updated_at' => '2021-03-04 18:22:47',
            ),
        ));
        
        
    }
}
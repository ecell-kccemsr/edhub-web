<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class QuestionPaperCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('question_paper_categories')->delete();
        
        \DB::table('question_paper_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Government Exams',
                'slug' => 'Government Exams',
                'created_at' => '2021-03-04 17:37:58',
                'updated_at' => '2021-03-04 17:37:58',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Bank Exams',
                'slug' => 'Bank Exams',
                'created_at' => '2021-03-04 17:38:13',
                'updated_at' => '2021-03-04 17:38:13',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'MBA Exams',
                'slug' => 'MBA Exams',
                'created_at' => '2021-03-04 17:38:29',
                'updated_at' => '2021-03-04 17:38:29',
            ),
        ));
        
        
    }
}
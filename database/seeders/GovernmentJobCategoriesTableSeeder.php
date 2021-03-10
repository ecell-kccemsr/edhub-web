<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GovernmentJobCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('government_job_categories')->delete();
        
        \DB::table('government_job_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Bank Jobs',
                'image' => 'government-job-categories\\March2021\\Rx9pAmWNPz8bdfWUChbr.png',
                'slug' => 'bank-jobs',
                'created_at' => '2021-03-10 18:43:32',
                'updated_at' => '2021-03-10 18:43:32',
            ),
        ));
        
        
    }
}
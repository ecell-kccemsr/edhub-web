<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class NewsCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('news_categories')->delete();
        
        \DB::table('news_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Business',
                'slug' => 'business',
                'created_at' => '2021-03-10 19:10:53',
                'updated_at' => '2021-03-10 19:11:25',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'India',
                'slug' => 'india',
                'created_at' => '2021-03-10 19:17:17',
                'updated_at' => '2021-03-10 19:17:17',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'World',
                'slug' => 'world',
                'created_at' => '2021-03-10 19:17:37',
                'updated_at' => '2021-03-10 19:17:37',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Technology',
                'slug' => 'technology',
                'created_at' => '2021-03-10 19:17:50',
                'updated_at' => '2021-03-10 19:17:50',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Entertainment',
                'slug' => 'entertainment',
                'created_at' => '2021-03-10 19:18:06',
                'updated_at' => '2021-03-10 19:18:06',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Sports',
                'slug' => 'sports',
                'created_at' => '2021-03-10 19:18:17',
                'updated_at' => '2021-03-10 19:18:17',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Science',
                'slug' => 'science',
                'created_at' => '2021-03-10 19:18:36',
                'updated_at' => '2021-03-10 19:18:36',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Health',
                'slug' => 'health',
                'created_at' => '2021-03-10 19:18:51',
                'updated_at' => '2021-03-10 19:18:51',
            ),
        ));
        
        
    }
}
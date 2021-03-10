<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class NewsSubCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('news_sub_categories')->delete();
        
        \DB::table('news_sub_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Latest News',
                'category_id' => 1,
                'slug' => 'latest-news',
                'created_at' => '2021-03-10 19:13:10',
                'updated_at' => '2021-03-10 19:13:10',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Economy',
                'category_id' => 1,
                'slug' => 'economy',
                'created_at' => '2021-03-10 19:13:23',
                'updated_at' => '2021-03-10 19:13:23',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Markets',
                'category_id' => 1,
                'slug' => 'markets',
                'created_at' => '2021-03-10 19:13:37',
                'updated_at' => '2021-03-10 19:13:37',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Jobs',
                'category_id' => 1,
                'slug' => 'jobs',
                'created_at' => '2021-03-10 19:13:51',
                'updated_at' => '2021-03-10 19:13:51',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Personal Finance',
                'category_id' => 1,
                'slug' => 'personal-finance',
                'created_at' => '2021-03-10 19:14:08',
                'updated_at' => '2021-03-10 19:14:08',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Entrepreneurship',
                'category_id' => 1,
                'slug' => 'entrepreneurship',
                'created_at' => '2021-03-10 19:14:24',
                'updated_at' => '2021-03-10 19:14:24',
            ),
        ));
        
        
    }
}
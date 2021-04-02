<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MenuItemsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('menu_items')->delete();
        
        \DB::table('menu_items')->insert(array (
            0 => 
            array (
                'id' => 1,
                'menu_id' => 1,
                'title' => 'Dashboard',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-boat',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 1,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.dashboard',
                'parameters' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'menu_id' => 1,
                'title' => 'Media',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-images',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 5,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.media.index',
                'parameters' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'menu_id' => 1,
                'title' => 'Users',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-person',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 3,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.users.index',
                'parameters' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'menu_id' => 1,
                'title' => 'Roles',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-lock',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 2,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.roles.index',
                'parameters' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'menu_id' => 1,
                'title' => 'Tools',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-tools',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 9,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => NULL,
                'parameters' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'menu_id' => 1,
                'title' => 'Menu Builder',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-list',
                'color' => NULL,
                'parent_id' => 5,
                'order' => 10,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.menus.index',
                'parameters' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'menu_id' => 1,
                'title' => 'Database',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-data',
                'color' => NULL,
                'parent_id' => 5,
                'order' => 11,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.database.index',
                'parameters' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'menu_id' => 1,
                'title' => 'Compass',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-compass',
                'color' => NULL,
                'parent_id' => 5,
                'order' => 12,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.compass.index',
                'parameters' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'menu_id' => 1,
                'title' => 'BREAD',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-bread',
                'color' => NULL,
                'parent_id' => 5,
                'order' => 13,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.bread.index',
                'parameters' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'menu_id' => 1,
                'title' => 'Settings',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-settings',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 14,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
                'route' => 'voyager.settings.index',
                'parameters' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'menu_id' => 1,
                'title' => 'Hooks',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-hook',
                'color' => NULL,
                'parent_id' => 5,
                'order' => 13,
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
                'route' => 'voyager.hooks',
                'parameters' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'menu_id' => 1,
                'title' => 'CA Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => '#000000',
                'parent_id' => NULL,
                'order' => 15,
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:39:49',
                'route' => 'voyager.current-affair-categories.index',
                'parameters' => 'null',
            ),
            12 => 
            array (
                'id' => 13,
                'menu_id' => 1,
                'title' => 'CA Sub Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => '#000000',
                'parent_id' => NULL,
                'order' => 16,
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:39:59',
                'route' => 'voyager.current-affair-sub-categories.index',
                'parameters' => 'null',
            ),
            13 => 
            array (
                'id' => 14,
                'menu_id' => 1,
                'title' => 'Current Affairs',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 17,
                'created_at' => '2021-03-01 20:41:56',
                'updated_at' => '2021-03-01 20:41:56',
                'route' => 'voyager.current-affairs.index',
                'parameters' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'menu_id' => 1,
                'title' => 'Exam Calendars',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 18,
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:19:31',
                'route' => 'voyager.exam-calendars.index',
                'parameters' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'menu_id' => 1,
                'title' => 'Exam Calendar Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 19,
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
                'route' => 'voyager.exam-calendar-categories.index',
                'parameters' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'menu_id' => 1,
                'title' => 'Government Job Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 20,
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
                'route' => 'voyager.government-job-categories.index',
                'parameters' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'menu_id' => 1,
                'title' => 'Government Job Sub Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 21,
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:22:23',
                'route' => 'voyager.government-job-sub-categories.index',
                'parameters' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'menu_id' => 1,
                'title' => 'Government Jobs',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 22,
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-10 18:25:20',
                'route' => 'voyager.government-jobs.index',
                'parameters' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'menu_id' => 1,
                'title' => 'News Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 23,
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
                'route' => 'voyager.news-categories.index',
                'parameters' => NULL,
            ),
            20 => 
            array (
                'id' => 22,
                'menu_id' => 1,
                'title' => 'News',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 25,
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:30:37',
                'route' => 'voyager.news.index',
                'parameters' => NULL,
            ),
            21 => 
            array (
                'id' => 23,
                'menu_id' => 1,
                'title' => 'News Sub Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 26,
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:34:04',
                'route' => 'voyager.news-sub-categories.index',
                'parameters' => NULL,
            ),
            22 => 
            array (
                'id' => 24,
                'menu_id' => 1,
                'title' => 'Exam Results',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 27,
                'created_at' => '2021-03-20 21:30:52',
                'updated_at' => '2021-03-20 21:30:52',
                'route' => 'voyager.exam-results.index',
                'parameters' => NULL,
            ),
            23 => 
            array (
                'id' => 25,
                'menu_id' => 1,
                'title' => 'Question Paper Categories',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-categories',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 28,
                'created_at' => '2021-03-21 12:36:42',
                'updated_at' => '2021-03-21 12:36:42',
                'route' => 'voyager.question-paper-categories.index',
                'parameters' => NULL,
            ),
            24 => 
            array (
                'id' => 26,
                'menu_id' => 1,
                'title' => 'Question Papers',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 29,
                'created_at' => '2021-03-21 12:37:38',
                'updated_at' => '2021-03-21 12:37:38',
                'route' => 'voyager.question-papers.index',
                'parameters' => NULL,
            ),
            25 => 
            array (
                'id' => 27,
                'menu_id' => 1,
                'title' => 'Register For Free Updates',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-company',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 30,
                'created_at' => '2021-03-21 17:54:19',
                'updated_at' => '2021-03-21 17:54:19',
                'route' => 'voyager.register-for-free-updates.index',
                'parameters' => NULL,
            ),
            26 => 
            array (
                'id' => 28,
                'menu_id' => 1,
                'title' => 'Courses',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-book',
                'color' => NULL,
                'parent_id' => NULL,
                'order' => 31,
                'created_at' => '2021-04-02 15:30:51',
                'updated_at' => '2021-04-02 15:30:51',
                'route' => 'voyager.courses.index',
                'parameters' => NULL,
            ),
            27 => 
            array (
                'id' => 29,
                'menu_id' => 1,
                'title' => 'Course Providers',
                'url' => '',
                'target' => '_self',
                'icon_class' => 'voyager-book',
                'color' => '#000000',
                'parent_id' => NULL,
                'order' => 32,
                'created_at' => '2021-04-02 15:32:55',
                'updated_at' => '2021-04-02 15:38:49',
                'route' => 'voyager.course-providers.index',
                'parameters' => 'null',
            ),
        ));
        
        
    }
}
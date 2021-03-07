<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DataTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('data_types')->delete();
        
        \DB::table('data_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'users',
                'slug' => 'users',
                'display_name_singular' => 'User',
                'display_name_plural' => 'Users',
                'icon' => 'voyager-person',
                'model_name' => 'TCG\\Voyager\\Models\\User',
                'policy_name' => 'TCG\\Voyager\\Policies\\UserPolicy',
                'controller' => 'TCG\\Voyager\\Http\\Controllers\\VoyagerUserController',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'menus',
                'slug' => 'menus',
                'display_name_singular' => 'Menu',
                'display_name_plural' => 'Menus',
                'icon' => 'voyager-list',
                'model_name' => 'TCG\\Voyager\\Models\\Menu',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'roles',
                'slug' => 'roles',
                'display_name_singular' => 'Role',
                'display_name_plural' => 'Roles',
                'icon' => 'voyager-lock',
                'model_name' => 'TCG\\Voyager\\Models\\Role',
                'policy_name' => NULL,
                'controller' => 'TCG\\Voyager\\Http\\Controllers\\VoyagerRoleController',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'current_affair_categories',
                'slug' => 'current-affair-categories',
                'display_name_singular' => 'Current Affair Category',
                'display_name_plural' => 'Current Affair Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\CurrentAffairCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:39:15',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'current_affair_sub_categories',
                'slug' => 'current-affair-sub-categories',
                'display_name_singular' => 'Current Affair Sub Category',
                'display_name_plural' => 'Current Affair Sub Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\CurrentAffairSubCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:36:54',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'current_affairs',
                'slug' => 'current-affairs',
                'display_name_singular' => 'Current Affair',
                'display_name_plural' => 'Current Affairs',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\CurrentAffair',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-01 20:41:55',
                'updated_at' => '2021-03-01 20:44:45',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'exam_calendars',
                'slug' => 'exam-calendars',
                'display_name_singular' => 'Exam Calendar',
                'display_name_plural' => 'Exam Calendars',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\ExamCalendar',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:26:29',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'exam_calendar_categories',
                'slug' => 'exam-calendar-categories',
                'display_name_singular' => 'Exam Calendar Category',
                'display_name_plural' => 'Exam Calendar Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\ExamCalendarCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
            ),
        ));
        
        
    }
}
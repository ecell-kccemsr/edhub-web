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
            8 => 
            array (
                'id' => 9,
                'name' => 'government_job_categories',
                'slug' => 'government-job-categories',
                'display_name_singular' => 'Government Job Category',
                'display_name_plural' => 'Government Job Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\GovernmentJobCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'government_job_sub_categories',
                'slug' => 'government-job-sub-categories',
                'display_name_singular' => 'Government Job Sub Category',
                'display_name_plural' => 'Government Job Sub Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\GovernmentJobSubCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:23:47',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'government_jobs',
                'slug' => 'government-jobs',
                'display_name_singular' => 'Government Job',
                'display_name_plural' => 'Government Jobs',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\GovernmentJob',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-20 21:39:23',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'news_categories',
                'slug' => 'news-categories',
                'display_name_singular' => 'News Category',
                'display_name_plural' => 'News Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\NewsCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
            ),
            12 => 
            array (
                'id' => 14,
                'name' => 'news',
                'slug' => 'news',
                'display_name_singular' => 'News',
                'display_name_plural' => 'News',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\News',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:32:09',
            ),
            13 => 
            array (
                'id' => 15,
                'name' => 'news_sub_categories',
                'slug' => 'news-sub-categories',
                'display_name_singular' => 'News Sub Category',
                'display_name_plural' => 'News Sub Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\NewsSubCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:36:37',
            ),
            14 => 
            array (
                'id' => 16,
                'name' => 'exam_results',
                'slug' => 'exam-results',
                'display_name_singular' => 'Exam Result',
                'display_name_plural' => 'Exam Results',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\ExamResult',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2021-03-20 21:30:52',
                'updated_at' => '2021-03-20 21:30:52',
            ),
            15 => 
            array (
                'id' => 17,
                'name' => 'question_paper_categories',
                'slug' => 'question-paper-categories',
                'display_name_singular' => 'Question Paper Category',
                'display_name_plural' => 'Question Paper Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'App\\Models\\QuestionPaperCategory',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2021-03-21 12:36:42',
                'updated_at' => '2021-03-21 12:36:42',
            ),
            16 => 
            array (
                'id' => 18,
                'name' => 'question_papers',
                'slug' => 'question-papers',
                'display_name_singular' => 'Question Paper',
                'display_name_plural' => 'Question Papers',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\QuestionPaper',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2021-03-21 12:37:38',
                'updated_at' => '2021-03-21 12:40:15',
            ),
            17 => 
            array (
                'id' => 20,
                'name' => 'register_for_free_updates',
                'slug' => 'register-for-free-updates',
                'display_name_singular' => 'Register For Free Update',
                'display_name_plural' => 'Register For Free Updates',
                'icon' => 'voyager-company',
                'model_name' => 'App\\Models\\RegisterForFreeUpdates',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2021-03-21 17:54:19',
                'updated_at' => '2021-03-21 17:54:19',
            ),
        ));
        
        
    }
}
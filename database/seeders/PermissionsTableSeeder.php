<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'key' => 'browse_admin',
                'table_name' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            1 => 
            array (
                'id' => 2,
                'key' => 'browse_bread',
                'table_name' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            2 => 
            array (
                'id' => 3,
                'key' => 'browse_database',
                'table_name' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            3 => 
            array (
                'id' => 4,
                'key' => 'browse_media',
                'table_name' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            4 => 
            array (
                'id' => 5,
                'key' => 'browse_compass',
                'table_name' => NULL,
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            5 => 
            array (
                'id' => 6,
                'key' => 'browse_menus',
                'table_name' => 'menus',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            6 => 
            array (
                'id' => 7,
                'key' => 'read_menus',
                'table_name' => 'menus',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            7 => 
            array (
                'id' => 8,
                'key' => 'edit_menus',
                'table_name' => 'menus',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            8 => 
            array (
                'id' => 9,
                'key' => 'add_menus',
                'table_name' => 'menus',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            9 => 
            array (
                'id' => 10,
                'key' => 'delete_menus',
                'table_name' => 'menus',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            10 => 
            array (
                'id' => 11,
                'key' => 'browse_roles',
                'table_name' => 'roles',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            11 => 
            array (
                'id' => 12,
                'key' => 'read_roles',
                'table_name' => 'roles',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            12 => 
            array (
                'id' => 13,
                'key' => 'edit_roles',
                'table_name' => 'roles',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            13 => 
            array (
                'id' => 14,
                'key' => 'add_roles',
                'table_name' => 'roles',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            14 => 
            array (
                'id' => 15,
                'key' => 'delete_roles',
                'table_name' => 'roles',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            15 => 
            array (
                'id' => 16,
                'key' => 'browse_users',
                'table_name' => 'users',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            16 => 
            array (
                'id' => 17,
                'key' => 'read_users',
                'table_name' => 'users',
                'created_at' => '2021-03-01 17:27:12',
                'updated_at' => '2021-03-01 17:27:12',
            ),
            17 => 
            array (
                'id' => 18,
                'key' => 'edit_users',
                'table_name' => 'users',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            18 => 
            array (
                'id' => 19,
                'key' => 'add_users',
                'table_name' => 'users',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            19 => 
            array (
                'id' => 20,
                'key' => 'delete_users',
                'table_name' => 'users',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            20 => 
            array (
                'id' => 21,
                'key' => 'browse_settings',
                'table_name' => 'settings',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            21 => 
            array (
                'id' => 22,
                'key' => 'read_settings',
                'table_name' => 'settings',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            22 => 
            array (
                'id' => 23,
                'key' => 'edit_settings',
                'table_name' => 'settings',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            23 => 
            array (
                'id' => 24,
                'key' => 'add_settings',
                'table_name' => 'settings',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            24 => 
            array (
                'id' => 25,
                'key' => 'delete_settings',
                'table_name' => 'settings',
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            25 => 
            array (
                'id' => 26,
                'key' => 'browse_hooks',
                'table_name' => NULL,
                'created_at' => '2021-03-01 17:27:13',
                'updated_at' => '2021-03-01 17:27:13',
            ),
            26 => 
            array (
                'id' => 27,
                'key' => 'browse_current_affair_categories',
                'table_name' => 'current_affair_categories',
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:30:30',
            ),
            27 => 
            array (
                'id' => 28,
                'key' => 'read_current_affair_categories',
                'table_name' => 'current_affair_categories',
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:30:30',
            ),
            28 => 
            array (
                'id' => 29,
                'key' => 'edit_current_affair_categories',
                'table_name' => 'current_affair_categories',
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:30:30',
            ),
            29 => 
            array (
                'id' => 30,
                'key' => 'add_current_affair_categories',
                'table_name' => 'current_affair_categories',
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:30:30',
            ),
            30 => 
            array (
                'id' => 31,
                'key' => 'delete_current_affair_categories',
                'table_name' => 'current_affair_categories',
                'created_at' => '2021-03-01 20:30:30',
                'updated_at' => '2021-03-01 20:30:30',
            ),
            31 => 
            array (
                'id' => 32,
                'key' => 'browse_current_affair_sub_categories',
                'table_name' => 'current_affair_sub_categories',
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:32:21',
            ),
            32 => 
            array (
                'id' => 33,
                'key' => 'read_current_affair_sub_categories',
                'table_name' => 'current_affair_sub_categories',
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:32:21',
            ),
            33 => 
            array (
                'id' => 34,
                'key' => 'edit_current_affair_sub_categories',
                'table_name' => 'current_affair_sub_categories',
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:32:21',
            ),
            34 => 
            array (
                'id' => 35,
                'key' => 'add_current_affair_sub_categories',
                'table_name' => 'current_affair_sub_categories',
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:32:21',
            ),
            35 => 
            array (
                'id' => 36,
                'key' => 'delete_current_affair_sub_categories',
                'table_name' => 'current_affair_sub_categories',
                'created_at' => '2021-03-01 20:32:21',
                'updated_at' => '2021-03-01 20:32:21',
            ),
            36 => 
            array (
                'id' => 37,
                'key' => 'browse_current_affairs',
                'table_name' => 'current_affairs',
                'created_at' => '2021-03-01 20:41:56',
                'updated_at' => '2021-03-01 20:41:56',
            ),
            37 => 
            array (
                'id' => 38,
                'key' => 'read_current_affairs',
                'table_name' => 'current_affairs',
                'created_at' => '2021-03-01 20:41:56',
                'updated_at' => '2021-03-01 20:41:56',
            ),
            38 => 
            array (
                'id' => 39,
                'key' => 'edit_current_affairs',
                'table_name' => 'current_affairs',
                'created_at' => '2021-03-01 20:41:56',
                'updated_at' => '2021-03-01 20:41:56',
            ),
            39 => 
            array (
                'id' => 40,
                'key' => 'add_current_affairs',
                'table_name' => 'current_affairs',
                'created_at' => '2021-03-01 20:41:56',
                'updated_at' => '2021-03-01 20:41:56',
            ),
            40 => 
            array (
                'id' => 41,
                'key' => 'delete_current_affairs',
                'table_name' => 'current_affairs',
                'created_at' => '2021-03-01 20:41:56',
                'updated_at' => '2021-03-01 20:41:56',
            ),
            41 => 
            array (
                'id' => 42,
                'key' => 'browse_exam_calendars',
                'table_name' => 'exam_calendars',
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:19:31',
            ),
            42 => 
            array (
                'id' => 43,
                'key' => 'read_exam_calendars',
                'table_name' => 'exam_calendars',
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:19:31',
            ),
            43 => 
            array (
                'id' => 44,
                'key' => 'edit_exam_calendars',
                'table_name' => 'exam_calendars',
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:19:31',
            ),
            44 => 
            array (
                'id' => 45,
                'key' => 'add_exam_calendars',
                'table_name' => 'exam_calendars',
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:19:31',
            ),
            45 => 
            array (
                'id' => 46,
                'key' => 'delete_exam_calendars',
                'table_name' => 'exam_calendars',
                'created_at' => '2021-03-04 18:19:31',
                'updated_at' => '2021-03-04 18:19:31',
            ),
            46 => 
            array (
                'id' => 47,
                'key' => 'browse_exam_calendar_categories',
                'table_name' => 'exam_calendar_categories',
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
            ),
            47 => 
            array (
                'id' => 48,
                'key' => 'read_exam_calendar_categories',
                'table_name' => 'exam_calendar_categories',
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
            ),
            48 => 
            array (
                'id' => 49,
                'key' => 'edit_exam_calendar_categories',
                'table_name' => 'exam_calendar_categories',
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
            ),
            49 => 
            array (
                'id' => 50,
                'key' => 'add_exam_calendar_categories',
                'table_name' => 'exam_calendar_categories',
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
            ),
            50 => 
            array (
                'id' => 51,
                'key' => 'delete_exam_calendar_categories',
                'table_name' => 'exam_calendar_categories',
                'created_at' => '2021-03-04 18:20:02',
                'updated_at' => '2021-03-04 18:20:02',
            ),
            51 => 
            array (
                'id' => 52,
                'key' => 'browse_government_job_categories',
                'table_name' => 'government_job_categories',
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
            ),
            52 => 
            array (
                'id' => 53,
                'key' => 'read_government_job_categories',
                'table_name' => 'government_job_categories',
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
            ),
            53 => 
            array (
                'id' => 54,
                'key' => 'edit_government_job_categories',
                'table_name' => 'government_job_categories',
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
            ),
            54 => 
            array (
                'id' => 55,
                'key' => 'add_government_job_categories',
                'table_name' => 'government_job_categories',
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
            ),
            55 => 
            array (
                'id' => 56,
                'key' => 'delete_government_job_categories',
                'table_name' => 'government_job_categories',
                'created_at' => '2021-03-10 18:21:21',
                'updated_at' => '2021-03-10 18:21:21',
            ),
            56 => 
            array (
                'id' => 57,
                'key' => 'browse_government_job_sub_categories',
                'table_name' => 'government_job_sub_categories',
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:22:23',
            ),
            57 => 
            array (
                'id' => 58,
                'key' => 'read_government_job_sub_categories',
                'table_name' => 'government_job_sub_categories',
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:22:23',
            ),
            58 => 
            array (
                'id' => 59,
                'key' => 'edit_government_job_sub_categories',
                'table_name' => 'government_job_sub_categories',
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:22:23',
            ),
            59 => 
            array (
                'id' => 60,
                'key' => 'add_government_job_sub_categories',
                'table_name' => 'government_job_sub_categories',
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:22:23',
            ),
            60 => 
            array (
                'id' => 61,
                'key' => 'delete_government_job_sub_categories',
                'table_name' => 'government_job_sub_categories',
                'created_at' => '2021-03-10 18:22:23',
                'updated_at' => '2021-03-10 18:22:23',
            ),
            61 => 
            array (
                'id' => 62,
                'key' => 'browse_government_jobs',
                'table_name' => 'government_jobs',
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-10 18:25:20',
            ),
            62 => 
            array (
                'id' => 63,
                'key' => 'read_government_jobs',
                'table_name' => 'government_jobs',
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-10 18:25:20',
            ),
            63 => 
            array (
                'id' => 64,
                'key' => 'edit_government_jobs',
                'table_name' => 'government_jobs',
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-10 18:25:20',
            ),
            64 => 
            array (
                'id' => 65,
                'key' => 'add_government_jobs',
                'table_name' => 'government_jobs',
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-10 18:25:20',
            ),
            65 => 
            array (
                'id' => 66,
                'key' => 'delete_government_jobs',
                'table_name' => 'government_jobs',
                'created_at' => '2021-03-10 18:25:20',
                'updated_at' => '2021-03-10 18:25:20',
            ),
            66 => 
            array (
                'id' => 67,
                'key' => 'browse_news_categories',
                'table_name' => 'news_categories',
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
            ),
            67 => 
            array (
                'id' => 68,
                'key' => 'read_news_categories',
                'table_name' => 'news_categories',
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
            ),
            68 => 
            array (
                'id' => 69,
                'key' => 'edit_news_categories',
                'table_name' => 'news_categories',
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
            ),
            69 => 
            array (
                'id' => 70,
                'key' => 'add_news_categories',
                'table_name' => 'news_categories',
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
            ),
            70 => 
            array (
                'id' => 71,
                'key' => 'delete_news_categories',
                'table_name' => 'news_categories',
                'created_at' => '2021-03-10 18:26:20',
                'updated_at' => '2021-03-10 18:26:20',
            ),
            71 => 
            array (
                'id' => 77,
                'key' => 'browse_news',
                'table_name' => 'news',
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:30:37',
            ),
            72 => 
            array (
                'id' => 78,
                'key' => 'read_news',
                'table_name' => 'news',
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:30:37',
            ),
            73 => 
            array (
                'id' => 79,
                'key' => 'edit_news',
                'table_name' => 'news',
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:30:37',
            ),
            74 => 
            array (
                'id' => 80,
                'key' => 'add_news',
                'table_name' => 'news',
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:30:37',
            ),
            75 => 
            array (
                'id' => 81,
                'key' => 'delete_news',
                'table_name' => 'news',
                'created_at' => '2021-03-10 18:30:37',
                'updated_at' => '2021-03-10 18:30:37',
            ),
            76 => 
            array (
                'id' => 82,
                'key' => 'browse_news_sub_categories',
                'table_name' => 'news_sub_categories',
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:34:04',
            ),
            77 => 
            array (
                'id' => 83,
                'key' => 'read_news_sub_categories',
                'table_name' => 'news_sub_categories',
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:34:04',
            ),
            78 => 
            array (
                'id' => 84,
                'key' => 'edit_news_sub_categories',
                'table_name' => 'news_sub_categories',
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:34:04',
            ),
            79 => 
            array (
                'id' => 85,
                'key' => 'add_news_sub_categories',
                'table_name' => 'news_sub_categories',
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:34:04',
            ),
            80 => 
            array (
                'id' => 86,
                'key' => 'delete_news_sub_categories',
                'table_name' => 'news_sub_categories',
                'created_at' => '2021-03-10 18:34:04',
                'updated_at' => '2021-03-10 18:34:04',
            ),
        ));
        
        
    }
}
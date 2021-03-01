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
        ));
        
        
    }
}
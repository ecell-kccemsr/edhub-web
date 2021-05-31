<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('users')->delete();

        \DB::table('users')->insert(array(
            0 =>
            array(
                'id' => 1,
                'role_id' => 1,
                'name' => env('ADMIN_NAME', 'admin'),
                'email' => env('ADMIN_EMAIL', 'admin'),
                'avatar' => 'avatar.png',
                'email_verified_at' => NULL,
                'password' => '$2y$10$d/Fb/MiIaIURZW.U6ZlZAe285JYgt6KLw6OIj0/PtlyTh/SvNGUxq',
                'remember_token' => NULL,
                'settings' => NULL,
                'created_at' => '2021-03-01 17:28:58',
                'updated_at' => '2021-03-01 17:28:58',
            ),
        ));
    }
}

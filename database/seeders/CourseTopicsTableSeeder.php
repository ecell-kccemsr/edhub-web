<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseTopicsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('course_topics')->delete();

        \DB::table('course_topics')->insert(array(
            0 =>
            array(
                'id' => 1,
                'name' => 'Javascript',
                'course_sub_category_id' => 1,
                'slug' => 'javascript',
                'created_at' => '2021-06-06 22:47:04',
                'updated_at' => '2021-06-06 22:47:04',
            ),
            1 =>
            array(
                'id' => 2,
                'name' => 'React',
                'course_sub_category_id' => 1,
                'slug' => 'react',
                'created_at' => '2021-06-06 23:15:23',
                'updated_at' => '2021-06-06 23:15:23',
            ),
            2 =>
            array(
                'id' => 3,
                'name' => 'CSS',
                'course_sub_category_id' => 1,
                'slug' => 'css',
                'created_at' => '2021-06-06 23:17:08',
                'updated_at' => '2021-06-06 23:17:08',
            ),
            3 =>
            array(
                'id' => 4,
                'name' => 'Angular',
                'course_sub_category_id' => 1,
                'slug' => 'angular',
                'created_at' => '2021-06-06 23:17:44',
                'updated_at' => '2021-06-06 23:17:44',
            ),
            4 =>
            array(
                'id' => 5,
                'name' => 'PHP',
                'course_sub_category_id' => 1,
                'slug' => 'php',
                'created_at' => '2021-06-06 23:18:14',
                'updated_at' => '2021-06-06 23:18:14',
            ),
            5 =>
            array(
                'id' => 6,
                'name' => 'Django',
                'course_sub_category_id' => 1,
                'slug' => 'django',
                'created_at' => '2021-06-06 23:22:21',
                'updated_at' => '2021-06-06 23:22:21',
            ),
            6 =>
            array(
                'id' => 7,
                'name' => 'Node JS',
                'course_sub_category_id' => 1,
                'slug' => 'node-js',
                'created_at' => '2021-06-06 23:23:14',
                'updated_at' => '2021-06-06 23:23:14',
            ),
            7 =>
            array(
                'id' => 8,
                'name' => 'Wordpress',
                'course_sub_category_id' => 1,
                'slug' => 'wordpress',
                'created_at' => '2021-06-06 23:23:46',
                'updated_at' => '2021-06-06 23:23:46',
            ),
            8 =>
            array(
                'id' => 9,
                'name' => 'business fundamentals',
                'course_sub_category_id' => 11,
                'slug' => 'business-fundamentals-1',
                'created_at' => '2021-06-06 23:29:20',
                'updated_at' => '2021-06-06 23:44:21',
            ),
            9 =>
            array(
                'id' => 10,
                'name' => 'entrepreneurship Fundamentals',
                'course_sub_category_id' => 11,
                'slug' => 'entrepreneurship-fundamentals',
                'created_at' => '2021-06-06 23:31:18',
                'updated_at' => '2021-06-06 23:31:18',
            ),
            10 =>
            array(
                'id' => 11,
                'name' => 'business strategy',
                'course_sub_category_id' => 11,
                'slug' => 'business-strategy',
                'created_at' => '2021-06-06 23:32:58',
                'updated_at' => '2021-06-06 23:32:58',
            ),
            11 =>
            array(
                'id' => 12,
                'name' => 'startup',
                'course_sub_category_id' => 11,
                'slug' => 'startup',
                'created_at' => '2021-06-06 23:34:30',
                'updated_at' => '2021-06-06 23:34:30',
            ),
            12 =>
            array(
                'id' => 13,
                'name' => 'freelancing',
                'course_sub_category_id' => 11,
                'slug' => 'freelancing',
                'created_at' => '2021-06-06 23:36:35',
                'updated_at' => '2021-06-06 23:36:35',
            ),
            13 =>
            array(
                'id' => 14,
                'name' => 'business plan',
                'course_sub_category_id' => 11,
                'slug' => 'business-plan-1',
                'created_at' => '2021-06-06 23:38:31',
                'updated_at' => '2021-06-06 23:45:01',
            ),
            14 =>
            array(
                'id' => 15,
                'name' => 'online business',
                'course_sub_category_id' => 11,
                'slug' => 'online-business',
                'created_at' => '2021-06-06 23:39:43',
                'updated_at' => '2021-06-06 23:39:43',
            ),
            15 =>
            array(
                'id' => 16,
                'name' => 'blogging',
                'course_sub_category_id' => 11,
                'slug' => 'blogging',
                'created_at' => '2021-06-06 23:41:01',
                'updated_at' => '2021-06-06 23:41:01',
            ),
            16 =>
            array(
                'id' => 17,
                'name' => 'home business',
                'course_sub_category_id' => 11,
                'slug' => 'home-business',
                'created_at' => '2021-06-06 23:42:17',
                'updated_at' => '2021-06-06 23:42:17',
            ),
            17 =>
            array(
                'id' => 18,
                'name' => 'communication skills',
                'course_sub_category_id' => 12,
                'slug' => 'communication-skills',
                'created_at' => '2021-06-06 23:48:01',
                'updated_at' => '2021-06-06 23:48:01',
            ),
            18 =>
            array(
                'id' => 19,
                'name' => 'presentation skills',
                'course_sub_category_id' => 12,
                'slug' => 'presentation-skills',
                'created_at' => '2021-06-06 23:50:02',
                'updated_at' => '2021-06-06 23:50:02',
            ),
            19 =>
            array(
                'id' => 20,
                'name' => 'writing',
                'course_sub_category_id' => 12,
                'slug' => 'writing',
                'created_at' => '2021-06-06 23:51:27',
                'updated_at' => '2021-06-06 23:51:27',
            ),
            20 =>
            array(
                'id' => 21,
                'name' => 'public speaking',
                'course_sub_category_id' => 12,
                'slug' => 'public-speaking-1',
                'created_at' => '2021-06-06 23:53:06',
                'updated_at' => '2021-06-06 23:55:12',
            ),
            21 =>
            array(
                'id' => 22,
                'name' => 'fiction writing',
                'course_sub_category_id' => 12,
                'slug' => 'fiction-writing',
                'created_at' => '2021-06-06 23:54:40',
                'updated_at' => '2021-06-06 23:54:40',
            ),
            22 =>
            array(
                'id' => 23,
                'name' => 'business writing',
                'course_sub_category_id' => 12,
                'slug' => 'business-writing',
                'created_at' => '2021-06-06 23:57:16',
                'updated_at' => '2021-06-06 23:57:16',
            ),
            23 =>
            array(
                'id' => 24,
                'name' => 'email etiquette',
                'course_sub_category_id' => 12,
                'slug' => 'email-etiquette',
                'created_at' => '2021-06-06 23:58:40',
                'updated_at' => '2021-06-06 23:58:40',
            ),
            24 =>
            array(
                'id' => 25,
                'name' => 'business communication',
                'course_sub_category_id' => 12,
                'slug' => 'business-communication',
                'created_at' => '2021-06-06 23:59:54',
                'updated_at' => '2021-06-06 23:59:54',
            ),
            25 =>
            array(
                'id' => 26,
                'name' => 'storytelling',
                'course_sub_category_id' => 12,
                'slug' => 'storytelling',
                'created_at' => '2021-06-07 00:01:08',
                'updated_at' => '2021-06-07 00:01:08',
            ),
            26 =>
            array(
                'id' => 27,
                'name' => 'product management',
                'course_sub_category_id' => 13,
                'slug' => 'product-management',
                'created_at' => '2021-06-07 00:17:04',
                'updated_at' => '2021-06-07 00:17:04',
            ),
            27 =>
            array(
                'id' => 28,
                'name' => 'leadership',
                'course_sub_category_id' => 13,
                'slug' => 'leadership',
                'created_at' => '2021-06-07 00:18:26',
                'updated_at' => '2021-06-07 00:18:26',
            ),
            28 =>
            array(
                'id' => 29,
                'name' => 'management skills',
                'course_sub_category_id' => 13,
                'slug' => 'management-skills',
                'created_at' => '2021-06-07 00:19:26',
                'updated_at' => '2021-06-07 00:19:26',
            ),
            29 =>
            array(
                'id' => 30,
                'name' => 'business strategy',
                'course_sub_category_id' => 13,
                'slug' => 'business-strategy-1',
                'created_at' => '2021-06-07 00:20:39',
                'updated_at' => '2021-06-07 00:20:39',
            ),
            30 =>
            array(
                'id' => 31,
                'name' => 'ISO 9001',
                'course_sub_category_id' => 13,
                'slug' => 'iso-9001',
                'created_at' => '2021-06-07 00:21:58',
                'updated_at' => '2021-06-07 00:21:58',
            ),
            31 =>
            array(
                'id' => 32,
                'name' => 'business process management',
                'course_sub_category_id' => 13,
                'slug' => 'business-process-management',
                'created_at' => '2021-06-07 00:23:17',
                'updated_at' => '2021-06-07 00:23:17',
            ),
            32 =>
            array(
                'id' => 33,
                'name' => 'quality management',
                'course_sub_category_id' => 13,
                'slug' => 'quality-management',
                'created_at' => '2021-06-07 00:24:39',
                'updated_at' => '2021-06-07 00:24:39',
            ),
            33 =>
            array(
                'id' => 34,
                'name' => 'manager training',
                'course_sub_category_id' => 13,
                'slug' => 'manager-training',
                'created_at' => '2021-06-07 00:25:51',
                'updated_at' => '2021-06-07 00:25:51',
            ),
            34 =>
            array(
                'id' => 35,
                'name' => 'Agile',
                'course_sub_category_id' => 13,
                'slug' => 'agile',
                'created_at' => '2021-06-07 00:27:01',
                'updated_at' => '2021-06-07 00:27:01',
            ),
        ));
    }
}

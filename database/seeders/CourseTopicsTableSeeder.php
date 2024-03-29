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
        
        \DB::table('course_topics')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Javascript',
                'course_sub_category_id' => 1,
                'slug' => 'javascript',
                'created_at' => '2021-06-06 22:47:04',
                'updated_at' => '2021-06-06 22:47:04',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'React',
                'course_sub_category_id' => 1,
                'slug' => 'react',
                'created_at' => '2021-06-06 23:15:23',
                'updated_at' => '2021-06-06 23:15:23',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'CSS',
                'course_sub_category_id' => 1,
                'slug' => 'css',
                'created_at' => '2021-06-06 23:17:08',
                'updated_at' => '2021-06-06 23:17:08',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Angular',
                'course_sub_category_id' => 1,
                'slug' => 'angular',
                'created_at' => '2021-06-06 23:17:44',
                'updated_at' => '2021-06-06 23:17:44',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'PHP',
                'course_sub_category_id' => 1,
                'slug' => 'php',
                'created_at' => '2021-06-06 23:18:14',
                'updated_at' => '2021-06-06 23:18:14',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Django',
                'course_sub_category_id' => 1,
                'slug' => 'django',
                'created_at' => '2021-06-06 23:22:21',
                'updated_at' => '2021-06-06 23:22:21',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Node JS',
                'course_sub_category_id' => 1,
                'slug' => 'node-js',
                'created_at' => '2021-06-06 23:23:14',
                'updated_at' => '2021-06-06 23:23:14',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Wordpress',
                'course_sub_category_id' => 1,
                'slug' => 'wordpress',
                'created_at' => '2021-06-06 23:23:46',
                'updated_at' => '2021-06-06 23:23:46',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'business fundamentals',
                'course_sub_category_id' => 11,
                'slug' => 'business-fundamentals-1',
                'created_at' => '2021-06-06 23:29:20',
                'updated_at' => '2021-06-06 23:44:21',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'entrepreneurship Fundamentals',
                'course_sub_category_id' => 11,
                'slug' => 'entrepreneurship-fundamentals',
                'created_at' => '2021-06-06 23:31:18',
                'updated_at' => '2021-06-06 23:31:18',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'business strategy',
                'course_sub_category_id' => 11,
                'slug' => 'business-strategy',
                'created_at' => '2021-06-06 23:32:58',
                'updated_at' => '2021-06-06 23:32:58',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'startup',
                'course_sub_category_id' => 11,
                'slug' => 'startup',
                'created_at' => '2021-06-06 23:34:30',
                'updated_at' => '2021-06-06 23:34:30',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'freelancing',
                'course_sub_category_id' => 11,
                'slug' => 'freelancing',
                'created_at' => '2021-06-06 23:36:35',
                'updated_at' => '2021-06-06 23:36:35',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'business plan',
                'course_sub_category_id' => 11,
                'slug' => 'business-plan-1',
                'created_at' => '2021-06-06 23:38:31',
                'updated_at' => '2021-06-06 23:45:01',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'online business',
                'course_sub_category_id' => 11,
                'slug' => 'online-business',
                'created_at' => '2021-06-06 23:39:43',
                'updated_at' => '2021-06-06 23:39:43',
            ),
            15 => 
            array (
                'id' => 16,
                'name' => 'blogging',
                'course_sub_category_id' => 11,
                'slug' => 'blogging',
                'created_at' => '2021-06-06 23:41:01',
                'updated_at' => '2021-06-06 23:41:01',
            ),
            16 => 
            array (
                'id' => 17,
                'name' => 'home business',
                'course_sub_category_id' => 11,
                'slug' => 'home-business',
                'created_at' => '2021-06-06 23:42:17',
                'updated_at' => '2021-06-06 23:42:17',
            ),
            17 => 
            array (
                'id' => 18,
                'name' => 'communication skills',
                'course_sub_category_id' => 12,
                'slug' => 'communication-skills',
                'created_at' => '2021-06-06 23:48:01',
                'updated_at' => '2021-06-06 23:48:01',
            ),
            18 => 
            array (
                'id' => 19,
                'name' => 'presentation skills',
                'course_sub_category_id' => 12,
                'slug' => 'presentation-skills',
                'created_at' => '2021-06-06 23:50:02',
                'updated_at' => '2021-06-06 23:50:02',
            ),
            19 => 
            array (
                'id' => 20,
                'name' => 'writing',
                'course_sub_category_id' => 12,
                'slug' => 'writing',
                'created_at' => '2021-06-06 23:51:27',
                'updated_at' => '2021-06-06 23:51:27',
            ),
            20 => 
            array (
                'id' => 21,
                'name' => 'public speaking',
                'course_sub_category_id' => 12,
                'slug' => 'public-speaking-1',
                'created_at' => '2021-06-06 23:53:06',
                'updated_at' => '2021-06-06 23:55:12',
            ),
            21 => 
            array (
                'id' => 22,
                'name' => 'fiction writing',
                'course_sub_category_id' => 12,
                'slug' => 'fiction-writing',
                'created_at' => '2021-06-06 23:54:40',
                'updated_at' => '2021-06-06 23:54:40',
            ),
            22 => 
            array (
                'id' => 23,
                'name' => 'business writing',
                'course_sub_category_id' => 12,
                'slug' => 'business-writing',
                'created_at' => '2021-06-06 23:57:16',
                'updated_at' => '2021-06-06 23:57:16',
            ),
            23 => 
            array (
                'id' => 24,
                'name' => 'email etiquette',
                'course_sub_category_id' => 12,
                'slug' => 'email-etiquette',
                'created_at' => '2021-06-06 23:58:40',
                'updated_at' => '2021-06-06 23:58:40',
            ),
            24 => 
            array (
                'id' => 25,
                'name' => 'business communication',
                'course_sub_category_id' => 12,
                'slug' => 'business-communication',
                'created_at' => '2021-06-06 23:59:54',
                'updated_at' => '2021-06-06 23:59:54',
            ),
            25 => 
            array (
                'id' => 26,
                'name' => 'storytelling',
                'course_sub_category_id' => 12,
                'slug' => 'storytelling',
                'created_at' => '2021-06-07 00:01:08',
                'updated_at' => '2021-06-07 00:01:08',
            ),
            26 => 
            array (
                'id' => 27,
                'name' => 'product management',
                'course_sub_category_id' => 13,
                'slug' => 'product-management',
                'created_at' => '2021-06-07 00:17:04',
                'updated_at' => '2021-06-07 00:17:04',
            ),
            27 => 
            array (
                'id' => 28,
                'name' => 'leadership',
                'course_sub_category_id' => 13,
                'slug' => 'leadership',
                'created_at' => '2021-06-07 00:18:26',
                'updated_at' => '2021-06-07 00:18:26',
            ),
            28 => 
            array (
                'id' => 29,
                'name' => 'management skills',
                'course_sub_category_id' => 13,
                'slug' => 'management-skills',
                'created_at' => '2021-06-07 00:19:26',
                'updated_at' => '2021-06-07 00:19:26',
            ),
            29 => 
            array (
                'id' => 30,
                'name' => 'business strategy',
                'course_sub_category_id' => 13,
                'slug' => 'business-strategy-1',
                'created_at' => '2021-06-07 00:20:39',
                'updated_at' => '2021-06-07 00:20:39',
            ),
            30 => 
            array (
                'id' => 31,
                'name' => 'ISO 9001',
                'course_sub_category_id' => 13,
                'slug' => 'iso-9001',
                'created_at' => '2021-06-07 00:21:58',
                'updated_at' => '2021-06-07 00:21:58',
            ),
            31 => 
            array (
                'id' => 32,
                'name' => 'business process management',
                'course_sub_category_id' => 13,
                'slug' => 'business-process-management',
                'created_at' => '2021-06-07 00:23:17',
                'updated_at' => '2021-06-07 00:23:17',
            ),
            32 => 
            array (
                'id' => 33,
                'name' => 'quality management',
                'course_sub_category_id' => 13,
                'slug' => 'quality-management',
                'created_at' => '2021-06-07 00:24:39',
                'updated_at' => '2021-06-07 00:24:39',
            ),
            33 => 
            array (
                'id' => 34,
                'name' => 'manager training',
                'course_sub_category_id' => 13,
                'slug' => 'manager-training',
                'created_at' => '2021-06-07 00:25:51',
                'updated_at' => '2021-06-07 00:25:51',
            ),
            34 => 
            array (
                'id' => 35,
                'name' => 'Agile',
                'course_sub_category_id' => 13,
                'slug' => 'agile',
                'created_at' => '2021-06-07 00:27:01',
                'updated_at' => '2021-06-07 00:27:01',
            ),
            35 => 
            array (
                'id' => 36,
                'name' => 'Python',
                'course_sub_category_id' => 2,
                'slug' => 'python',
                'created_at' => '2021-06-18 21:57:37',
                'updated_at' => '2021-06-18 21:57:37',
            ),
            36 => 
            array (
                'id' => 37,
                'name' => 'Machine learning',
                'course_sub_category_id' => 2,
                'slug' => 'machine-learning',
                'created_at' => '2021-06-18 21:57:58',
                'updated_at' => '2021-06-18 21:57:58',
            ),
            37 => 
            array (
                'id' => 38,
                'name' => 'Deep Learning',
                'course_sub_category_id' => 2,
                'slug' => 'deep-learning',
                'created_at' => '2021-06-18 21:58:15',
                'updated_at' => '2021-06-18 21:58:15',
            ),
            38 => 
            array (
                'id' => 39,
                'name' => 'Data Analysis',
                'course_sub_category_id' => 2,
                'slug' => 'data-analysis',
                'created_at' => '2021-06-18 21:58:37',
                'updated_at' => '2021-06-18 21:58:37',
            ),
            39 => 
            array (
                'id' => 40,
                'name' => 'Artificial Intelligence',
                'course_sub_category_id' => 2,
                'slug' => 'artificial-intelligence',
                'created_at' => '2021-06-18 22:00:16',
                'updated_at' => '2021-06-18 22:00:16',
            ),
            40 => 
            array (
                'id' => 41,
            'name' => 'R(Programming lang)',
                'course_sub_category_id' => 2,
                'slug' => 'rprogramming-lang',
                'created_at' => '2021-06-18 22:00:32',
                'updated_at' => '2021-06-18 22:00:32',
            ),
            41 => 
            array (
                'id' => 42,
                'name' => 'Tenserflow',
                'course_sub_category_id' => 2,
                'slug' => 'tenserflow',
                'created_at' => '2021-06-18 22:00:48',
                'updated_at' => '2021-06-18 22:00:48',
            ),
            42 => 
            array (
                'id' => 43,
                'name' => 'Statistics',
                'course_sub_category_id' => 2,
                'slug' => 'statistics',
                'created_at' => '2021-06-18 22:01:05',
                'updated_at' => '2021-06-18 22:01:05',
            ),
            43 => 
            array (
                'id' => 44,
                'name' => 'google flutter',
                'course_sub_category_id' => 4,
                'slug' => 'google-flutter-1',
                'created_at' => '2021-06-18 22:01:19',
                'updated_at' => '2021-06-18 22:02:05',
            ),
            44 => 
            array (
                'id' => 45,
                'name' => 'andriod development',
                'course_sub_category_id' => 4,
                'slug' => 'andriod-development-1',
                'created_at' => '2021-06-18 22:01:35',
                'updated_at' => '2021-06-18 22:02:20',
            ),
            45 => 
            array (
                'id' => 46,
                'name' => 'ios development',
                'course_sub_category_id' => 4,
                'slug' => 'ios-development',
                'created_at' => '2021-06-18 22:02:39',
                'updated_at' => '2021-06-18 22:02:39',
            ),
            46 => 
            array (
                'id' => 47,
                'name' => 'swift',
                'course_sub_category_id' => 4,
                'slug' => 'swift',
                'created_at' => '2021-06-18 22:02:55',
                'updated_at' => '2021-06-18 22:02:55',
            ),
            47 => 
            array (
                'id' => 48,
                'name' => 'react native',
                'course_sub_category_id' => 4,
                'slug' => 'react-native',
                'created_at' => '2021-06-18 22:03:50',
                'updated_at' => '2021-06-18 22:03:50',
            ),
            48 => 
            array (
                'id' => 49,
                'name' => 'dart',
                'course_sub_category_id' => 4,
                'slug' => 'dart',
                'created_at' => '2021-06-18 22:04:07',
                'updated_at' => '2021-06-18 22:04:07',
            ),
            49 => 
            array (
                'id' => 50,
                'name' => 'kotlin',
                'course_sub_category_id' => 4,
                'slug' => 'kotlin',
                'created_at' => '2021-06-18 22:04:20',
                'updated_at' => '2021-06-18 22:04:20',
            ),
            50 => 
            array (
                'id' => 51,
                'name' => 'swiftUI',
                'course_sub_category_id' => 4,
                'slug' => 'swiftui',
                'created_at' => '2021-06-18 22:04:35',
                'updated_at' => '2021-06-18 22:04:35',
            ),
            51 => 
            array (
                'id' => 52,
                'name' => 'Java',
                'course_sub_category_id' => 3,
                'slug' => 'java',
                'created_at' => '2021-06-18 22:06:19',
                'updated_at' => '2021-06-18 22:06:19',
            ),
            52 => 
            array (
                'id' => 53,
                'name' => 'c#',
                'course_sub_category_id' => 3,
                'slug' => 'c',
                'created_at' => '2021-06-18 22:06:34',
                'updated_at' => '2021-06-18 22:06:34',
            ),
            53 => 
            array (
                'id' => 54,
                'name' => 'react',
                'course_sub_category_id' => 3,
                'slug' => 'react-1',
                'created_at' => '2021-06-18 22:06:55',
                'updated_at' => '2021-06-18 22:06:55',
            ),
            54 => 
            array (
                'id' => 55,
                'name' => 'C++',
                'course_sub_category_id' => 3,
                'slug' => 'c-1',
                'created_at' => '2021-06-18 22:07:11',
                'updated_at' => '2021-06-18 22:07:11',
            ),
            55 => 
            array (
                'id' => 56,
                'name' => 'C',
                'course_sub_category_id' => 3,
                'slug' => 'c-2',
                'created_at' => '2021-06-18 22:07:38',
                'updated_at' => '2021-06-18 22:07:38',
            ),
            56 => 
            array (
                'id' => 57,
                'name' => 'Life Coach Training',
                'course_sub_category_id' => 45,
                'slug' => 'life-coach-training',
                'created_at' => '2021-06-18 22:10:39',
                'updated_at' => '2021-06-18 22:10:39',
            ),
            57 => 
            array (
                'id' => 58,
                'name' => 'Personal Development',
                'course_sub_category_id' => 45,
                'slug' => 'personal-development',
                'created_at' => '2021-06-18 22:11:04',
                'updated_at' => '2021-06-18 22:11:04',
            ),
            58 => 
            array (
                'id' => 59,
                'name' => 'Neuro-Linguistic Programming',
                'course_sub_category_id' => 45,
                'slug' => 'neuro-linguistic-programming',
                'created_at' => '2021-06-18 22:11:29',
                'updated_at' => '2021-06-18 22:11:29',
            ),
            59 => 
            array (
                'id' => 60,
                'name' => 'Goal Setting',
                'course_sub_category_id' => 45,
                'slug' => 'goal-setting',
                'created_at' => '2021-06-18 22:13:36',
                'updated_at' => '2021-06-18 22:13:36',
            ),
            60 => 
            array (
                'id' => 61,
                'name' => 'CBT',
                'course_sub_category_id' => 45,
                'slug' => 'cbt',
                'created_at' => '2021-06-18 22:14:09',
                'updated_at' => '2021-06-18 22:14:09',
            ),
            61 => 
            array (
                'id' => 62,
                'name' => 'Meditation',
                'course_sub_category_id' => 45,
                'slug' => 'meditation',
                'created_at' => '2021-06-18 22:14:33',
                'updated_at' => '2021-06-18 22:14:33',
            ),
            62 => 
            array (
                'id' => 63,
                'name' => 'Life Purpose',
                'course_sub_category_id' => 45,
                'slug' => 'life-purpose',
                'created_at' => '2021-06-18 22:14:52',
                'updated_at' => '2021-06-18 22:14:52',
            ),
            63 => 
            array (
                'id' => 64,
                'name' => 'Mindfulness',
                'course_sub_category_id' => 45,
                'slug' => 'mindfulness',
                'created_at' => '2021-06-18 22:15:17',
                'updated_at' => '2021-06-18 22:15:17',
            ),
            64 => 
            array (
                'id' => 65,
                'name' => 'Freight Broker',
                'course_sub_category_id' => 57,
                'slug' => 'freight-broker',
                'created_at' => '2021-06-18 22:23:01',
                'updated_at' => '2021-06-18 22:23:01',
            ),
            65 => 
            array (
                'id' => 66,
                'name' => 'American Accent',
                'course_sub_category_id' => 57,
                'slug' => 'american-accent',
                'created_at' => '2021-06-18 22:23:31',
                'updated_at' => '2021-06-18 22:23:31',
            ),
            66 => 
            array (
                'id' => 67,
                'name' => 'Car Repair',
                'course_sub_category_id' => 57,
                'slug' => 'car-repair',
                'created_at' => '2021-06-18 22:24:05',
                'updated_at' => '2021-06-18 22:24:05',
            ),
            67 => 
            array (
                'id' => 68,
                'name' => 'English Pronunciation',
                'course_sub_category_id' => 57,
                'slug' => 'english-pronunciation',
                'created_at' => '2021-06-18 22:24:41',
                'updated_at' => '2021-06-18 22:24:41',
            ),
            68 => 
            array (
                'id' => 69,
                'name' => 'French Language',
                'course_sub_category_id' => 57,
                'slug' => 'french-language',
                'created_at' => '2021-06-18 22:25:16',
                'updated_at' => '2021-06-18 22:25:16',
            ),
            69 => 
            array (
                'id' => 70,
                'name' => 'Handwriting Analysis',
                'course_sub_category_id' => 57,
                'slug' => 'handwriting-analysis',
                'created_at' => '2021-06-18 22:26:04',
                'updated_at' => '2021-06-18 22:26:04',
            ),
            70 => 
            array (
                'id' => 71,
                'name' => 'Public Speaking',
                'course_sub_category_id' => 57,
                'slug' => 'public-speaking',
                'created_at' => '2021-06-18 22:26:58',
                'updated_at' => '2021-06-18 22:26:58',
            ),
            71 => 
            array (
                'id' => 72,
                'name' => 'Contract Law',
                'course_sub_category_id' => 57,
                'slug' => 'contract-law',
                'created_at' => '2021-06-18 22:27:33',
                'updated_at' => '2021-06-18 22:27:33',
            ),
            72 => 
            array (
                'id' => 73,
                'name' => 'Presentation Skills',
                'course_sub_category_id' => 57,
                'slug' => 'presentation-skills-1',
                'created_at' => '2021-06-18 22:28:02',
                'updated_at' => '2021-06-18 22:28:02',
            ),
            73 => 
            array (
                'id' => 74,
                'name' => 'Neuroplasticity',
                'course_sub_category_id' => 56,
                'slug' => 'neuroplasticity',
                'created_at' => '2021-06-18 22:29:46',
                'updated_at' => '2021-06-18 22:29:46',
            ),
            74 => 
            array (
                'id' => 75,
                'name' => 'Procrastination',
                'course_sub_category_id' => 56,
                'slug' => 'procrastination',
                'created_at' => '2021-06-18 22:31:33',
                'updated_at' => '2021-06-18 22:31:33',
            ),
            75 => 
            array (
                'id' => 76,
                'name' => 'Personal Success',
                'course_sub_category_id' => 56,
                'slug' => 'personal-success',
                'created_at' => '2021-06-18 22:32:05',
                'updated_at' => '2021-06-18 22:32:05',
            ),
            76 => 
            array (
                'id' => 77,
                'name' => 'Neuro-Linguistic Programming',
                'course_sub_category_id' => 56,
                'slug' => 'neuro-linguistic-programming-1',
                'created_at' => '2021-06-18 22:32:48',
                'updated_at' => '2021-06-18 22:32:48',
            ),
            77 => 
            array (
                'id' => 78,
                'name' => 'Neuroscience',
                'course_sub_category_id' => 56,
                'slug' => 'neuroscience',
                'created_at' => '2021-06-18 22:33:32',
                'updated_at' => '2021-06-18 22:33:32',
            ),
            78 => 
            array (
                'id' => 79,
                'name' => 'Goal Setting',
                'course_sub_category_id' => 56,
                'slug' => 'goal-setting-1',
                'created_at' => '2021-06-18 22:34:04',
                'updated_at' => '2021-06-18 22:34:04',
            ),
            79 => 
            array (
                'id' => 80,
                'name' => 'Habits',
                'course_sub_category_id' => 56,
                'slug' => 'habits',
                'created_at' => '2021-06-18 22:34:31',
                'updated_at' => '2021-06-18 22:34:31',
            ),
            80 => 
            array (
                'id' => 81,
                'name' => 'Self-Discipline',
                'course_sub_category_id' => 56,
                'slug' => 'self-discipline',
                'created_at' => '2021-06-18 22:34:58',
                'updated_at' => '2021-06-18 22:34:58',
            ),
            81 => 
            array (
                'id' => 82,
                'name' => 'Memory',
                'course_sub_category_id' => 55,
                'slug' => 'memory',
                'created_at' => '2021-06-18 22:53:47',
                'updated_at' => '2021-06-18 22:53:47',
            ),
            82 => 
            array (
                'id' => 83,
                'name' => 'Speed Reading',
                'course_sub_category_id' => 55,
                'slug' => 'speed-reading',
                'created_at' => '2021-06-18 22:54:08',
                'updated_at' => '2021-06-18 22:54:08',
            ),
            83 => 
            array (
                'id' => 84,
                'name' => 'Learning Strategies',
                'course_sub_category_id' => 55,
                'slug' => 'learning-strategies',
                'created_at' => '2021-06-18 22:54:28',
                'updated_at' => '2021-06-18 22:54:28',
            ),
            84 => 
            array (
                'id' => 85,
                'name' => 'Study Skills',
                'course_sub_category_id' => 55,
                'slug' => 'study-skills',
                'created_at' => '2021-06-18 22:54:58',
                'updated_at' => '2021-06-18 22:54:58',
            ),
            85 => 
            array (
                'id' => 86,
                'name' => 'Focus Mastery',
                'course_sub_category_id' => 55,
                'slug' => 'focus-mastery',
                'created_at' => '2021-06-18 22:55:36',
                'updated_at' => '2021-06-18 22:55:36',
            ),
            86 => 
            array (
                'id' => 87,
                'name' => 'Mind Mapping',
                'course_sub_category_id' => 55,
                'slug' => 'mind-mapping',
                'created_at' => '2021-06-18 22:56:00',
                'updated_at' => '2021-06-18 22:56:00',
            ),
            87 => 
            array (
                'id' => 88,
                'name' => 'Learning Disability',
                'course_sub_category_id' => 55,
                'slug' => 'learning-disability',
                'created_at' => '2021-06-18 22:56:19',
                'updated_at' => '2021-06-18 22:56:19',
            ),
            88 => 
            array (
                'id' => 89,
                'name' => 'Personal Productivity',
                'course_sub_category_id' => 55,
                'slug' => 'personal-productivity',
                'created_at' => '2021-06-18 22:56:40',
                'updated_at' => '2021-06-18 22:56:40',
            ),
            89 => 
            array (
                'id' => 90,
                'name' => 'Personal Development',
                'course_sub_category_id' => 55,
                'slug' => 'personal-development-1',
                'created_at' => '2021-06-18 22:57:45',
                'updated_at' => '2021-06-18 22:57:45',
            ),
            90 => 
            array (
                'id' => 91,
                'name' => 'Anger Management',
                'course_sub_category_id' => 54,
                'slug' => 'anger-management',
                'created_at' => '2021-06-18 22:58:38',
                'updated_at' => '2021-06-18 22:58:38',
            ),
            91 => 
            array (
                'id' => 92,
                'name' => 'Emotional Intelligence',
                'course_sub_category_id' => 54,
                'slug' => 'emotional-intelligence',
                'created_at' => '2021-06-18 22:59:28',
                'updated_at' => '2021-06-18 22:59:28',
            ),
            92 => 
            array (
                'id' => 93,
                'name' => 'Anxiety Management',
                'course_sub_category_id' => 54,
                'slug' => 'anxiety-management',
                'created_at' => '2021-06-18 22:59:47',
                'updated_at' => '2021-06-18 22:59:47',
            ),
            93 => 
            array (
                'id' => 94,
                'name' => 'EFT',
                'course_sub_category_id' => 54,
                'slug' => 'eft',
                'created_at' => '2021-06-18 23:00:18',
                'updated_at' => '2021-06-18 23:00:18',
            ),
            94 => 
            array (
                'id' => 95,
                'name' => 'Resilience',
                'course_sub_category_id' => 54,
                'slug' => 'resilience',
                'created_at' => '2021-06-18 23:01:39',
                'updated_at' => '2021-06-18 23:01:39',
            ),
            95 => 
            array (
                'id' => 96,
                'name' => 'Ayurveda',
                'course_sub_category_id' => 54,
                'slug' => 'ayurveda',
                'created_at' => '2021-06-18 23:03:34',
                'updated_at' => '2021-06-18 23:03:34',
            ),
            96 => 
            array (
                'id' => 97,
                'name' => 'Personal Branding',
                'course_sub_category_id' => 52,
                'slug' => 'personal-branding',
                'created_at' => '2021-06-18 23:16:30',
                'updated_at' => '2021-06-18 23:16:30',
            ),
            97 => 
            array (
                'id' => 98,
                'name' => 'Body Language',
                'course_sub_category_id' => 52,
                'slug' => 'body-language',
                'created_at' => '2021-06-18 23:17:04',
                'updated_at' => '2021-06-18 23:17:55',
            ),
            98 => 
            array (
                'id' => 99,
                'name' => 'French Language',
                'course_sub_category_id' => 52,
                'slug' => 'french-language-1',
                'created_at' => '2021-06-18 23:18:56',
                'updated_at' => '2021-06-18 23:18:56',
            ),
            99 => 
            array (
                'id' => 100,
                'name' => 'LinkedIn',
                'course_sub_category_id' => 52,
                'slug' => 'linkedin',
                'created_at' => '2021-06-18 23:19:25',
                'updated_at' => '2021-06-18 23:19:25',
            ),
            100 => 
            array (
                'id' => 101,
                'name' => 'Voice Training',
                'course_sub_category_id' => 52,
                'slug' => 'voice-training',
                'created_at' => '2021-06-18 23:19:52',
                'updated_at' => '2021-06-18 23:19:52',
            ),
            101 => 
            array (
                'id' => 102,
                'name' => 'Business Communication',
                'course_sub_category_id' => 52,
                'slug' => 'business-communication-1',
                'created_at' => '2021-06-18 23:21:19',
                'updated_at' => '2021-06-18 23:21:19',
            ),
            102 => 
            array (
                'id' => 103,
                'name' => 'Communication Skills',
                'course_sub_category_id' => 52,
                'slug' => 'communication-skills-1',
                'created_at' => '2021-06-18 23:21:43',
                'updated_at' => '2021-06-18 23:21:43',
            ),
            103 => 
            array (
                'id' => 104,
                'name' => 'Writing a Book',
                'course_sub_category_id' => 52,
                'slug' => 'writing-a-book',
                'created_at' => '2021-06-18 23:22:11',
                'updated_at' => '2021-06-18 23:22:11',
            ),
            104 => 
            array (
                'id' => 105,
                'name' => 'Meetings',
                'course_sub_category_id' => 52,
                'slug' => 'meetings',
                'created_at' => '2021-06-18 23:22:57',
                'updated_at' => '2021-06-18 23:22:57',
            ),
            105 => 
            array (
                'id' => 106,
                'name' => 'Life Coach Training',
                'course_sub_category_id' => 49,
                'slug' => 'life-coach-training-1',
                'created_at' => '2021-06-18 23:24:44',
                'updated_at' => '2021-06-18 23:24:44',
            ),
            106 => 
            array (
                'id' => 107,
                'name' => 'Childhood Trauma Healing',
                'course_sub_category_id' => 49,
                'slug' => 'childhood-trauma-healing',
                'created_at' => '2021-06-18 23:25:44',
                'updated_at' => '2021-06-18 23:25:44',
            ),
            107 => 
            array (
                'id' => 108,
            'name' => 'Eye Movement Desensitization and Reprocessing (EMDR)',
                'course_sub_category_id' => 49,
                'slug' => 'eye-movement-desensitization-and-reprocessing-emdr',
                'created_at' => '2021-06-18 23:26:04',
                'updated_at' => '2021-06-18 23:26:04',
            ),
            108 => 
            array (
                'id' => 109,
                'name' => 'Positive Psychology',
                'course_sub_category_id' => 49,
                'slug' => 'positive-psychology',
                'created_at' => '2021-06-18 23:27:07',
                'updated_at' => '2021-06-18 23:27:07',
            ),
            109 => 
            array (
                'id' => 110,
                'name' => 'Law of Attraction',
                'course_sub_category_id' => 49,
                'slug' => 'law-of-attraction',
                'created_at' => '2021-06-18 23:27:30',
                'updated_at' => '2021-06-18 23:27:30',
            ),
            110 => 
            array (
                'id' => 111,
                'name' => 'Life Purpose',
                'course_sub_category_id' => 49,
                'slug' => 'life-purpose-1',
                'created_at' => '2021-06-18 23:27:51',
                'updated_at' => '2021-06-18 23:27:51',
            ),
            111 => 
            array (
                'id' => 112,
                'name' => 'Parenting',
                'course_sub_category_id' => 48,
                'slug' => 'parenting',
                'created_at' => '2021-06-18 23:28:30',
                'updated_at' => '2021-06-18 23:28:30',
            ),
            112 => 
            array (
                'id' => 113,
                'name' => 'Relationship Building',
                'course_sub_category_id' => 48,
                'slug' => 'relationship-building',
                'created_at' => '2021-06-18 23:28:49',
                'updated_at' => '2021-06-18 23:28:49',
            ),
            113 => 
            array (
                'id' => 114,
                'name' => 'Child Psychology',
                'course_sub_category_id' => 48,
                'slug' => 'child-psychology-1',
                'created_at' => '2021-06-18 23:29:38',
                'updated_at' => '2021-06-18 23:30:17',
            ),
            114 => 
            array (
                'id' => 115,
                'name' => 'Love',
                'course_sub_category_id' => 48,
                'slug' => 'love',
                'created_at' => '2021-06-18 23:30:08',
                'updated_at' => '2021-06-18 23:30:08',
            ),
            115 => 
            array (
                'id' => 116,
                'name' => 'Counseling',
                'course_sub_category_id' => 48,
                'slug' => 'counseling',
                'created_at' => '2021-06-18 23:30:45',
                'updated_at' => '2021-06-18 23:30:45',
            ),
            116 => 
            array (
                'id' => 117,
                'name' => 'Early Childhood Education',
                'course_sub_category_id' => 48,
                'slug' => 'early-childhood-education',
                'created_at' => '2021-06-18 23:31:05',
                'updated_at' => '2021-06-18 23:31:05',
            ),
            117 => 
            array (
                'id' => 118,
                'name' => 'Life Coach Training',
                'course_sub_category_id' => 48,
                'slug' => 'life-coach-training-2',
                'created_at' => '2021-06-18 23:31:57',
                'updated_at' => '2021-06-18 23:31:57',
            ),
            118 => 
            array (
                'id' => 119,
                'name' => 'Marriage',
                'course_sub_category_id' => 48,
                'slug' => 'marriage',
                'created_at' => '2021-06-18 23:32:56',
                'updated_at' => '2021-06-18 23:32:56',
            ),
            119 => 
            array (
                'id' => 120,
                'name' => 'Childhood Trauma Healing',
                'course_sub_category_id' => 48,
                'slug' => 'childhood-trauma-healing-1',
                'created_at' => '2021-06-18 23:33:14',
                'updated_at' => '2021-06-18 23:33:14',
            ),
            120 => 
            array (
                'id' => 121,
                'name' => 'Resume and CV Writing',
                'course_sub_category_id' => 47,
                'slug' => 'resume-and-cv-writing',
                'created_at' => '2021-06-18 23:34:31',
                'updated_at' => '2021-06-18 23:34:31',
            ),
            121 => 
            array (
                'id' => 122,
                'name' => 'Interviewing Skills',
                'course_sub_category_id' => 47,
                'slug' => 'interviewing-skills',
                'created_at' => '2021-06-18 23:34:53',
                'updated_at' => '2021-06-18 23:34:53',
            ),
            122 => 
            array (
                'id' => 123,
                'name' => 'Job Search',
                'course_sub_category_id' => 47,
                'slug' => 'job-search',
                'created_at' => '2021-06-18 23:35:23',
                'updated_at' => '2021-06-18 23:35:23',
            ),
            123 => 
            array (
                'id' => 124,
                'name' => 'Business Writing',
                'course_sub_category_id' => 47,
                'slug' => 'business-writing-1',
                'created_at' => '2021-06-18 23:35:48',
                'updated_at' => '2021-06-18 23:35:48',
            ),
            124 => 
            array (
                'id' => 125,
                'name' => 'Business Communication',
                'course_sub_category_id' => 47,
                'slug' => 'business-communication-2',
                'created_at' => '2021-06-18 23:36:16',
                'updated_at' => '2021-06-18 23:36:16',
            ),
            125 => 
            array (
                'id' => 126,
                'name' => 'Personal Networking',
                'course_sub_category_id' => 47,
                'slug' => 'personal-networking',
                'created_at' => '2021-06-18 23:42:17',
                'updated_at' => '2021-06-18 23:42:17',
            ),
            126 => 
            array (
                'id' => 127,
                'name' => 'Management Skills',
                'course_sub_category_id' => 46,
                'slug' => 'management-skills-1',
                'created_at' => '2021-06-18 23:42:52',
                'updated_at' => '2021-06-18 23:42:52',
            ),
            127 => 
            array (
                'id' => 128,
                'name' => 'Manager Training',
                'course_sub_category_id' => 46,
                'slug' => 'manager-training-1',
                'created_at' => '2021-06-18 23:43:15',
                'updated_at' => '2021-06-18 23:43:15',
            ),
            128 => 
            array (
                'id' => 129,
                'name' => 'Public Speaking',
                'course_sub_category_id' => 46,
                'slug' => 'public-speaking-2',
                'created_at' => '2021-06-18 23:43:41',
                'updated_at' => '2021-06-18 23:43:41',
            ),
            129 => 
            array (
                'id' => 130,
                'name' => 'Conflict Management',
                'course_sub_category_id' => 46,
                'slug' => 'conflict-management',
                'created_at' => '2021-06-18 23:44:14',
                'updated_at' => '2021-06-18 23:44:14',
            ),
            130 => 
            array (
                'id' => 131,
                'name' => 'Listening Skills',
                'course_sub_category_id' => 46,
                'slug' => 'listening-skills',
                'created_at' => '2021-06-18 23:45:14',
                'updated_at' => '2021-06-18 23:45:14',
            ),
            131 => 
            array (
                'id' => 132,
                'name' => 'Relationship Building',
                'course_sub_category_id' => 46,
                'slug' => 'relationship-building-1',
                'created_at' => '2021-06-18 23:45:38',
                'updated_at' => '2021-06-18 23:45:38',
            ),
            132 => 
            array (
                'id' => 133,
                'name' => 'Emotional Intelligence',
                'course_sub_category_id' => 46,
                'slug' => 'emotional-intelligence-1',
                'created_at' => '2021-06-18 23:54:52',
                'updated_at' => '2021-06-18 23:54:52',
            ),
            133 => 
            array (
                'id' => 134,
                'name' => 'AWS Certification',
                'course_sub_category_id' => 35,
                'slug' => 'aws-certification',
                'created_at' => '2021-06-18 23:59:33',
                'updated_at' => '2021-06-18 23:59:33',
            ),
            134 => 
            array (
                'id' => 135,
                'name' => 'Microsoft Certification',
                'course_sub_category_id' => 35,
                'slug' => 'microsoft-certification',
                'created_at' => '2021-06-19 00:00:21',
                'updated_at' => '2021-06-19 00:00:21',
            ),
            135 => 
            array (
                'id' => 136,
                'name' => 'AWS Certified Solutions Architect - Associate',
                'course_sub_category_id' => 35,
                'slug' => 'aws-certified-solutions-architect-associate',
                'created_at' => '2021-06-19 00:00:47',
                'updated_at' => '2021-06-19 00:00:47',
            ),
            136 => 
            array (
                'id' => 137,
                'name' => 'AWS Certified Cloud Practitioner',
                'course_sub_category_id' => 35,
                'slug' => 'aws-certified-cloud-practitioner',
                'created_at' => '2021-06-19 00:01:16',
                'updated_at' => '2021-06-19 00:01:16',
            ),
            137 => 
            array (
                'id' => 138,
                'name' => 'CompTIA A+',
                'course_sub_category_id' => 35,
                'slug' => 'comptia-a',
                'created_at' => '2021-06-19 00:11:06',
                'updated_at' => '2021-06-19 00:11:06',
            ),
            138 => 
            array (
                'id' => 139,
                'name' => 'Cisco CCNA',
                'course_sub_category_id' => 35,
                'slug' => 'cisco-ccna',
                'created_at' => '2021-06-19 00:11:37',
                'updated_at' => '2021-06-19 00:11:37',
            ),
            139 => 
            array (
                'id' => 140,
                'name' => 'Amazon AWS',
                'course_sub_category_id' => 35,
                'slug' => 'amazon-aws',
                'created_at' => '2021-06-19 00:11:59',
                'updated_at' => '2021-06-19 00:11:59',
            ),
            140 => 
            array (
                'id' => 141,
                'name' => 'CompTIA Security+',
                'course_sub_category_id' => 35,
                'slug' => 'comptia-security',
                'created_at' => '2021-06-19 00:12:33',
                'updated_at' => '2021-06-19 00:12:33',
            ),
            141 => 
            array (
                'id' => 142,
                'name' => 'Microsoft AZ-900',
                'course_sub_category_id' => 35,
                'slug' => 'microsoft-az-900',
                'created_at' => '2021-06-19 00:13:15',
                'updated_at' => '2021-06-19 00:13:15',
            ),
            142 => 
            array (
                'id' => 143,
                'name' => 'Ethical Hacking',
                'course_sub_category_id' => 36,
                'slug' => 'ethical-hacking',
                'created_at' => '2021-06-19 00:14:53',
                'updated_at' => '2021-06-19 00:14:53',
            ),
            143 => 
            array (
                'id' => 144,
                'name' => 'Cyber Security',
                'course_sub_category_id' => 36,
                'slug' => 'cyber-security',
                'created_at' => '2021-06-19 00:16:26',
                'updated_at' => '2021-06-19 00:16:26',
            ),
            144 => 
            array (
                'id' => 145,
                'name' => 'Network Security',
                'course_sub_category_id' => 36,
                'slug' => 'network-security',
                'created_at' => '2021-06-19 00:16:45',
                'updated_at' => '2021-06-19 00:16:45',
            ),
            145 => 
            array (
                'id' => 146,
                'name' => 'IT Networking Fundamentals',
                'course_sub_category_id' => 36,
                'slug' => 'it-networking-fundamentals',
                'created_at' => '2021-06-19 00:17:34',
                'updated_at' => '2021-06-19 00:17:34',
            ),
            146 => 
            array (
                'id' => 147,
                'name' => 'Penetration Testing',
                'course_sub_category_id' => 36,
                'slug' => 'penetration-testing',
                'created_at' => '2021-06-19 00:18:10',
                'updated_at' => '2021-06-19 00:18:10',
            ),
            147 => 
            array (
                'id' => 148,
                'name' => 'PLC',
                'course_sub_category_id' => 37,
                'slug' => 'plc',
                'created_at' => '2021-06-19 00:19:13',
                'updated_at' => '2021-06-19 00:19:13',
            ),
            148 => 
            array (
                'id' => 149,
                'name' => 'Arduino',
                'course_sub_category_id' => 37,
                'slug' => 'arduino',
                'created_at' => '2021-06-19 00:19:54',
                'updated_at' => '2021-06-19 00:19:54',
            ),
            149 => 
            array (
                'id' => 150,
                'name' => 'Microcontroller',
                'course_sub_category_id' => 37,
                'slug' => 'microcontroller',
                'created_at' => '2021-06-19 00:20:15',
                'updated_at' => '2021-06-19 00:20:15',
            ),
            150 => 
            array (
                'id' => 151,
                'name' => 'Electronics',
                'course_sub_category_id' => 37,
                'slug' => 'electronics',
                'created_at' => '2021-06-19 00:22:44',
                'updated_at' => '2021-06-19 00:22:44',
            ),
            151 => 
            array (
                'id' => 152,
                'name' => 'Embedded Systems',
                'course_sub_category_id' => 37,
                'slug' => 'embedded-systems',
                'created_at' => '2021-06-19 00:23:06',
                'updated_at' => '2021-06-19 00:23:06',
            ),
            152 => 
            array (
                'id' => 153,
                'name' => 'Raspberry Pi',
                'course_sub_category_id' => 37,
                'slug' => 'raspberry-pi',
                'created_at' => '2021-06-19 00:23:30',
                'updated_at' => '2021-06-19 00:23:30',
            ),
            153 => 
            array (
                'id' => 154,
                'name' => 'FPGA',
                'course_sub_category_id' => 37,
                'slug' => 'fpga',
                'created_at' => '2021-06-19 00:23:56',
                'updated_at' => '2021-06-19 00:23:56',
            ),
            154 => 
            array (
                'id' => 155,
                'name' => 'Siemens TIA Portal',
                'course_sub_category_id' => 37,
                'slug' => 'siemens-tia-portal',
                'created_at' => '2021-06-19 00:24:24',
                'updated_at' => '2021-06-19 00:24:24',
            ),
            155 => 
            array (
                'id' => 156,
                'name' => 'Embedded C',
                'course_sub_category_id' => 37,
                'slug' => 'embedded-c',
                'created_at' => '2021-06-19 00:24:46',
                'updated_at' => '2021-06-19 00:24:46',
            ),
            156 => 
            array (
                'id' => 157,
                'name' => 'Linux',
                'course_sub_category_id' => 38,
                'slug' => 'linux',
                'created_at' => '2021-06-19 00:25:37',
                'updated_at' => '2021-06-19 00:25:37',
            ),
            157 => 
            array (
                'id' => 158,
                'name' => 'Linux Administration',
                'course_sub_category_id' => 38,
                'slug' => 'linux-administration',
                'created_at' => '2021-06-19 00:25:55',
                'updated_at' => '2021-06-19 00:25:55',
            ),
            158 => 
            array (
                'id' => 159,
                'name' => 'Windows Server',
                'course_sub_category_id' => 38,
                'slug' => 'windows-server',
                'created_at' => '2021-06-19 00:29:03',
                'updated_at' => '2021-06-19 00:29:03',
            ),
            159 => 
            array (
                'id' => 160,
                'name' => 'Shell Scripting',
                'course_sub_category_id' => 38,
                'slug' => 'shell-scripting',
                'created_at' => '2021-06-19 00:30:10',
                'updated_at' => '2021-06-19 00:30:10',
            ),
            160 => 
            array (
                'id' => 161,
                'name' => 'Active Directory',
                'course_sub_category_id' => 38,
                'slug' => 'active-directory',
                'created_at' => '2021-06-19 00:30:40',
                'updated_at' => '2021-06-19 00:30:40',
            ),
            161 => 
            array (
                'id' => 162,
                'name' => 'PowerShell',
                'course_sub_category_id' => 38,
                'slug' => 'powershell',
                'created_at' => '2021-06-19 00:31:10',
                'updated_at' => '2021-06-19 00:31:10',
            ),
            162 => 
            array (
                'id' => 163,
                'name' => 'Linux Command Line',
                'course_sub_category_id' => 38,
                'slug' => 'linux-command-line',
                'created_at' => '2021-06-19 00:31:36',
                'updated_at' => '2021-06-19 00:31:36',
            ),
            163 => 
            array (
                'id' => 164,
                'name' => 'VMware Vsphere',
                'course_sub_category_id' => 38,
                'slug' => 'vmware-vsphere',
                'created_at' => '2021-06-19 00:32:08',
                'updated_at' => '2021-06-19 00:32:08',
            ),
            164 => 
            array (
                'id' => 165,
                'name' => 'LPIC-1: Linux Administrator',
                'course_sub_category_id' => 38,
                'slug' => 'lpic-1-linux-administrator',
                'created_at' => '2021-06-19 00:32:34',
                'updated_at' => '2021-06-19 00:32:34',
            ),
            165 => 
            array (
                'id' => 166,
                'name' => 'quickbooks online',
                'course_sub_category_id' => 25,
                'slug' => 'quickbooks-online',
                'created_at' => '2021-06-19 00:52:42',
                'updated_at' => '2021-06-19 00:52:42',
            ),
            166 => 
            array (
                'id' => 167,
                'name' => 'grant writing',
                'course_sub_category_id' => 25,
                'slug' => 'grant-writing',
                'created_at' => '2021-06-19 00:53:05',
                'updated_at' => '2021-06-19 00:53:05',
            ),
            167 => 
            array (
                'id' => 168,
                'name' => 'transcription',
                'course_sub_category_id' => 25,
                'slug' => 'transcription',
                'created_at' => '2021-06-19 00:53:31',
                'updated_at' => '2021-06-19 00:53:31',
            ),
            168 => 
            array (
                'id' => 169,
                'name' => 'bitcoin',
                'course_sub_category_id' => 25,
                'slug' => 'bitcoin',
                'created_at' => '2021-06-19 00:53:56',
                'updated_at' => '2021-06-19 00:53:56',
            ),
            169 => 
            array (
                'id' => 170,
                'name' => 'powerpoint',
                'course_sub_category_id' => 25,
                'slug' => 'powerpoint',
                'created_at' => '2021-06-19 00:54:18',
                'updated_at' => '2021-06-19 00:54:18',
            ),
            170 => 
            array (
                'id' => 171,
                'name' => 'freelance writing',
                'course_sub_category_id' => 25,
                'slug' => 'freelance-writing',
                'created_at' => '2021-06-19 00:54:42',
                'updated_at' => '2021-06-19 00:54:42',
            ),
            171 => 
            array (
                'id' => 172,
                'name' => 'Interviewing Skills',
                'course_sub_category_id' => 25,
                'slug' => 'interviewing-skills-1',
                'created_at' => '2021-06-19 00:56:07',
                'updated_at' => '2021-06-19 00:56:07',
            ),
            172 => 
            array (
                'id' => 173,
                'name' => 'PMI-RMP',
                'course_sub_category_id' => 25,
                'slug' => 'pmi-rmp',
                'created_at' => '2021-06-19 00:56:33',
                'updated_at' => '2021-06-19 00:56:33',
            ),
            173 => 
            array (
                'id' => 174,
                'name' => 'Medical Device Development',
                'course_sub_category_id' => 25,
                'slug' => 'medical-device-development',
                'created_at' => '2021-06-19 00:57:25',
                'updated_at' => '2021-06-19 00:57:25',
            ),
            174 => 
            array (
                'id' => 175,
                'name' => 'Real States investing',
                'course_sub_category_id' => 24,
                'slug' => 'real-states-investing',
                'created_at' => '2021-06-19 00:58:13',
                'updated_at' => '2021-06-19 00:58:13',
            ),
            175 => 
            array (
                'id' => 176,
                'name' => 'mortgage',
                'course_sub_category_id' => 24,
                'slug' => 'mortgage',
                'created_at' => '2021-06-19 00:59:13',
                'updated_at' => '2021-06-19 00:59:13',
            ),
            176 => 
            array (
                'id' => 177,
                'name' => 'Airbnb hosting',
                'course_sub_category_id' => 24,
                'slug' => 'airbnb-hosting',
                'created_at' => '2021-06-19 01:00:07',
                'updated_at' => '2021-06-19 01:00:07',
            ),
            177 => 
            array (
                'id' => 178,
                'name' => 'construction',
                'course_sub_category_id' => 24,
                'slug' => 'construction',
                'created_at' => '2021-06-19 01:00:53',
                'updated_at' => '2021-06-19 01:00:53',
            ),
            178 => 
            array (
                'id' => 179,
                'name' => 'financial modeling',
                'course_sub_category_id' => 24,
                'slug' => 'financial-modeling',
                'created_at' => '2021-06-19 01:01:36',
                'updated_at' => '2021-06-19 01:01:36',
            ),
            179 => 
            array (
                'id' => 180,
                'name' => 'property management',
                'course_sub_category_id' => 24,
                'slug' => 'property-management',
                'created_at' => '2021-06-19 01:02:03',
                'updated_at' => '2021-06-19 01:02:03',
            ),
            180 => 
            array (
                'id' => 181,
                'name' => 'real estate marketing',
                'course_sub_category_id' => 24,
                'slug' => 'real-estate-marketing',
                'created_at' => '2021-06-19 01:02:32',
                'updated_at' => '2021-06-19 01:02:32',
            ),
            181 => 
            array (
                'id' => 182,
                'name' => 'real estate flipping',
                'course_sub_category_id' => 24,
                'slug' => 'real-estate-flipping',
                'created_at' => '2021-06-19 01:03:20',
                'updated_at' => '2021-06-19 01:03:20',
            ),
            182 => 
            array (
                'id' => 183,
                'name' => 'Python',
                'course_sub_category_id' => 3,
                'slug' => 'python-1',
                'created_at' => '2021-06-19 10:28:23',
                'updated_at' => '2021-06-19 10:28:23',
            ),
            183 => 
            array (
                'id' => 184,
                'name' => 'Go',
                'course_sub_category_id' => 3,
                'slug' => 'go',
                'created_at' => '2021-06-19 10:29:59',
                'updated_at' => '2021-06-19 10:29:59',
            ),
            184 => 
            array (
                'id' => 185,
                'name' => 'Spring Framework',
                'course_sub_category_id' => 3,
                'slug' => 'spring-framework',
                'created_at' => '2021-06-19 10:31:20',
                'updated_at' => '2021-06-19 10:31:20',
            ),
            185 => 
            array (
                'id' => 186,
                'name' => 'Javascript',
                'course_sub_category_id' => 3,
                'slug' => 'javascript-1',
                'created_at' => '2021-06-19 10:32:15',
                'updated_at' => '2021-06-19 10:32:15',
            ),
            186 => 
            array (
                'id' => 187,
                'name' => 'Unity',
                'course_sub_category_id' => 6,
                'slug' => 'unity',
                'created_at' => '2021-06-19 10:37:14',
                'updated_at' => '2021-06-19 10:37:14',
            ),
            187 => 
            array (
                'id' => 188,
                'name' => 'Game Development Fundamentals',
                'course_sub_category_id' => 6,
                'slug' => 'game-development-fundamentals',
                'created_at' => '2021-06-19 10:38:21',
                'updated_at' => '2021-06-19 10:38:21',
            ),
            188 => 
            array (
                'id' => 189,
                'name' => 'Unreal Engine',
                'course_sub_category_id' => 6,
                'slug' => 'unreal-engine',
                'created_at' => '2021-06-19 10:39:02',
                'updated_at' => '2021-06-19 10:39:02',
            ),
            189 => 
            array (
                'id' => 190,
                'name' => 'C#',
                'course_sub_category_id' => 6,
                'slug' => 'c-3',
                'created_at' => '2021-06-19 10:40:23',
                'updated_at' => '2021-06-19 10:40:23',
            ),
            190 => 
            array (
                'id' => 191,
                'name' => '3D Game Development',
                'course_sub_category_id' => 6,
                'slug' => '3d-game-development',
                'created_at' => '2021-06-19 10:40:54',
                'updated_at' => '2021-06-19 10:40:54',
            ),
            191 => 
            array (
                'id' => 192,
                'name' => 'C++',
                'course_sub_category_id' => 6,
                'slug' => 'c-4',
                'created_at' => '2021-06-19 10:41:17',
                'updated_at' => '2021-06-19 10:41:17',
            ),
            192 => 
            array (
                'id' => 193,
                'name' => '2D Game Development',
                'course_sub_category_id' => 6,
                'slug' => '2d-game-development',
                'created_at' => '2021-06-19 10:42:34',
                'updated_at' => '2021-06-19 10:42:34',
            ),
            193 => 
            array (
                'id' => 194,
                'name' => 'Unreal Engine Blueprints',
                'course_sub_category_id' => 6,
                'slug' => 'unreal-engine-blueprints',
                'created_at' => '2021-06-19 10:43:21',
                'updated_at' => '2021-06-19 10:43:21',
            ),
            194 => 
            array (
                'id' => 195,
                'name' => 'Blender',
                'course_sub_category_id' => 6,
                'slug' => 'blender',
                'created_at' => '2021-06-19 10:44:00',
                'updated_at' => '2021-06-19 10:44:00',
            ),
            195 => 
            array (
                'id' => 196,
                'name' => 'SQL',
                'course_sub_category_id' => 5,
                'slug' => 'sql',
                'created_at' => '2021-06-19 10:45:16',
                'updated_at' => '2021-06-19 10:45:16',
            ),
            196 => 
            array (
                'id' => 197,
                'name' => 'MySQL',
                'course_sub_category_id' => 5,
                'slug' => 'mysql',
                'created_at' => '2021-06-19 10:45:34',
                'updated_at' => '2021-06-19 10:45:34',
            ),
            197 => 
            array (
                'id' => 198,
                'name' => 'Oracle SQL',
                'course_sub_category_id' => 5,
                'slug' => 'oracle-sql',
                'created_at' => '2021-06-19 10:45:56',
                'updated_at' => '2021-06-19 10:45:56',
            ),
            198 => 
            array (
                'id' => 199,
                'name' => 'MongoDB',
                'course_sub_category_id' => 5,
                'slug' => 'mongodb',
                'created_at' => '2021-06-19 10:46:13',
                'updated_at' => '2021-06-19 10:46:13',
            ),
            199 => 
            array (
                'id' => 200,
                'name' => 'Apache Kafka',
                'course_sub_category_id' => 5,
                'slug' => 'apache-kafka',
                'created_at' => '2021-06-19 10:46:33',
                'updated_at' => '2021-06-19 10:46:33',
            ),
            200 => 
            array (
                'id' => 201,
                'name' => 'Oracle Certification',
                'course_sub_category_id' => 5,
                'slug' => 'oracle-certification',
                'created_at' => '2021-06-19 10:47:09',
                'updated_at' => '2021-06-19 10:47:09',
            ),
            201 => 
            array (
                'id' => 202,
                'name' => 'SQL Server',
                'course_sub_category_id' => 5,
                'slug' => 'sql-server',
                'created_at' => '2021-06-19 10:47:44',
                'updated_at' => '2021-06-19 10:47:44',
            ),
            202 => 
            array (
                'id' => 203,
                'name' => 'Database Programming',
                'course_sub_category_id' => 5,
                'slug' => 'database-programming',
                'created_at' => '2021-06-19 10:48:16',
                'updated_at' => '2021-06-19 10:48:16',
            ),
            203 => 
            array (
                'id' => 204,
                'name' => 'PostgreSQL',
                'course_sub_category_id' => 5,
                'slug' => 'postgresql',
                'created_at' => '2021-06-19 10:49:06',
                'updated_at' => '2021-06-19 10:49:06',
            ),
            204 => 
            array (
                'id' => 205,
                'name' => 'Selenium WebDriver',
                'course_sub_category_id' => 8,
                'slug' => 'selenium-webdriver',
                'created_at' => '2021-06-19 10:50:19',
                'updated_at' => '2021-06-19 10:50:19',
            ),
            205 => 
            array (
                'id' => 206,
                'name' => 'Java',
                'course_sub_category_id' => 8,
                'slug' => 'java-1',
                'created_at' => '2021-06-19 10:50:38',
                'updated_at' => '2021-06-19 10:50:38',
            ),
            206 => 
            array (
                'id' => 207,
                'name' => 'Selenium Testing Framework',
                'course_sub_category_id' => 8,
                'slug' => 'selenium-testing-framework',
                'created_at' => '2021-06-19 10:51:00',
                'updated_at' => '2021-06-19 10:51:00',
            ),
            207 => 
            array (
                'id' => 208,
                'name' => 'Automation Testing',
                'course_sub_category_id' => 8,
                'slug' => 'automation-testing',
                'created_at' => '2021-06-19 10:51:39',
                'updated_at' => '2021-06-19 10:51:39',
            ),
            208 => 
            array (
                'id' => 209,
                'name' => 'API Testing',
                'course_sub_category_id' => 8,
                'slug' => 'api-testing',
                'created_at' => '2021-06-19 10:52:05',
                'updated_at' => '2021-06-19 10:52:05',
            ),
            209 => 
            array (
                'id' => 210,
                'name' => 'REST Assured',
                'course_sub_category_id' => 8,
                'slug' => 'rest-assured',
                'created_at' => '2021-06-19 10:52:27',
                'updated_at' => '2021-06-19 10:52:27',
            ),
            210 => 
            array (
                'id' => 211,
                'name' => 'Cypress.io',
                'course_sub_category_id' => 8,
                'slug' => 'cypressio',
                'created_at' => '2021-06-19 10:52:50',
                'updated_at' => '2021-06-19 10:52:50',
            ),
            211 => 
            array (
                'id' => 212,
                'name' => 'Appium',
                'course_sub_category_id' => 8,
                'slug' => 'appium',
                'created_at' => '2021-06-19 10:53:15',
                'updated_at' => '2021-06-19 10:53:15',
            ),
            212 => 
            array (
                'id' => 213,
                'name' => 'Coding Interview',
                'course_sub_category_id' => 9,
                'slug' => 'coding-interview',
                'created_at' => '2021-06-19 10:58:15',
                'updated_at' => '2021-06-19 10:58:15',
            ),
            213 => 
            array (
                'id' => 214,
                'name' => 'Data Structures',
                'course_sub_category_id' => 9,
                'slug' => 'data-structures',
                'created_at' => '2021-06-19 10:58:45',
                'updated_at' => '2021-06-19 10:58:45',
            ),
            214 => 
            array (
                'id' => 215,
                'name' => 'Algorithms',
                'course_sub_category_id' => 9,
                'slug' => 'algorithms',
                'created_at' => '2021-06-19 10:59:05',
                'updated_at' => '2021-06-19 10:59:05',
            ),
            215 => 
            array (
                'id' => 216,
                'name' => 'Microservices',
                'course_sub_category_id' => 9,
                'slug' => 'microservices',
                'created_at' => '2021-06-19 10:59:25',
                'updated_at' => '2021-06-19 10:59:25',
            ),
            216 => 
            array (
                'id' => 217,
                'name' => 'Kubernetes',
                'course_sub_category_id' => 9,
                'slug' => 'kubernetes',
                'created_at' => '2021-06-19 10:59:46',
                'updated_at' => '2021-06-19 10:59:46',
            ),
            217 => 
            array (
                'id' => 218,
            'name' => 'Certified Kubernetes Application Developer(CKAD)',
                'course_sub_category_id' => 9,
                'slug' => 'certified-kubernetes-application-developerckad',
                'created_at' => '2021-06-19 11:00:26',
                'updated_at' => '2021-06-19 11:00:42',
            ),
            218 => 
            array (
                'id' => 219,
                'name' => 'Python',
                'course_sub_category_id' => 9,
                'slug' => 'python-2',
                'created_at' => '2021-06-19 11:00:58',
                'updated_at' => '2021-06-19 11:00:58',
            ),
            219 => 
            array (
                'id' => 220,
                'name' => 'Linux',
                'course_sub_category_id' => 9,
                'slug' => 'linux-1',
                'created_at' => '2021-06-19 11:01:14',
                'updated_at' => '2021-06-19 11:01:14',
            ),
            220 => 
            array (
                'id' => 221,
                'name' => 'Software Practices',
                'course_sub_category_id' => 9,
                'slug' => 'software-practices',
                'created_at' => '2021-06-19 11:01:41',
                'updated_at' => '2021-06-19 11:01:41',
            ),
            221 => 
            array (
                'id' => 222,
                'name' => 'Git',
                'course_sub_category_id' => 10,
                'slug' => 'git',
                'created_at' => '2021-06-19 11:04:19',
                'updated_at' => '2021-06-19 11:04:19',
            ),
            222 => 
            array (
                'id' => 223,
                'name' => 'Docker',
                'course_sub_category_id' => 10,
                'slug' => 'docker',
                'created_at' => '2021-06-19 11:04:36',
                'updated_at' => '2021-06-19 11:04:36',
            ),
            223 => 
            array (
                'id' => 224,
                'name' => 'Kubernetes',
                'course_sub_category_id' => 10,
                'slug' => 'kubernetes-1',
                'created_at' => '2021-06-19 11:04:51',
                'updated_at' => '2021-06-19 11:04:51',
            ),
            224 => 
            array (
                'id' => 225,
                'name' => 'DevOps',
                'course_sub_category_id' => 10,
                'slug' => 'devops',
                'created_at' => '2021-06-19 11:05:10',
                'updated_at' => '2021-06-19 11:05:10',
            ),
            225 => 
            array (
                'id' => 226,
                'name' => 'JenKins',
                'course_sub_category_id' => 10,
                'slug' => 'jenkins',
                'created_at' => '2021-06-19 11:05:33',
                'updated_at' => '2021-06-19 11:05:33',
            ),
            226 => 
            array (
                'id' => 228,
                'name' => 'JIRA',
                'course_sub_category_id' => 10,
                'slug' => 'jira-1',
                'created_at' => '2021-06-19 11:06:24',
                'updated_at' => '2021-06-19 11:06:24',
            ),
            227 => 
            array (
                'id' => 229,
                'name' => 'Confluence',
                'course_sub_category_id' => 10,
                'slug' => 'confluence',
                'created_at' => '2021-06-19 11:06:40',
                'updated_at' => '2021-06-19 11:06:40',
            ),
            228 => 
            array (
                'id' => 230,
                'name' => 'AWS Certified Solutions Architect-Associate',
                'course_sub_category_id' => 10,
                'slug' => 'aws-certified-solutions-architect-associate-1',
                'created_at' => '2021-06-19 11:07:15',
                'updated_at' => '2021-06-19 11:07:15',
            ),
            229 => 
            array (
                'id' => 231,
                'name' => 'Continuous Integration',
                'course_sub_category_id' => 10,
                'slug' => 'continuous-integration',
                'created_at' => '2021-06-19 11:07:35',
                'updated_at' => '2021-06-19 11:07:35',
            ),
            230 => 
            array (
                'id' => 232,
                'name' => 'Sales Skills',
                'course_sub_category_id' => 14,
                'slug' => 'sales-skills',
                'created_at' => '2021-06-19 11:30:31',
                'updated_at' => '2021-06-19 11:30:31',
            ),
            231 => 
            array (
                'id' => 233,
                'name' => 'B2B Sales',
                'course_sub_category_id' => 14,
                'slug' => 'b2b-sales',
                'created_at' => '2021-06-19 11:31:00',
                'updated_at' => '2021-06-19 11:31:00',
            ),
            232 => 
            array (
                'id' => 234,
                'name' => 'LinkedIn',
                'course_sub_category_id' => 14,
                'slug' => 'linkedin-1',
                'created_at' => '2021-06-19 11:31:23',
                'updated_at' => '2021-06-19 11:31:23',
            ),
            233 => 
            array (
                'id' => 235,
                'name' => 'Presentation Skills',
                'course_sub_category_id' => 14,
                'slug' => 'presentation-skills-2',
                'created_at' => '2021-06-19 11:31:52',
                'updated_at' => '2021-06-19 11:31:52',
            ),
            234 => 
            array (
                'id' => 236,
                'name' => 'Business Development',
                'course_sub_category_id' => 14,
                'slug' => 'business-development',
                'created_at' => '2021-06-19 11:32:21',
                'updated_at' => '2021-06-19 11:32:21',
            ),
            235 => 
            array (
                'id' => 237,
                'name' => 'Lead Generation',
                'course_sub_category_id' => 14,
                'slug' => 'lead-generation',
                'created_at' => '2021-06-19 11:32:59',
                'updated_at' => '2021-06-19 11:32:59',
            ),
            236 => 
            array (
                'id' => 238,
                'name' => 'Lead Generation',
                'course_sub_category_id' => 14,
                'slug' => 'lead-generation-1',
                'created_at' => '2021-06-19 11:33:06',
                'updated_at' => '2021-06-19 11:33:06',
            ),
            237 => 
            array (
                'id' => 239,
                'name' => 'Customer Service',
                'course_sub_category_id' => 14,
                'slug' => 'customer-service',
                'created_at' => '2021-06-19 11:33:35',
                'updated_at' => '2021-06-19 11:33:35',
            ),
            238 => 
            array (
                'id' => 240,
                'name' => 'Cold Email',
                'course_sub_category_id' => 14,
                'slug' => 'cold-email',
                'created_at' => '2021-06-19 11:34:02',
                'updated_at' => '2021-06-19 11:34:02',
            ),
            239 => 
            array (
                'id' => 241,
                'name' => 'Customer Success Management',
                'course_sub_category_id' => 14,
                'slug' => 'customer-success-management',
                'created_at' => '2021-06-19 11:34:33',
                'updated_at' => '2021-06-19 11:34:33',
            ),
            240 => 
            array (
                'id' => 242,
                'name' => 'Digital Marketing',
                'course_sub_category_id' => 15,
                'slug' => 'digital-marketing',
                'created_at' => '2021-06-19 11:36:20',
                'updated_at' => '2021-06-19 11:36:20',
            ),
            241 => 
            array (
                'id' => 243,
                'name' => 'Management Consulting',
                'course_sub_category_id' => 15,
                'slug' => 'management-consulting',
                'created_at' => '2021-06-19 11:36:53',
                'updated_at' => '2021-06-19 11:36:53',
            ),
            242 => 
            array (
                'id' => 244,
                'name' => 'Business Model',
                'course_sub_category_id' => 15,
                'slug' => 'business-model',
                'created_at' => '2021-06-19 11:37:22',
                'updated_at' => '2021-06-19 11:37:22',
            ),
            243 => 
            array (
                'id' => 245,
                'name' => 'Futures Trading',
                'course_sub_category_id' => 15,
                'slug' => 'futures-trading',
                'created_at' => '2021-06-19 11:37:53',
                'updated_at' => '2021-06-19 11:37:53',
            ),
            244 => 
            array (
                'id' => 246,
            'name' => 'Google Ads (Adwords)',
                'course_sub_category_id' => 15,
                'slug' => 'google-ads-adwords',
                'created_at' => '2021-06-19 11:38:36',
                'updated_at' => '2021-06-19 11:38:36',
            ),
            245 => 
            array (
                'id' => 247,
                'name' => 'Innovation',
                'course_sub_category_id' => 15,
                'slug' => 'innovation',
                'created_at' => '2021-06-19 11:39:03',
                'updated_at' => '2021-06-19 11:39:03',
            ),
            246 => 
            array (
                'id' => 248,
                'name' => 'Digital Transformation',
                'course_sub_category_id' => 15,
                'slug' => 'digital-transformation',
                'created_at' => '2021-06-19 11:39:45',
                'updated_at' => '2021-06-19 11:39:45',
            ),
            247 => 
            array (
                'id' => 249,
                'name' => 'TOGAF 9 Foundation',
                'course_sub_category_id' => 15,
                'slug' => 'togaf-9-foundation',
                'created_at' => '2021-06-19 11:40:11',
                'updated_at' => '2021-06-19 11:40:11',
            ),
            248 => 
            array (
                'id' => 250,
                'name' => 'Six Sigma',
                'course_sub_category_id' => 16,
                'slug' => 'six-sigma',
                'created_at' => '2021-06-19 11:41:22',
                'updated_at' => '2021-06-19 11:41:22',
            ),
            249 => 
            array (
                'id' => 251,
                'name' => 'Six Sigma Green Belt',
                'course_sub_category_id' => 16,
                'slug' => 'six-sigma-green-belt',
                'created_at' => '2021-06-19 11:41:55',
                'updated_at' => '2021-06-19 11:41:55',
            ),
            250 => 
            array (
                'id' => 252,
                'name' => 'Supply Chain',
                'course_sub_category_id' => 16,
                'slug' => 'supply-chain',
                'created_at' => '2021-06-19 11:42:30',
                'updated_at' => '2021-06-19 11:42:30',
            ),
            251 => 
            array (
                'id' => 253,
                'name' => 'Six Sigma Black Belt',
                'course_sub_category_id' => 16,
                'slug' => 'six-sigma-black-belt',
                'created_at' => '2021-06-19 11:43:34',
                'updated_at' => '2021-06-19 11:43:34',
            ),
            252 => 
            array (
                'id' => 254,
                'name' => 'Six Sigma Yellow Belt',
                'course_sub_category_id' => 16,
                'slug' => 'six-sigma-yellow-belt',
                'created_at' => '2021-06-19 11:44:06',
                'updated_at' => '2021-06-19 11:44:06',
            ),
            253 => 
            array (
                'id' => 255,
                'name' => 'Six Sigma White Belt',
                'course_sub_category_id' => 16,
                'slug' => 'six-sigma-white-belt',
                'created_at' => '2021-06-19 11:45:06',
                'updated_at' => '2021-06-19 11:45:06',
            ),
            254 => 
            array (
                'id' => 256,
                'name' => 'Robotic Process Automation',
                'course_sub_category_id' => 16,
                'slug' => 'robotic-process-automation',
                'created_at' => '2021-06-19 11:45:38',
                'updated_at' => '2021-06-19 11:45:38',
            ),
            255 => 
            array (
                'id' => 257,
                'name' => 'Lean',
                'course_sub_category_id' => 16,
                'slug' => 'lean',
                'created_at' => '2021-06-19 11:46:04',
                'updated_at' => '2021-06-19 11:46:04',
            ),
            256 => 
            array (
                'id' => 258,
                'name' => 'Quality Management',
                'course_sub_category_id' => 16,
                'slug' => 'quality-management-1',
                'created_at' => '2021-06-19 11:46:42',
                'updated_at' => '2021-06-19 11:46:42',
            ),
            257 => 
            array (
                'id' => 259,
                'name' => 'PMP',
                'course_sub_category_id' => 17,
                'slug' => 'pmp',
                'created_at' => '2021-06-19 11:49:26',
                'updated_at' => '2021-06-19 11:49:26',
            ),
            258 => 
            array (
                'id' => 260,
                'name' => 'PMBOK',
                'course_sub_category_id' => 17,
                'slug' => 'pmbok',
                'created_at' => '2021-06-19 11:49:50',
                'updated_at' => '2021-06-19 11:49:50',
            ),
            259 => 
            array (
                'id' => 261,
                'name' => 'Agile',
                'course_sub_category_id' => 17,
                'slug' => 'agile-1',
                'created_at' => '2021-06-19 11:50:13',
                'updated_at' => '2021-06-19 11:50:13',
            ),
            260 => 
            array (
                'id' => 262,
                'name' => 'Scrum',
                'course_sub_category_id' => 17,
                'slug' => 'scrum',
                'created_at' => '2021-06-19 11:50:40',
                'updated_at' => '2021-06-19 11:50:40',
            ),
            261 => 
            array (
                'id' => 263,
                'name' => 'CAPM',
                'course_sub_category_id' => 17,
                'slug' => 'capm',
                'created_at' => '2021-06-19 11:51:04',
                'updated_at' => '2021-06-19 11:51:04',
            ),
            262 => 
            array (
                'id' => 264,
                'name' => 'PMI-ACP',
                'course_sub_category_id' => 17,
                'slug' => 'pmi-acp',
                'created_at' => '2021-06-19 11:51:30',
                'updated_at' => '2021-06-19 11:51:30',
            ),
            263 => 
            array (
                'id' => 265,
                'name' => 'Microsoft Project',
                'course_sub_category_id' => 17,
                'slug' => 'microsoft-project',
                'created_at' => '2021-06-19 11:52:17',
                'updated_at' => '2021-06-19 11:52:17',
            ),
            264 => 
            array (
                'id' => 266,
                'name' => 'Project Risk Management',
                'course_sub_category_id' => 17,
                'slug' => 'project-risk-management',
                'created_at' => '2021-06-19 11:53:12',
                'updated_at' => '2021-06-19 11:53:12',
            ),
            265 => 
            array (
                'id' => 267,
                'name' => 'GDPR',
                'course_sub_category_id' => 18,
                'slug' => 'gdpr',
                'created_at' => '2021-06-19 11:54:24',
                'updated_at' => '2021-06-19 11:54:24',
            ),
            266 => 
            array (
                'id' => 268,
                'name' => 'Contract Law',
                'course_sub_category_id' => 18,
                'slug' => 'contract-law-1',
                'created_at' => '2021-06-19 11:54:52',
                'updated_at' => '2021-06-19 11:54:52',
            ),
            267 => 
            array (
                'id' => 269,
                'name' => 'Law',
                'course_sub_category_id' => 18,
                'slug' => 'law',
                'created_at' => '2021-06-19 11:55:25',
                'updated_at' => '2021-06-19 11:55:25',
            ),
            268 => 
            array (
                'id' => 270,
                'name' => 'Contract Management',
                'course_sub_category_id' => 18,
                'slug' => 'contract-management',
                'created_at' => '2021-06-19 11:56:04',
                'updated_at' => '2021-06-19 11:56:04',
            ),
            269 => 
            array (
                'id' => 271,
                'name' => 'Medical Device Development',
                'course_sub_category_id' => 18,
                'slug' => 'medical-device-development-1',
                'created_at' => '2021-06-19 11:56:59',
                'updated_at' => '2021-06-19 11:56:59',
            ),
            270 => 
            array (
                'id' => 272,
                'name' => 'LGPD Lei Geral de Protecao de Dados',
                'course_sub_category_id' => 18,
                'slug' => 'lgpd-lei-geral-de-protecao-de-dados',
                'created_at' => '2021-06-19 11:57:30',
                'updated_at' => '2021-06-19 11:57:30',
            ),
            271 => 
            array (
                'id' => 273,
                'name' => 'Patent',
                'course_sub_category_id' => 18,
                'slug' => 'patent',
                'created_at' => '2021-06-19 11:57:58',
                'updated_at' => '2021-06-19 11:57:58',
            ),
            272 => 
            array (
                'id' => 274,
                'name' => 'Data Protection',
                'course_sub_category_id' => 18,
                'slug' => 'data-protection',
                'created_at' => '2021-06-19 11:58:39',
                'updated_at' => '2021-06-19 11:58:39',
            ),
            273 => 
            array (
                'id' => 275,
                'name' => 'Microsoft Power BI',
                'course_sub_category_id' => 19,
                'slug' => 'microsoft-power-bi',
                'created_at' => '2021-06-19 11:59:59',
                'updated_at' => '2021-06-19 11:59:59',
            ),
            274 => 
            array (
                'id' => 276,
                'name' => 'SQL',
                'course_sub_category_id' => 19,
                'slug' => 'sql-1',
                'created_at' => '2021-06-19 12:00:24',
                'updated_at' => '2021-06-19 12:00:24',
            ),
            275 => 
            array (
                'id' => 277,
                'name' => 'Tableau',
                'course_sub_category_id' => 19,
                'slug' => 'tableau',
                'created_at' => '2021-06-19 12:00:48',
                'updated_at' => '2021-06-19 12:00:48',
            ),
            276 => 
            array (
                'id' => 278,
                'name' => 'Business Analysis',
                'course_sub_category_id' => 19,
                'slug' => 'business-analysis',
                'created_at' => '2021-06-19 12:01:18',
                'updated_at' => '2021-06-19 12:01:18',
            ),
            277 => 
            array (
                'id' => 279,
                'name' => 'Data Modeling',
                'course_sub_category_id' => 19,
                'slug' => 'data-modeling',
                'created_at' => '2021-06-19 12:01:44',
                'updated_at' => '2021-06-19 12:01:44',
            ),
            278 => 
            array (
                'id' => 280,
                'name' => 'Business Intelligence',
                'course_sub_category_id' => 19,
                'slug' => 'business-intelligence',
                'created_at' => '2021-06-19 12:02:19',
                'updated_at' => '2021-06-19 12:02:19',
            ),
            279 => 
            array (
                'id' => 281,
                'name' => 'MySQL',
                'course_sub_category_id' => 19,
                'slug' => 'mysql-1',
                'created_at' => '2021-06-19 12:02:44',
                'updated_at' => '2021-06-19 12:02:44',
            ),
            280 => 
            array (
                'id' => 282,
                'name' => 'Data Analysis',
                'course_sub_category_id' => 19,
                'slug' => 'data-analysis-1',
                'created_at' => '2021-06-19 12:03:14',
                'updated_at' => '2021-06-19 12:03:14',
            ),
            281 => 
            array (
                'id' => 283,
                'name' => 'Blockchain',
                'course_sub_category_id' => 19,
                'slug' => 'blockchain',
                'created_at' => '2021-06-19 12:03:43',
                'updated_at' => '2021-06-19 12:03:43',
            ),
            282 => 
            array (
                'id' => 284,
                'name' => 'Recruiting',
                'course_sub_category_id' => 20,
                'slug' => 'recruiting',
                'created_at' => '2021-06-19 12:06:27',
                'updated_at' => '2021-06-19 12:06:27',
            ),
            283 => 
            array (
                'id' => 285,
                'name' => 'HR Analytics',
                'course_sub_category_id' => 20,
                'slug' => 'hr-analytics',
                'created_at' => '2021-06-19 12:06:57',
                'updated_at' => '2021-06-19 12:06:57',
            ),
            284 => 
            array (
                'id' => 286,
                'name' => 'Instructional Design',
                'course_sub_category_id' => 20,
                'slug' => 'instructional-design',
                'created_at' => '2021-06-19 12:07:24',
                'updated_at' => '2021-06-19 12:07:24',
            ),
            285 => 
            array (
                'id' => 287,
                'name' => 'Hiring',
                'course_sub_category_id' => 20,
                'slug' => 'hiring',
                'created_at' => '2021-06-19 12:07:58',
                'updated_at' => '2021-06-19 12:07:58',
            ),
            286 => 
            array (
                'id' => 288,
                'name' => 'Emotional Intelligence',
                'course_sub_category_id' => 20,
                'slug' => 'emotional-intelligence-2',
                'created_at' => '2021-06-19 12:08:25',
                'updated_at' => '2021-06-19 12:08:25',
            ),
            287 => 
            array (
                'id' => 289,
                'name' => 'Employment Law',
                'course_sub_category_id' => 20,
                'slug' => 'employment-law',
                'created_at' => '2021-06-19 12:08:56',
                'updated_at' => '2021-06-19 12:08:56',
            ),
            288 => 
            array (
                'id' => 290,
                'name' => 'Conflict Management',
                'course_sub_category_id' => 20,
                'slug' => 'conflict-management-1',
                'created_at' => '2021-06-19 12:09:21',
                'updated_at' => '2021-06-19 12:09:21',
            ),
            289 => 
            array (
                'id' => 291,
                'name' => 'Diversity and inclusion',
                'course_sub_category_id' => 20,
                'slug' => 'diversity-and-inclusion',
                'created_at' => '2021-06-19 12:09:58',
                'updated_at' => '2021-06-19 12:09:58',
            ),
            290 => 
            array (
                'id' => 292,
                'name' => 'Piping',
                'course_sub_category_id' => 21,
                'slug' => 'piping',
                'created_at' => '2021-06-19 12:11:17',
                'updated_at' => '2021-06-19 12:11:17',
            ),
            291 => 
            array (
                'id' => 293,
                'name' => 'EPLAN Electric P8',
                'course_sub_category_id' => 21,
                'slug' => 'eplan-electric-p8',
                'created_at' => '2021-06-19 12:12:54',
                'updated_at' => '2021-06-19 12:12:54',
            ),
            292 => 
            array (
                'id' => 294,
                'name' => 'Electrical Engineering',
                'course_sub_category_id' => 21,
                'slug' => 'electrical-engineering',
                'created_at' => '2021-06-19 12:15:24',
                'updated_at' => '2021-06-19 12:15:24',
            ),
            293 => 
            array (
                'id' => 295,
                'name' => 'Life Coach Training',
                'course_sub_category_id' => 21,
                'slug' => 'life-coach-training-3',
                'created_at' => '2021-06-19 12:17:27',
                'updated_at' => '2021-06-19 12:17:27',
            ),
            294 => 
            array (
                'id' => 296,
                'name' => 'Freight Broker',
                'course_sub_category_id' => 21,
                'slug' => 'freight-broker-1',
                'created_at' => '2021-06-19 12:17:52',
                'updated_at' => '2021-06-19 12:17:52',
            ),
            295 => 
            array (
                'id' => 297,
                'name' => 'Trucking',
                'course_sub_category_id' => 21,
                'slug' => 'trucking',
                'created_at' => '2021-06-19 12:18:43',
                'updated_at' => '2021-06-19 12:18:43',
            ),
            296 => 
            array (
                'id' => 298,
                'name' => 'Chemical Engineering',
                'course_sub_category_id' => 21,
                'slug' => 'chemical-engineering',
                'created_at' => '2021-06-19 12:19:22',
                'updated_at' => '2021-06-19 12:19:22',
            ),
            297 => 
            array (
                'id' => 299,
                'name' => 'Salesforce',
                'course_sub_category_id' => 21,
                'slug' => 'salesforce',
                'created_at' => '2021-06-19 12:20:03',
                'updated_at' => '2021-06-19 12:20:03',
            ),
            298 => 
            array (
                'id' => 300,
                'name' => 'Solar Energy',
                'course_sub_category_id' => 21,
                'slug' => 'solar-energy',
                'created_at' => '2021-06-19 12:20:32',
                'updated_at' => '2021-06-19 12:20:32',
            ),
            299 => 
            array (
                'id' => 301,
                'name' => 'Oil and Gas Industry',
                'course_sub_category_id' => 21,
                'slug' => 'oil-and-gas-industry',
                'created_at' => '2021-06-19 12:21:05',
                'updated_at' => '2021-06-19 12:21:05',
            ),
            300 => 
            array (
                'id' => 302,
                'name' => 'Amazon FBA',
                'course_sub_category_id' => 22,
                'slug' => 'amazon-fba',
                'created_at' => '2021-06-19 12:25:32',
                'updated_at' => '2021-06-19 12:25:32',
            ),
            301 => 
            array (
                'id' => 303,
                'name' => 'Dropshipping',
                'course_sub_category_id' => 22,
                'slug' => 'dropshipping',
                'created_at' => '2021-06-19 12:26:32',
                'updated_at' => '2021-06-19 12:26:32',
            ),
            302 => 
            array (
                'id' => 304,
                'name' => 'Shopify',
                'course_sub_category_id' => 22,
                'slug' => 'shopify',
                'created_at' => '2021-06-19 12:26:52',
                'updated_at' => '2021-06-19 12:26:52',
            ),
            303 => 
            array (
                'id' => 305,
                'name' => 'Shopify Dropshipping',
                'course_sub_category_id' => 22,
                'slug' => 'shopify-dropshipping',
                'created_at' => '2021-06-19 12:27:25',
                'updated_at' => '2021-06-19 12:27:25',
            ),
            304 => 
            array (
                'id' => 306,
                'name' => 'Selling on Amazon',
                'course_sub_category_id' => 22,
                'slug' => 'selling-on-amazon',
                'created_at' => '2021-06-19 12:27:55',
                'updated_at' => '2021-06-19 12:27:55',
            ),
            305 => 
            array (
                'id' => 307,
                'name' => 'WooCommerce',
                'course_sub_category_id' => 22,
                'slug' => 'woocommerce',
                'created_at' => '2021-06-19 12:28:16',
                'updated_at' => '2021-06-19 12:28:16',
            ),
            306 => 
            array (
                'id' => 308,
                'name' => 'Passive Income',
                'course_sub_category_id' => 22,
                'slug' => 'passive-income',
                'created_at' => '2021-06-19 12:28:44',
                'updated_at' => '2021-06-19 12:28:44',
            ),
            307 => 
            array (
                'id' => 309,
                'name' => 'WordPress',
                'course_sub_category_id' => 22,
                'slug' => 'wordpress-1',
                'created_at' => '2021-06-19 12:29:12',
                'updated_at' => '2021-06-19 12:29:12',
            ),
            308 => 
            array (
                'id' => 310,
                'name' => 'Writing',
                'course_sub_category_id' => 23,
                'slug' => 'writing-1',
                'created_at' => '2021-06-19 12:32:00',
                'updated_at' => '2021-06-19 12:32:00',
            ),
            309 => 
            array (
                'id' => 311,
                'name' => 'Audiobook Creation',
                'course_sub_category_id' => 23,
                'slug' => 'audiobook-creation',
                'created_at' => '2021-06-19 12:32:24',
                'updated_at' => '2021-06-19 12:32:24',
            ),
            310 => 
            array (
                'id' => 312,
                'name' => 'Screenwriting',
                'course_sub_category_id' => 23,
                'slug' => 'screenwriting',
                'created_at' => '2021-06-19 12:32:57',
                'updated_at' => '2021-06-19 12:32:57',
            ),
            311 => 
            array (
                'id' => 313,
                'name' => 'SEO',
                'course_sub_category_id' => 23,
                'slug' => 'seo',
                'created_at' => '2021-06-19 12:33:14',
                'updated_at' => '2021-06-19 12:33:14',
            ),
            312 => 
            array (
                'id' => 314,
                'name' => 'Journalism',
                'course_sub_category_id' => 23,
                'slug' => 'journalism',
                'created_at' => '2021-06-19 12:33:37',
                'updated_at' => '2021-06-19 12:33:37',
            ),
            313 => 
            array (
                'id' => 315,
                'name' => 'Podcasting',
                'course_sub_category_id' => 23,
                'slug' => 'podcasting',
                'created_at' => '2021-06-19 12:34:01',
                'updated_at' => '2021-06-19 12:34:01',
            ),
            314 => 
            array (
                'id' => 316,
                'name' => 'After Effects',
                'course_sub_category_id' => 23,
                'slug' => 'after-effects',
                'created_at' => '2021-06-19 12:34:23',
                'updated_at' => '2021-06-19 12:34:23',
            ),
            315 => 
            array (
                'id' => 317,
                'name' => 'Motion Graphics',
                'course_sub_category_id' => 23,
                'slug' => 'motion-graphics',
                'created_at' => '2021-06-19 12:34:46',
                'updated_at' => '2021-06-19 12:34:46',
            ),
            316 => 
            array (
                'id' => 318,
            'name' => 'Amazon Kindle Direct Publishing (KDP)',
                'course_sub_category_id' => 23,
                'slug' => 'amazon-kindle-direct-publishing-kdp',
                'created_at' => '2021-06-19 12:35:40',
                'updated_at' => '2021-06-19 12:35:40',
            ),
            317 => 
            array (
                'id' => 319,
                'name' => 'Accounting',
                'course_sub_category_id' => 26,
                'slug' => 'accounting',
                'created_at' => '2021-06-19 12:47:22',
                'updated_at' => '2021-06-19 12:47:22',
            ),
            318 => 
            array (
                'id' => 320,
                'name' => 'Bookkeeping',
                'course_sub_category_id' => 26,
                'slug' => 'bookkeeping',
                'created_at' => '2021-06-19 12:47:37',
                'updated_at' => '2021-06-19 12:47:37',
            ),
            319 => 
            array (
                'id' => 321,
                'name' => 'Financial Accounting',
                'course_sub_category_id' => 26,
                'slug' => 'financial-accounting',
                'created_at' => '2021-06-19 12:47:55',
                'updated_at' => '2021-06-19 12:47:55',
            ),
            320 => 
            array (
                'id' => 322,
                'name' => 'Finance Fundamentals',
                'course_sub_category_id' => 26,
                'slug' => 'finance-fundamentals',
                'created_at' => '2021-06-19 12:48:28',
                'updated_at' => '2021-06-19 12:48:28',
            ),
            321 => 
            array (
                'id' => 323,
                'name' => 'Financial Statement',
                'course_sub_category_id' => 26,
                'slug' => 'financial-statement',
                'created_at' => '2021-06-19 12:48:51',
                'updated_at' => '2021-06-19 12:48:51',
            ),
            322 => 
            array (
                'id' => 324,
                'name' => 'QuickBooks Online',
                'course_sub_category_id' => 26,
                'slug' => 'quickbooks-online-1',
                'created_at' => '2021-06-19 12:49:11',
                'updated_at' => '2021-06-19 12:49:11',
            ),
            323 => 
            array (
                'id' => 325,
                'name' => 'Tally.ERP',
                'course_sub_category_id' => 26,
                'slug' => 'tallyerp',
                'created_at' => '2021-06-19 12:49:40',
                'updated_at' => '2021-06-19 12:49:40',
            ),
            324 => 
            array (
                'id' => 326,
                'name' => 'Xero',
                'course_sub_category_id' => 26,
                'slug' => 'xero',
                'created_at' => '2021-06-19 12:49:58',
                'updated_at' => '2021-06-19 12:49:58',
            ),
            325 => 
            array (
                'id' => 327,
                'name' => 'Cost Accounting',
                'course_sub_category_id' => 26,
                'slug' => 'cost-accounting',
                'created_at' => '2021-06-19 12:50:22',
                'updated_at' => '2021-06-19 12:50:22',
            ),
            326 => 
            array (
                'id' => 328,
                'name' => 'Anti-Money Laundering',
                'course_sub_category_id' => 27,
                'slug' => 'anti-money-laundering',
                'created_at' => '2021-06-19 12:51:51',
                'updated_at' => '2021-06-19 12:51:51',
            ),
            327 => 
            array (
                'id' => 329,
                'name' => 'Risk Management',
                'course_sub_category_id' => 27,
                'slug' => 'risk-management',
                'created_at' => '2021-06-19 12:52:45',
                'updated_at' => '2021-06-19 12:52:45',
            ),
            328 => 
            array (
                'id' => 330,
            'name' => 'Sarbanes-Oxley (SOX)',
                'course_sub_category_id' => 27,
                'slug' => 'sarbanes-oxley-sox',
                'created_at' => '2021-06-19 12:53:23',
                'updated_at' => '2021-06-19 12:53:23',
            ),
            329 => 
            array (
                'id' => 331,
                'name' => 'CAMS Certification',
                'course_sub_category_id' => 27,
                'slug' => 'cams-certification',
                'created_at' => '2021-06-19 12:53:52',
                'updated_at' => '2021-06-19 12:53:52',
            ),
            330 => 
            array (
                'id' => 332,
                'name' => 'Internal Auditing',
                'course_sub_category_id' => 27,
                'slug' => 'internal-auditing',
                'created_at' => '2021-06-19 12:54:11',
                'updated_at' => '2021-06-19 12:54:11',
            ),
            331 => 
            array (
                'id' => 333,
                'name' => 'Trade and Commerce',
                'course_sub_category_id' => 27,
                'slug' => 'trade-and-commerce',
                'created_at' => '2021-06-19 12:54:33',
                'updated_at' => '2021-06-19 12:54:33',
            ),
            332 => 
            array (
                'id' => 334,
                'name' => 'IFRS',
                'course_sub_category_id' => 27,
                'slug' => 'ifrs',
                'created_at' => '2021-06-19 12:55:01',
                'updated_at' => '2021-06-19 12:55:01',
            ),
            333 => 
            array (
                'id' => 335,
            'name' => 'Financial Risk Manager (FRM)',
                'course_sub_category_id' => 27,
                'slug' => 'financial-risk-manager-frm',
                'created_at' => '2021-06-19 12:55:32',
                'updated_at' => '2021-06-19 12:55:32',
            ),
            334 => 
            array (
                'id' => 336,
                'name' => 'Accounting',
                'course_sub_category_id' => 27,
                'slug' => 'accounting-1',
                'created_at' => '2021-06-19 12:56:06',
                'updated_at' => '2021-06-19 12:56:06',
            ),
            335 => 
            array (
                'id' => 337,
                'name' => 'Cryptocurrency',
                'course_sub_category_id' => 28,
                'slug' => 'cryptocurrency',
                'created_at' => '2021-06-19 12:57:49',
                'updated_at' => '2021-06-19 12:57:49',
            ),
            336 => 
            array (
                'id' => 338,
                'name' => 'Bitcoin',
                'course_sub_category_id' => 28,
                'slug' => 'bitcoin-1',
                'created_at' => '2021-06-19 12:58:10',
                'updated_at' => '2021-06-19 12:58:10',
            ),
            337 => 
            array (
                'id' => 339,
                'name' => 'Blockchain',
                'course_sub_category_id' => 28,
                'slug' => 'blockchain-1',
                'created_at' => '2021-06-19 12:58:42',
                'updated_at' => '2021-06-19 12:58:42',
            ),
            338 => 
            array (
                'id' => 340,
                'name' => 'Personal Finance',
                'course_sub_category_id' => 28,
                'slug' => 'personal-finance',
                'created_at' => '2021-06-19 12:59:01',
                'updated_at' => '2021-06-19 12:59:01',
            ),
            339 => 
            array (
                'id' => 341,
                'name' => 'Day Trading',
                'course_sub_category_id' => 28,
                'slug' => 'day-trading',
                'created_at' => '2021-06-19 12:59:16',
                'updated_at' => '2021-06-19 12:59:16',
            ),
            340 => 
            array (
                'id' => 342,
                'name' => 'Algorithmic Trading',
                'course_sub_category_id' => 28,
                'slug' => 'algorithmic-trading',
                'created_at' => '2021-06-19 12:59:33',
                'updated_at' => '2021-06-19 12:59:33',
            ),
            341 => 
            array (
                'id' => 343,
                'name' => 'Bitcoin Trading',
                'course_sub_category_id' => 28,
                'slug' => 'bitcoin-trading',
                'created_at' => '2021-06-19 12:59:50',
                'updated_at' => '2021-06-19 12:59:50',
            ),
            342 => 
            array (
                'id' => 344,
                'name' => 'Technical Analysis',
                'course_sub_category_id' => 28,
                'slug' => 'technical-analysis',
                'created_at' => '2021-06-19 13:00:14',
                'updated_at' => '2021-06-19 13:00:14',
            ),
            343 => 
            array (
                'id' => 345,
            'name' => 'NFT (Non-Fungible Tokens)',
                'course_sub_category_id' => 28,
                'slug' => 'nft-non-fungible-tokens',
                'created_at' => '2021-06-19 13:00:34',
                'updated_at' => '2021-06-19 13:00:34',
            ),
            344 => 
            array (
                'id' => 346,
                'name' => 'Stata',
                'course_sub_category_id' => 29,
                'slug' => 'stata',
                'created_at' => '2021-06-19 13:01:46',
                'updated_at' => '2021-06-19 13:01:46',
            ),
            345 => 
            array (
                'id' => 347,
                'name' => 'Microeconomics',
                'course_sub_category_id' => 29,
                'slug' => 'microeconomics',
                'created_at' => '2021-06-19 13:02:11',
                'updated_at' => '2021-06-19 13:02:11',
            ),
            346 => 
            array (
                'id' => 348,
                'name' => 'Macroeconomics',
                'course_sub_category_id' => 29,
                'slug' => 'macroeconomics',
                'created_at' => '2021-06-19 13:02:40',
                'updated_at' => '2021-06-19 13:02:40',
            ),
            347 => 
            array (
                'id' => 349,
                'name' => 'Finance Fundamentals',
                'course_sub_category_id' => 29,
                'slug' => 'finance-fundamentals-1',
                'created_at' => '2021-06-19 13:02:57',
                'updated_at' => '2021-06-19 13:02:57',
            ),
            348 => 
            array (
                'id' => 350,
                'name' => 'Entrepreneurship Fundamentals',
                'course_sub_category_id' => 29,
                'slug' => 'entrepreneurship-fundamentals-1',
                'created_at' => '2021-06-19 13:03:28',
                'updated_at' => '2021-06-19 13:03:28',
            ),
            349 => 
            array (
                'id' => 351,
                'name' => 'Regression Analysis',
                'course_sub_category_id' => 29,
                'slug' => 'regression-analysis',
                'created_at' => '2021-06-19 13:03:44',
                'updated_at' => '2021-06-19 13:03:44',
            ),
            350 => 
            array (
                'id' => 352,
                'name' => 'Data Visualization',
                'course_sub_category_id' => 29,
                'slug' => 'data-visualization',
                'created_at' => '2021-06-19 13:04:10',
                'updated_at' => '2021-06-19 13:04:10',
            ),
            351 => 
            array (
                'id' => 353,
                'name' => 'Econometrics',
                'course_sub_category_id' => 29,
                'slug' => 'econometrics',
                'created_at' => '2021-06-19 13:04:57',
                'updated_at' => '2021-06-19 13:04:57',
            ),
            352 => 
            array (
                'id' => 354,
                'name' => 'Personal Finance',
                'course_sub_category_id' => 30,
                'slug' => 'personal-finance-1',
                'created_at' => '2021-06-19 13:07:43',
                'updated_at' => '2021-06-19 13:07:43',
            ),
            353 => 
            array (
                'id' => 355,
                'name' => 'Investment Banking',
                'course_sub_category_id' => 30,
                'slug' => 'investment-banking',
                'created_at' => '2021-06-19 13:07:59',
                'updated_at' => '2021-06-19 13:07:59',
            ),
            354 => 
            array (
                'id' => 356,
                'name' => 'Finance Fundamentals',
                'course_sub_category_id' => 30,
                'slug' => 'finance-fundamentals-2',
                'created_at' => '2021-06-19 13:08:19',
                'updated_at' => '2021-06-19 13:08:19',
            ),
            355 => 
            array (
                'id' => 357,
                'name' => 'CFA',
                'course_sub_category_id' => 30,
                'slug' => 'cfa',
                'created_at' => '2021-06-19 13:09:25',
                'updated_at' => '2021-06-19 13:09:25',
            ),
            356 => 
            array (
                'id' => 358,
                'name' => 'Financial Management',
                'course_sub_category_id' => 30,
                'slug' => 'financial-management',
                'created_at' => '2021-06-19 13:10:21',
                'updated_at' => '2021-06-19 13:10:21',
            ),
            357 => 
            array (
                'id' => 359,
                'name' => 'Corporate Finance',
                'course_sub_category_id' => 30,
                'slug' => 'corporate-finance',
                'created_at' => '2021-06-19 13:10:40',
                'updated_at' => '2021-06-19 13:10:40',
            ),
            358 => 
            array (
                'id' => 360,
                'name' => 'Financial Analysis',
                'course_sub_category_id' => 30,
                'slug' => 'financial-analysis',
                'created_at' => '2021-06-19 13:11:03',
                'updated_at' => '2021-06-19 13:11:03',
            ),
            359 => 
            array (
                'id' => 361,
                'name' => 'Company Valuation',
                'course_sub_category_id' => 30,
                'slug' => 'company-valuation',
                'created_at' => '2021-06-19 13:11:26',
                'updated_at' => '2021-06-19 13:11:26',
            ),
            360 => 
            array (
                'id' => 362,
                'name' => 'Private Equity',
                'course_sub_category_id' => 30,
                'slug' => 'private-equity',
                'created_at' => '2021-06-19 13:11:41',
                'updated_at' => '2021-06-19 13:11:41',
            ),
            361 => 
            array (
                'id' => 363,
                'name' => 'Stock Trading',
                'course_sub_category_id' => 31,
                'slug' => 'stock-trading',
                'created_at' => '2021-06-19 13:15:30',
                'updated_at' => '2021-06-19 13:15:30',
            ),
            362 => 
            array (
                'id' => 364,
                'name' => 'Technical Analysis',
                'course_sub_category_id' => 31,
                'slug' => 'technical-analysis-1',
                'created_at' => '2021-06-19 13:15:45',
                'updated_at' => '2021-06-19 13:15:45',
            ),
            363 => 
            array (
                'id' => 365,
                'name' => 'Investing',
                'course_sub_category_id' => 31,
                'slug' => 'investing',
                'created_at' => '2021-06-19 13:15:59',
                'updated_at' => '2021-06-19 13:15:59',
            ),
            364 => 
            array (
                'id' => 366,
                'name' => 'Forex',
                'course_sub_category_id' => 31,
                'slug' => 'forex',
                'created_at' => '2021-06-19 13:16:15',
                'updated_at' => '2021-06-19 13:16:15',
            ),
            365 => 
            array (
                'id' => 367,
                'name' => 'Day Trading',
                'course_sub_category_id' => 31,
                'slug' => 'day-trading-1',
                'created_at' => '2021-06-19 13:16:18',
                'updated_at' => '2021-06-19 13:17:28',
            ),
            366 => 
            array (
                'id' => 368,
                'name' => 'Cryptocurrency',
                'course_sub_category_id' => 31,
                'slug' => 'cryptocurrency-1',
                'created_at' => '2021-06-19 13:16:40',
                'updated_at' => '2021-06-19 13:16:40',
            ),
            367 => 
            array (
                'id' => 369,
                'name' => 'Algorithmic Trading',
                'course_sub_category_id' => 31,
                'slug' => 'algorithmic-trading-1',
                'created_at' => '2021-06-19 13:17:48',
                'updated_at' => '2021-06-19 13:17:48',
            ),
            368 => 
            array (
                'id' => 370,
                'name' => 'Financial Trading',
                'course_sub_category_id' => 31,
                'slug' => 'financial-trading',
                'created_at' => '2021-06-19 13:19:18',
                'updated_at' => '2021-06-19 13:19:18',
            ),
            369 => 
            array (
                'id' => 371,
                'name' => 'Options Trading',
                'course_sub_category_id' => 31,
                'slug' => 'options-trading',
                'created_at' => '2021-06-19 13:19:35',
                'updated_at' => '2021-06-19 13:19:35',
            ),
            370 => 
            array (
                'id' => 372,
                'name' => 'QuickBooks Online',
                'course_sub_category_id' => 32,
                'slug' => 'quickbooks-online-2',
                'created_at' => '2021-06-19 13:21:09',
                'updated_at' => '2021-06-19 13:21:09',
            ),
            371 => 
            array (
                'id' => 373,
                'name' => 'QuickBooks',
                'course_sub_category_id' => 32,
                'slug' => 'quickbooks',
                'created_at' => '2021-06-19 13:21:30',
                'updated_at' => '2021-06-19 13:21:30',
            ),
            372 => 
            array (
                'id' => 374,
                'name' => 'QuickBooks Pro',
                'course_sub_category_id' => 32,
                'slug' => 'quickbooks-pro',
                'created_at' => '2021-06-19 13:21:50',
                'updated_at' => '2021-06-19 13:21:50',
            ),
            373 => 
            array (
                'id' => 375,
                'name' => 'SAP FICO',
                'course_sub_category_id' => 32,
                'slug' => 'sap-fico',
                'created_at' => '2021-06-19 13:22:04',
                'updated_at' => '2021-06-19 13:22:04',
            ),
            374 => 
            array (
                'id' => 376,
                'name' => 'Bitcoin Trading',
                'course_sub_category_id' => 32,
                'slug' => 'bitcoin-trading-1',
                'created_at' => '2021-06-19 13:22:07',
                'updated_at' => '2021-06-19 13:22:47',
            ),
            375 => 
            array (
                'id' => 377,
                'name' => 'Excel',
                'course_sub_category_id' => 32,
                'slug' => 'excel',
                'created_at' => '2021-06-19 13:22:22',
                'updated_at' => '2021-06-19 13:22:22',
            ),
            376 => 
            array (
                'id' => 378,
                'name' => 'Xero',
                'course_sub_category_id' => 32,
                'slug' => 'xero-1',
                'created_at' => '2021-06-19 13:23:07',
                'updated_at' => '2021-06-19 13:23:07',
            ),
            377 => 
            array (
                'id' => 379,
                'name' => 'Excel Analytics',
                'course_sub_category_id' => 32,
                'slug' => 'excel-analytics',
                'created_at' => '2021-06-19 13:23:24',
                'updated_at' => '2021-06-19 13:23:24',
            ),
            378 => 
            array (
                'id' => 380,
                'name' => 'Financial Analysis',
                'course_sub_category_id' => 32,
                'slug' => 'financial-analysis-1',
                'created_at' => '2021-06-19 13:23:37',
                'updated_at' => '2021-06-19 13:23:37',
            ),
            379 => 
            array (
                'id' => 381,
                'name' => 'Tax Preparation',
                'course_sub_category_id' => 33,
                'slug' => 'tax-preparation',
                'created_at' => '2021-06-19 13:25:50',
                'updated_at' => '2021-06-19 13:25:50',
            ),
            380 => 
            array (
                'id' => 382,
                'name' => 'Accounting',
                'course_sub_category_id' => 33,
                'slug' => 'accounting-2',
                'created_at' => '2021-06-19 13:26:06',
                'updated_at' => '2021-06-19 13:26:06',
            ),
            381 => 
            array (
                'id' => 383,
                'name' => 'Goods and Services Tax',
                'course_sub_category_id' => 33,
                'slug' => 'goods-and-services-tax',
                'created_at' => '2021-06-19 13:26:22',
                'updated_at' => '2021-06-19 13:26:22',
            ),
            382 => 
            array (
                'id' => 384,
                'name' => 'Home Business',
                'course_sub_category_id' => 33,
                'slug' => 'home-business-1',
                'created_at' => '2021-06-19 13:26:37',
                'updated_at' => '2021-06-19 13:26:37',
            ),
            383 => 
            array (
                'id' => 385,
                'name' => 'SAT',
                'course_sub_category_id' => 33,
                'slug' => 'sat',
                'created_at' => '2021-06-19 13:26:40',
                'updated_at' => '2021-06-19 13:26:57',
            ),
            384 => 
            array (
                'id' => 386,
            'name' => 'Value Added Tax (VAT)',
                'course_sub_category_id' => 33,
                'slug' => 'value-added-tax-vat',
                'created_at' => '2021-06-19 13:27:29',
                'updated_at' => '2021-06-19 13:27:29',
            ),
            385 => 
            array (
                'id' => 387,
                'name' => 'Financial Accounting',
                'course_sub_category_id' => 33,
                'slug' => 'financial-accounting-1',
                'created_at' => '2021-06-19 13:27:45',
                'updated_at' => '2021-06-19 13:27:45',
            ),
            386 => 
            array (
                'id' => 388,
                'name' => 'QuickBooks Online',
                'course_sub_category_id' => 33,
                'slug' => 'quickbooks-online-3',
                'created_at' => '2021-06-19 13:28:04',
                'updated_at' => '2021-06-19 13:28:04',
            ),
            387 => 
            array (
                'id' => 389,
                'name' => 'Entrepreneurship Fundamentals',
                'course_sub_category_id' => 33,
                'slug' => 'entrepreneurship-fundamentals-2',
                'created_at' => '2021-06-19 13:28:19',
                'updated_at' => '2021-06-19 13:28:19',
            ),
            388 => 
            array (
                'id' => 390,
                'name' => 'PowerPoint',
                'course_sub_category_id' => 34,
                'slug' => 'powerpoint-1',
                'created_at' => '2021-06-19 13:30:29',
                'updated_at' => '2021-06-19 13:30:56',
            ),
            389 => 
            array (
                'id' => 391,
                'name' => 'Technical Analysis',
                'course_sub_category_id' => 34,
                'slug' => 'technical-analysis-3',
                'created_at' => '2021-06-19 13:30:29',
                'updated_at' => '2021-06-19 13:30:29',
            ),
            390 => 
            array (
                'id' => 392,
                'name' => 'Passive Income',
                'course_sub_category_id' => 34,
                'slug' => 'passive-income-1',
                'created_at' => '2021-06-19 13:30:30',
                'updated_at' => '2021-06-19 13:31:49',
            ),
            391 => 
            array (
                'id' => 393,
                'name' => 'Stock Trading',
                'course_sub_category_id' => 34,
                'slug' => 'stock-trading-1',
                'created_at' => '2021-06-19 13:30:30',
                'updated_at' => '2021-06-19 13:31:14',
            ),
            392 => 
            array (
                'id' => 394,
                'name' => 'Credit Repair',
                'course_sub_category_id' => 34,
                'slug' => 'credit-repair',
                'created_at' => '2021-06-19 13:32:15',
                'updated_at' => '2021-06-19 13:32:15',
            ),
            393 => 
            array (
                'id' => 395,
                'name' => 'Financial Planning',
                'course_sub_category_id' => 34,
                'slug' => 'financial-planning',
                'created_at' => '2021-06-19 13:32:34',
                'updated_at' => '2021-06-19 13:32:34',
            ),
            394 => 
            array (
                'id' => 396,
                'name' => 'Online Business',
                'course_sub_category_id' => 34,
                'slug' => 'online-business-1',
                'created_at' => '2021-06-19 13:33:01',
                'updated_at' => '2021-06-19 13:33:01',
            ),
            395 => 
            array (
                'id' => 397,
                'name' => 'Personal Finance',
                'course_sub_category_id' => 34,
                'slug' => 'personal-finance-2',
                'created_at' => '2021-06-19 13:33:15',
                'updated_at' => '2021-06-19 13:33:15',
            ),
            396 => 
            array (
                'id' => 398,
                'name' => 'Excel',
                'course_sub_category_id' => 40,
                'slug' => 'excel-1',
                'created_at' => '2021-06-19 15:22:11',
                'updated_at' => '2021-06-19 15:22:11',
            ),
            397 => 
            array (
                'id' => 399,
                'name' => 'Excel VBA',
                'course_sub_category_id' => 40,
                'slug' => 'excel-vba',
                'created_at' => '2021-06-19 15:22:37',
                'updated_at' => '2021-06-19 15:22:37',
            ),
            398 => 
            array (
                'id' => 400,
                'name' => 'Excel Formulas and Functions',
                'course_sub_category_id' => 40,
                'slug' => 'excel-formulas-and-functions',
                'created_at' => '2021-06-19 15:23:08',
                'updated_at' => '2021-06-19 15:23:08',
            ),
            399 => 
            array (
                'id' => 401,
                'name' => 'Data Analysis',
                'course_sub_category_id' => 40,
                'slug' => 'data-analysis-2',
                'created_at' => '2021-06-19 15:23:30',
                'updated_at' => '2021-06-19 15:23:30',
            ),
            400 => 
            array (
                'id' => 402,
                'name' => 'PowerPoint',
                'course_sub_category_id' => 40,
                'slug' => 'powerpoint-2',
                'created_at' => '2021-06-19 15:24:15',
                'updated_at' => '2021-06-19 15:24:15',
            ),
            401 => 
            array (
                'id' => 403,
                'name' => 'Microsoft Power BI',
                'course_sub_category_id' => 40,
                'slug' => 'microsoft-power-bi-1',
                'created_at' => '2021-06-19 15:24:36',
                'updated_at' => '2021-06-19 15:24:36',
            ),
            402 => 
            array (
                'id' => 404,
                'name' => 'Microsoft Office',
                'course_sub_category_id' => 40,
                'slug' => 'microsoft-office',
                'created_at' => '2021-06-19 15:25:11',
                'updated_at' => '2021-06-19 15:25:11',
            ),
            403 => 
            array (
                'id' => 405,
                'name' => 'Pivot Tables',
                'course_sub_category_id' => 40,
                'slug' => 'pivot-tables',
                'created_at' => '2021-06-19 15:25:45',
                'updated_at' => '2021-06-19 15:25:45',
            ),
            404 => 
            array (
                'id' => 406,
                'name' => 'Microsoft Word',
                'course_sub_category_id' => 40,
                'slug' => 'microsoft-word',
                'created_at' => '2021-06-19 15:26:13',
                'updated_at' => '2021-06-19 15:26:13',
            ),
            405 => 
            array (
                'id' => 407,
                'name' => 'iMovie',
                'course_sub_category_id' => 41,
                'slug' => 'imovie',
                'created_at' => '2021-06-19 15:29:17',
                'updated_at' => '2021-06-19 15:29:17',
            ),
            406 => 
            array (
                'id' => 408,
                'name' => 'Mac Basics',
                'course_sub_category_id' => 41,
                'slug' => 'mac-basics',
                'created_at' => '2021-06-19 15:29:47',
                'updated_at' => '2021-06-19 15:29:47',
            ),
            407 => 
            array (
                'id' => 409,
                'name' => 'macOS',
                'course_sub_category_id' => 41,
                'slug' => 'macos',
                'created_at' => '2021-06-19 15:30:15',
                'updated_at' => '2021-06-19 15:30:15',
            ),
            408 => 
            array (
                'id' => 410,
                'name' => 'Numbers For Mac',
                'course_sub_category_id' => 41,
                'slug' => 'numbers-for-mac',
                'created_at' => '2021-06-19 15:31:07',
                'updated_at' => '2021-06-19 15:31:07',
            ),
            409 => 
            array (
                'id' => 411,
                'name' => 'Apple Keynote',
                'course_sub_category_id' => 41,
                'slug' => 'apple-keynote',
                'created_at' => '2021-06-19 15:31:29',
                'updated_at' => '2021-06-19 15:31:29',
            ),
            410 => 
            array (
                'id' => 412,
                'name' => 'Mac Pages',
                'course_sub_category_id' => 41,
                'slug' => 'mac-pages',
                'created_at' => '2021-06-19 15:31:52',
                'updated_at' => '2021-06-19 15:31:52',
            ),
            411 => 
            array (
                'id' => 413,
                'name' => 'Microsoft Word',
                'course_sub_category_id' => 41,
                'slug' => 'microsoft-word-1',
                'created_at' => '2021-06-19 15:32:15',
                'updated_at' => '2021-06-19 15:32:15',
            ),
            412 => 
            array (
                'id' => 414,
                'name' => 'Microsoft Office 365',
                'course_sub_category_id' => 41,
                'slug' => 'microsoft-office-365',
                'created_at' => '2021-06-19 15:32:36',
                'updated_at' => '2021-06-19 15:32:36',
            ),
            413 => 
            array (
                'id' => 415,
                'name' => 'Excel Dashboard',
                'course_sub_category_id' => 41,
                'slug' => 'excel-dashboard',
                'created_at' => '2021-06-19 15:33:06',
                'updated_at' => '2021-06-19 15:33:06',
            ),
            414 => 
            array (
                'id' => 416,
                'name' => 'Google Sheets',
                'course_sub_category_id' => 42,
                'slug' => 'google-sheets',
                'created_at' => '2021-06-19 15:34:17',
                'updated_at' => '2021-06-19 15:34:17',
            ),
            415 => 
            array (
                'id' => 417,
            'name' => 'Google Workspace (G Suite)',
                'course_sub_category_id' => 42,
                'slug' => 'google-workspace-g-suite',
                'created_at' => '2021-06-19 15:34:47',
                'updated_at' => '2021-06-19 15:34:47',
            ),
            416 => 
            array (
                'id' => 418,
                'name' => 'Google Drive',
                'course_sub_category_id' => 42,
                'slug' => 'google-drive',
                'created_at' => '2021-06-19 15:35:21',
                'updated_at' => '2021-06-19 15:35:21',
            ),
            417 => 
            array (
                'id' => 419,
                'name' => 'Google Apps',
                'course_sub_category_id' => 42,
                'slug' => 'google-apps',
                'created_at' => '2021-06-19 15:35:54',
                'updated_at' => '2021-06-19 15:35:54',
            ),
            418 => 
            array (
                'id' => 420,
                'name' => 'Google Data Studio',
                'course_sub_category_id' => 42,
                'slug' => 'google-data-studio',
                'created_at' => '2021-06-19 15:36:22',
                'updated_at' => '2021-06-19 15:36:22',
            ),
            419 => 
            array (
                'id' => 421,
                'name' => 'Excel',
                'course_sub_category_id' => 42,
                'slug' => 'excel-2',
                'created_at' => '2021-06-19 15:36:47',
                'updated_at' => '2021-06-19 15:36:47',
            ),
            420 => 
            array (
                'id' => 422,
                'name' => 'Gmail Productivity',
                'course_sub_category_id' => 42,
                'slug' => 'gmail-productivity',
                'created_at' => '2021-06-19 15:37:09',
                'updated_at' => '2021-06-19 15:37:09',
            ),
            421 => 
            array (
                'id' => 423,
                'name' => 'Google Office',
                'course_sub_category_id' => 42,
                'slug' => 'google-office',
                'created_at' => '2021-06-19 15:37:32',
                'updated_at' => '2021-06-19 15:37:32',
            ),
            422 => 
            array (
                'id' => 424,
                'name' => 'Google Forms',
                'course_sub_category_id' => 42,
                'slug' => 'google-forms',
                'created_at' => '2021-06-19 15:37:57',
                'updated_at' => '2021-06-19 15:37:57',
            ),
            423 => 
            array (
                'id' => 425,
                'name' => 'SAP S/4HANA',
                'course_sub_category_id' => 43,
                'slug' => 'sap-s4hana',
                'created_at' => '2021-06-19 15:39:27',
                'updated_at' => '2021-06-19 15:39:27',
            ),
            424 => 
            array (
                'id' => 426,
                'name' => 'SAP MM',
                'course_sub_category_id' => 43,
                'slug' => 'sap-mm',
                'created_at' => '2021-06-19 15:39:49',
                'updated_at' => '2021-06-19 15:39:49',
            ),
            425 => 
            array (
                'id' => 427,
                'name' => 'SAP ABAP',
                'course_sub_category_id' => 43,
                'slug' => 'sap-abap',
                'created_at' => '2021-06-19 15:40:19',
                'updated_at' => '2021-06-19 15:40:19',
            ),
            426 => 
            array (
                'id' => 428,
                'name' => 'SAP SD',
                'course_sub_category_id' => 43,
                'slug' => 'sap-sd',
                'created_at' => '2021-06-19 15:40:42',
                'updated_at' => '2021-06-19 15:40:42',
            ),
            427 => 
            array (
                'id' => 429,
                'name' => 'SAP Financial Accounting',
                'course_sub_category_id' => 43,
                'slug' => 'sap-financial-accounting',
                'created_at' => '2021-06-19 15:41:26',
                'updated_at' => '2021-06-19 15:41:26',
            ),
            428 => 
            array (
                'id' => 430,
                'name' => 'Logistics Management',
                'course_sub_category_id' => 43,
                'slug' => 'logistics-management',
                'created_at' => '2021-06-19 15:41:56',
                'updated_at' => '2021-06-19 15:41:56',
            ),
            429 => 
            array (
                'id' => 431,
                'name' => 'B2B Sales',
                'course_sub_category_id' => 43,
                'slug' => 'b2b-sales-1',
                'created_at' => '2021-06-19 15:42:10',
                'updated_at' => '2021-06-19 15:42:10',
            ),
            430 => 
            array (
                'id' => 432,
                'name' => 'Sales Management',
                'course_sub_category_id' => 43,
                'slug' => 'sales-management',
                'created_at' => '2021-06-19 15:42:50',
                'updated_at' => '2021-06-19 15:42:50',
            ),
            431 => 
            array (
                'id' => 433,
                'name' => 'Oracle SQL',
                'course_sub_category_id' => 44,
                'slug' => 'oracle-sql-1',
                'created_at' => '2021-06-19 15:43:39',
                'updated_at' => '2021-06-19 15:43:39',
            ),
            432 => 
            array (
                'id' => 434,
                'name' => 'Oracle Database',
                'course_sub_category_id' => 44,
                'slug' => 'oracle-database',
                'created_at' => '2021-06-19 15:44:00',
                'updated_at' => '2021-06-19 15:44:00',
            ),
            433 => 
            array (
                'id' => 435,
                'name' => 'Pl/SQL',
                'course_sub_category_id' => 44,
                'slug' => 'plsql',
                'created_at' => '2021-06-19 15:44:38',
                'updated_at' => '2021-06-19 15:44:38',
            ),
            434 => 
            array (
                'id' => 436,
                'name' => 'Database Administration',
                'course_sub_category_id' => 44,
                'slug' => 'database-administration',
                'created_at' => '2021-06-19 15:45:01',
                'updated_at' => '2021-06-19 15:45:01',
            ),
            435 => 
            array (
                'id' => 437,
                'name' => 'Oracle Fusion HCM',
                'course_sub_category_id' => 44,
                'slug' => 'oracle-fusion-hcm',
                'created_at' => '2021-06-19 15:45:25',
                'updated_at' => '2021-06-19 15:45:25',
            ),
            436 => 
            array (
                'id' => 438,
                'name' => 'SQL',
                'course_sub_category_id' => 44,
                'slug' => 'sql-2',
                'created_at' => '2021-06-19 15:46:35',
                'updated_at' => '2021-06-19 15:46:35',
            ),
            437 => 
            array (
                'id' => 439,
                'name' => 'Oracle Data Integrator',
                'course_sub_category_id' => 44,
                'slug' => 'oracle-data-integrator',
                'created_at' => '2021-06-19 15:46:57',
                'updated_at' => '2021-06-19 15:46:57',
            ),
            438 => 
            array (
                'id' => 440,
                'name' => 'Oracle Business Intelligence',
                'course_sub_category_id' => 44,
                'slug' => 'oracle-business-intelligence',
                'created_at' => '2021-06-19 15:47:23',
                'updated_at' => '2021-06-19 15:47:23',
            ),
            439 => 
            array (
                'id' => 441,
                'name' => 'Oracle Primavera',
                'course_sub_category_id' => 44,
                'slug' => 'oracle-primavera',
                'created_at' => '2021-06-19 15:47:43',
                'updated_at' => '2021-06-19 15:47:43',
            ),
            440 => 
            array (
                'id' => 442,
                'name' => 'Graphic Design',
                'course_sub_category_id' => 58,
                'slug' => 'graphic-design',
                'created_at' => '2021-06-19 15:58:30',
                'updated_at' => '2021-06-19 15:58:30',
            ),
            441 => 
            array (
                'id' => 443,
                'name' => 'Photoshop',
                'course_sub_category_id' => 58,
                'slug' => 'photoshop',
                'created_at' => '2021-06-19 15:58:50',
                'updated_at' => '2021-06-19 15:58:50',
            ),
            442 => 
            array (
                'id' => 444,
                'name' => 'Adobe Illustrator',
                'course_sub_category_id' => 58,
                'slug' => 'adobe-illustrator',
                'created_at' => '2021-06-19 15:59:11',
                'updated_at' => '2021-06-19 15:59:11',
            ),
            443 => 
            array (
                'id' => 445,
                'name' => 'Drawing',
                'course_sub_category_id' => 58,
                'slug' => 'drawing',
                'created_at' => '2021-06-19 15:59:35',
                'updated_at' => '2021-06-19 15:59:35',
            ),
            444 => 
            array (
                'id' => 446,
                'name' => 'Digital Painting',
                'course_sub_category_id' => 58,
                'slug' => 'digital-painting',
                'created_at' => '2021-06-19 16:00:22',
                'updated_at' => '2021-06-19 16:00:22',
            ),
            445 => 
            array (
                'id' => 447,
                'name' => 'InDesign',
                'course_sub_category_id' => 58,
                'slug' => 'indesign',
                'created_at' => '2021-06-19 16:00:53',
                'updated_at' => '2021-06-19 16:00:53',
            ),
            446 => 
            array (
                'id' => 448,
                'name' => 'Character Design',
                'course_sub_category_id' => 58,
                'slug' => 'character-design',
                'created_at' => '2021-06-19 16:01:36',
                'updated_at' => '2021-06-19 16:01:36',
            ),
            447 => 
            array (
                'id' => 449,
                'name' => 'Design Theory',
                'course_sub_category_id' => 58,
                'slug' => 'design-theory',
                'created_at' => '2021-06-19 16:02:02',
                'updated_at' => '2021-06-19 16:02:02',
            ),
            448 => 
            array (
                'id' => 450,
                'name' => 'Canva',
                'course_sub_category_id' => 58,
                'slug' => 'canva',
                'created_at' => '2021-06-19 16:02:20',
                'updated_at' => '2021-06-19 16:02:20',
            ),
            449 => 
            array (
                'id' => 451,
                'name' => 'Photoshop',
                'course_sub_category_id' => 59,
                'slug' => 'photoshop-1',
                'created_at' => '2021-06-19 16:03:45',
                'updated_at' => '2021-06-19 16:03:45',
            ),
            450 => 
            array (
                'id' => 452,
                'name' => 'After Effects',
                'course_sub_category_id' => 59,
                'slug' => 'after-effects-1',
                'created_at' => '2021-06-19 16:04:03',
                'updated_at' => '2021-06-19 16:04:03',
            ),
            451 => 
            array (
                'id' => 453,
                'name' => 'Adobe Illustrator',
                'course_sub_category_id' => 59,
                'slug' => 'adobe-illustrator-1',
                'created_at' => '2021-06-19 16:04:26',
                'updated_at' => '2021-06-19 16:04:26',
            ),
            452 => 
            array (
                'id' => 454,
                'name' => 'AutoCAD',
                'course_sub_category_id' => 59,
                'slug' => 'autocad',
                'created_at' => '2021-06-19 16:04:55',
                'updated_at' => '2021-06-19 16:04:55',
            ),
            453 => 
            array (
                'id' => 455,
                'name' => 'Procreate Digital Illustration App',
                'course_sub_category_id' => 59,
                'slug' => 'procreate-digital-illustration-app',
                'created_at' => '2021-06-19 16:05:17',
                'updated_at' => '2021-06-19 16:05:17',
            ),
            454 => 
            array (
                'id' => 456,
                'name' => 'Adobe Premiere',
                'course_sub_category_id' => 59,
                'slug' => 'adobe-premiere',
                'created_at' => '2021-06-19 16:05:41',
                'updated_at' => '2021-06-19 16:05:41',
            ),
            455 => 
            array (
                'id' => 457,
                'name' => 'Digital Art',
                'course_sub_category_id' => 59,
                'slug' => 'digital-art',
                'created_at' => '2021-06-19 16:06:03',
                'updated_at' => '2021-06-19 16:06:03',
            ),
            456 => 
            array (
                'id' => 458,
                'name' => 'Affinity Designer',
                'course_sub_category_id' => 59,
                'slug' => 'affinity-designer',
                'created_at' => '2021-06-19 16:06:23',
                'updated_at' => '2021-06-19 16:06:23',
            ),
            457 => 
            array (
                'id' => 459,
                'name' => 'SOLIDWORKS',
                'course_sub_category_id' => 59,
                'slug' => 'solidworks',
                'created_at' => '2021-06-19 16:06:49',
                'updated_at' => '2021-06-19 16:06:49',
            ),
            458 => 
            array (
                'id' => 460,
                'name' => 'User Interface',
                'course_sub_category_id' => 60,
                'slug' => 'user-interface',
                'created_at' => '2021-06-19 16:09:44',
                'updated_at' => '2021-06-19 16:09:44',
            ),
            459 => 
            array (
                'id' => 461,
                'name' => 'Adobe XD',
                'course_sub_category_id' => 60,
                'slug' => 'adobe-xd',
                'created_at' => '2021-06-19 16:10:03',
                'updated_at' => '2021-06-19 16:10:03',
            ),
            460 => 
            array (
                'id' => 462,
                'name' => 'Figma',
                'course_sub_category_id' => 60,
                'slug' => 'figma',
                'created_at' => '2021-06-19 16:10:22',
                'updated_at' => '2021-06-19 16:10:22',
            ),
            461 => 
            array (
                'id' => 463,
                'name' => 'Web Design',
                'course_sub_category_id' => 60,
                'slug' => 'web-design',
                'created_at' => '2021-06-19 16:10:50',
                'updated_at' => '2021-06-19 16:10:50',
            ),
            462 => 
            array (
                'id' => 464,
                'name' => 'Product Design',
                'course_sub_category_id' => 60,
                'slug' => 'product-design',
                'created_at' => '2021-06-19 16:11:09',
                'updated_at' => '2021-06-19 16:11:09',
            ),
            463 => 
            array (
                'id' => 465,
                'name' => 'Mobile App Design',
                'course_sub_category_id' => 60,
                'slug' => 'mobile-app-design',
                'created_at' => '2021-06-19 16:11:29',
                'updated_at' => '2021-06-19 16:11:29',
            ),
            464 => 
            array (
                'id' => 466,
                'name' => 'Usability Testing',
                'course_sub_category_id' => 60,
                'slug' => 'usability-testing',
                'created_at' => '2021-06-19 16:11:49',
                'updated_at' => '2021-06-19 16:11:49',
            ),
            465 => 
            array (
                'id' => 467,
                'name' => 'Web Accessibility',
                'course_sub_category_id' => 60,
                'slug' => 'web-accessibility',
                'created_at' => '2021-06-19 16:12:53',
                'updated_at' => '2021-06-19 16:12:53',
            ),
            466 => 
            array (
                'id' => 468,
                'name' => 'Unreal Engine',
                'course_sub_category_id' => 61,
                'slug' => 'unreal-engine-1',
                'created_at' => '2021-06-19 16:24:00',
                'updated_at' => '2021-06-19 16:24:00',
            ),
            467 => 
            array (
                'id' => 469,
                'name' => 'Pixel Art',
                'course_sub_category_id' => 61,
                'slug' => 'pixel-art',
                'created_at' => '2021-06-19 16:24:25',
                'updated_at' => '2021-06-19 16:24:25',
            ),
            468 => 
            array (
                'id' => 470,
                'name' => 'Unity',
                'course_sub_category_id' => 61,
                'slug' => 'unity-1',
                'created_at' => '2021-06-19 16:24:50',
                'updated_at' => '2021-06-19 16:24:50',
            ),
            469 => 
            array (
                'id' => 471,
                'name' => 'Drawing',
                'course_sub_category_id' => 61,
                'slug' => 'drawing-1',
                'created_at' => '2021-06-19 16:25:10',
                'updated_at' => '2021-06-19 16:25:10',
            ),
            470 => 
            array (
                'id' => 472,
                'name' => 'Game Development Fundamentals',
                'course_sub_category_id' => 61,
                'slug' => 'game-development-fundamentals-1',
                'created_at' => '2021-06-19 16:25:30',
                'updated_at' => '2021-06-19 16:25:30',
            ),
            471 => 
            array (
                'id' => 473,
                'name' => 'Blender',
                'course_sub_category_id' => 61,
                'slug' => 'blender-1',
                'created_at' => '2021-06-19 16:25:50',
                'updated_at' => '2021-06-19 16:25:50',
            ),
            472 => 
            array (
                'id' => 474,
                'name' => 'Digital Painting',
                'course_sub_category_id' => 61,
                'slug' => 'digital-painting-1',
                'created_at' => '2021-06-19 16:26:20',
                'updated_at' => '2021-06-19 16:26:20',
            ),
            473 => 
            array (
                'id' => 475,
                'name' => 'Level Design',
                'course_sub_category_id' => 61,
                'slug' => 'level-design',
                'created_at' => '2021-06-19 16:27:05',
                'updated_at' => '2021-06-19 16:27:05',
            ),
            474 => 
            array (
                'id' => 476,
                'name' => 'Anime',
                'course_sub_category_id' => 62,
                'slug' => 'anime',
                'created_at' => '2021-06-19 16:31:21',
                'updated_at' => '2021-06-19 16:31:21',
            ),
            475 => 
            array (
                'id' => 477,
                'name' => 'User Experience Design',
                'course_sub_category_id' => 62,
                'slug' => 'user-experience-design',
                'created_at' => '2021-06-19 16:31:50',
                'updated_at' => '2021-06-19 16:31:50',
            ),
            476 => 
            array (
                'id' => 478,
                'name' => 'SOLIDWORKS',
                'course_sub_category_id' => 62,
                'slug' => 'solidworks-1',
                'created_at' => '2021-06-19 16:32:09',
                'updated_at' => '2021-06-19 16:32:09',
            ),
            477 => 
            array (
                'id' => 479,
                'name' => 'Digital Painting',
                'course_sub_category_id' => 62,
                'slug' => 'digital-painting-2',
                'created_at' => '2021-06-19 16:32:28',
                'updated_at' => '2021-06-19 16:32:28',
            ),
            478 => 
            array (
                'id' => 480,
                'name' => 'Gamification',
                'course_sub_category_id' => 62,
                'slug' => 'gamification',
                'created_at' => '2021-06-19 16:32:50',
                'updated_at' => '2021-06-19 16:32:50',
            ),
            479 => 
            array (
                'id' => 481,
                'name' => 'VLSI',
                'course_sub_category_id' => 62,
                'slug' => 'vlsi',
                'created_at' => '2021-06-19 16:34:10',
                'updated_at' => '2021-06-19 16:34:10',
            ),
            480 => 
            array (
                'id' => 482,
                'name' => 'Design Pattern',
                'course_sub_category_id' => 62,
                'slug' => 'design-pattern',
                'created_at' => '2021-06-19 16:34:29',
                'updated_at' => '2021-06-19 16:34:29',
            ),
            481 => 
            array (
                'id' => 483,
                'name' => 'Adobe Illustrator',
                'course_sub_category_id' => 62,
                'slug' => 'adobe-illustrator-2',
                'created_at' => '2021-06-19 16:34:50',
                'updated_at' => '2021-06-19 16:34:50',
            ),
            482 => 
            array (
                'id' => 484,
                'name' => 'Blender',
                'course_sub_category_id' => 63,
                'slug' => 'blender-2',
                'created_at' => '2021-06-19 16:39:41',
                'updated_at' => '2021-06-19 16:39:41',
            ),
            483 => 
            array (
                'id' => 485,
                'name' => '3D Modeling',
                'course_sub_category_id' => 63,
                'slug' => '3d-modeling',
                'created_at' => '2021-06-19 16:39:58',
                'updated_at' => '2021-06-19 16:39:58',
            ),
            484 => 
            array (
                'id' => 486,
                'name' => 'After Effects',
                'course_sub_category_id' => 63,
                'slug' => 'after-effects-2',
                'created_at' => '2021-06-19 16:40:21',
                'updated_at' => '2021-06-19 16:40:21',
            ),
            485 => 
            array (
                'id' => 487,
                'name' => 'Motion Graphics',
                'course_sub_category_id' => 63,
                'slug' => 'motion-graphics-1',
                'created_at' => '2021-06-19 16:40:36',
                'updated_at' => '2021-06-19 16:40:36',
            ),
            486 => 
            array (
                'id' => 488,
                'name' => '3D Animation',
                'course_sub_category_id' => 63,
                'slug' => '3d-animation',
                'created_at' => '2021-06-19 16:41:07',
                'updated_at' => '2021-06-19 16:41:07',
            ),
            487 => 
            array (
                'id' => 489,
                'name' => 'zBrush',
                'course_sub_category_id' => 63,
                'slug' => 'zbrush',
                'created_at' => '2021-06-19 16:41:22',
                'updated_at' => '2021-06-19 16:41:22',
            ),
            488 => 
            array (
                'id' => 490,
                'name' => 'Character Design',
                'course_sub_category_id' => 63,
                'slug' => 'character-design-1',
                'created_at' => '2021-06-19 16:41:41',
                'updated_at' => '2021-06-19 16:41:41',
            ),
            489 => 
            array (
                'id' => 491,
                'name' => 'Fusion 360',
                'course_sub_category_id' => 63,
                'slug' => 'fusion-360',
                'created_at' => '2021-06-19 16:41:59',
                'updated_at' => '2021-06-19 16:41:59',
            ),
            490 => 
            array (
                'id' => 492,
                'name' => 'Animation',
                'course_sub_category_id' => 63,
                'slug' => 'animation',
                'created_at' => '2021-06-19 16:42:35',
                'updated_at' => '2021-06-19 16:42:35',
            ),
            491 => 
            array (
                'id' => 493,
                'name' => 'Fashion',
                'course_sub_category_id' => 64,
                'slug' => 'fashion',
                'created_at' => '2021-06-19 16:45:22',
                'updated_at' => '2021-06-19 16:45:22',
            ),
            492 => 
            array (
                'id' => 494,
                'name' => 'Sewing',
                'course_sub_category_id' => 64,
                'slug' => 'sewing',
                'created_at' => '2021-06-19 16:45:39',
                'updated_at' => '2021-06-19 16:45:39',
            ),
            493 => 
            array (
                'id' => 495,
                'name' => 'Adobe Illustrator',
                'course_sub_category_id' => 64,
                'slug' => 'adobe-illustrator-3',
                'created_at' => '2021-06-19 16:45:56',
                'updated_at' => '2021-06-19 16:45:56',
            ),
            494 => 
            array (
                'id' => 496,
                'name' => 'Photoshop',
                'course_sub_category_id' => 64,
                'slug' => 'photoshop-2',
                'created_at' => '2021-06-19 16:46:25',
                'updated_at' => '2021-06-19 16:46:25',
            ),
            495 => 
            array (
                'id' => 497,
                'name' => 'Jewelry Design',
                'course_sub_category_id' => 64,
                'slug' => 'jewelry-design',
                'created_at' => '2021-06-19 16:46:43',
                'updated_at' => '2021-06-19 16:46:43',
            ),
            496 => 
            array (
                'id' => 498,
                'name' => 'T-Shirt Design',
                'course_sub_category_id' => 64,
                'slug' => 't-shirt-design',
                'created_at' => '2021-06-19 16:47:14',
                'updated_at' => '2021-06-19 16:47:14',
            ),
            497 => 
            array (
                'id' => 499,
                'name' => 'Anime',
                'course_sub_category_id' => 64,
                'slug' => 'anime-1',
                'created_at' => '2021-06-19 16:47:29',
                'updated_at' => '2021-06-19 16:47:29',
            ),
            498 => 
            array (
                'id' => 500,
                'name' => 'Jewelry Making',
                'course_sub_category_id' => 64,
                'slug' => 'jewelry-making',
                'created_at' => '2021-06-19 16:48:15',
                'updated_at' => '2021-06-19 16:48:15',
            ),
            499 => 
            array (
                'id' => 501,
                'name' => 'AutoCAD',
                'course_sub_category_id' => 65,
                'slug' => 'autocad-1',
                'created_at' => '2021-06-19 16:50:21',
                'updated_at' => '2021-06-19 16:50:21',
            ),
        ));
        \DB::table('course_topics')->insert(array (
            0 => 
            array (
                'id' => 502,
                'name' => 'Revit',
                'course_sub_category_id' => 65,
                'slug' => 'revit',
                'created_at' => '2021-06-19 16:50:37',
                'updated_at' => '2021-06-19 16:50:37',
            ),
            1 => 
            array (
                'id' => 503,
                'name' => 'SketchUp',
                'course_sub_category_id' => 65,
                'slug' => 'sketchup',
                'created_at' => '2021-06-19 16:50:57',
                'updated_at' => '2021-06-19 16:50:57',
            ),
            2 => 
            array (
                'id' => 504,
                'name' => 'Blender',
                'course_sub_category_id' => 65,
                'slug' => 'blender-3',
                'created_at' => '2021-06-19 16:51:15',
                'updated_at' => '2021-06-19 16:51:15',
            ),
            3 => 
            array (
                'id' => 505,
                'name' => 'ARCHICAD',
                'course_sub_category_id' => 65,
                'slug' => 'archicad',
                'created_at' => '2021-06-19 16:51:41',
                'updated_at' => '2021-06-19 16:51:41',
            ),
            4 => 
            array (
                'id' => 506,
                'name' => 'Landscape Architecture',
                'course_sub_category_id' => 65,
                'slug' => 'landscape-architecture',
                'created_at' => '2021-06-19 16:52:00',
                'updated_at' => '2021-06-19 16:52:00',
            ),
            5 => 
            array (
                'id' => 507,
                'name' => '3D Animation',
                'course_sub_category_id' => 65,
                'slug' => '3d-animation-1',
                'created_at' => '2021-06-19 16:52:20',
                'updated_at' => '2021-06-19 16:52:20',
            ),
            6 => 
            array (
                'id' => 508,
                'name' => 'LEED',
                'course_sub_category_id' => 65,
                'slug' => 'leed',
                'created_at' => '2021-06-19 16:52:42',
                'updated_at' => '2021-06-19 16:52:42',
            ),
            7 => 
            array (
                'id' => 509,
                'name' => 'SketchUp',
                'course_sub_category_id' => 66,
                'slug' => 'sketchup-1',
                'created_at' => '2021-06-19 16:56:43',
                'updated_at' => '2021-06-19 16:56:43',
            ),
            8 => 
            array (
                'id' => 510,
                'name' => 'Color Theory',
                'course_sub_category_id' => 66,
                'slug' => 'color-theory',
                'created_at' => '2021-06-19 16:57:00',
                'updated_at' => '2021-06-19 16:57:00',
            ),
            9 => 
            array (
                'id' => 511,
                'name' => 'Lighting Design',
                'course_sub_category_id' => 66,
                'slug' => 'lighting-design',
                'created_at' => '2021-06-19 16:57:17',
                'updated_at' => '2021-06-19 16:57:17',
            ),
            10 => 
            array (
                'id' => 512,
                'name' => 'HVAC',
                'course_sub_category_id' => 66,
                'slug' => 'hvac',
                'created_at' => '2021-06-19 16:57:35',
                'updated_at' => '2021-06-19 16:57:35',
            ),
            11 => 
            array (
                'id' => 513,
                'name' => 'Minimalist Lifestyle',
                'course_sub_category_id' => 66,
                'slug' => 'minimalist-lifestyle',
                'created_at' => '2021-06-19 16:57:52',
                'updated_at' => '2021-06-19 16:57:52',
            ),
            12 => 
            array (
                'id' => 514,
                'name' => 'Blender',
                'course_sub_category_id' => 66,
                'slug' => 'blender-4',
                'created_at' => '2021-06-19 16:58:09',
                'updated_at' => '2021-06-19 16:58:09',
            ),
            13 => 
            array (
                'id' => 515,
                'name' => '3ds Max',
                'course_sub_category_id' => 66,
                'slug' => '3ds-max',
                'created_at' => '2021-06-19 16:58:26',
                'updated_at' => '2021-06-19 16:58:26',
            ),
            14 => 
            array (
                'id' => 516,
                'name' => 'Botany',
                'course_sub_category_id' => 66,
                'slug' => 'botany',
                'created_at' => '2021-06-19 16:58:42',
                'updated_at' => '2021-06-19 16:58:42',
            ),
            15 => 
            array (
                'id' => 517,
                'name' => 'Character Design',
                'course_sub_category_id' => 67,
                'slug' => 'character-design-2',
                'created_at' => '2021-06-19 17:00:54',
                'updated_at' => '2021-06-19 17:00:54',
            ),
            16 => 
            array (
                'id' => 518,
                'name' => 'Electronics',
                'course_sub_category_id' => 67,
                'slug' => 'electronics-1',
                'created_at' => '2021-06-19 17:01:12',
                'updated_at' => '2021-06-19 17:01:12',
            ),
            17 => 
            array (
                'id' => 519,
                'name' => 'Drawing',
                'course_sub_category_id' => 67,
                'slug' => 'drawing-2',
                'created_at' => '2021-06-19 17:01:31',
                'updated_at' => '2021-06-19 17:01:31',
            ),
            18 => 
            array (
                'id' => 520,
                'name' => 'Circuit Design',
                'course_sub_category_id' => 67,
                'slug' => 'circuit-design',
                'created_at' => '2021-06-19 17:01:59',
                'updated_at' => '2021-06-19 17:01:59',
            ),
            19 => 
            array (
                'id' => 521,
                'name' => 'Digital Painting',
                'course_sub_category_id' => 67,
                'slug' => 'digital-painting-3',
                'created_at' => '2021-06-19 17:02:09',
                'updated_at' => '2021-06-19 17:02:09',
            ),
            20 => 
            array (
                'id' => 522,
                'name' => 'Comic Book Creation',
                'course_sub_category_id' => 67,
                'slug' => 'comic-book-creation',
                'created_at' => '2021-06-19 17:02:28',
                'updated_at' => '2021-06-19 17:02:28',
            ),
            21 => 
            array (
                'id' => 523,
                'name' => 'Perspective Drawing',
                'course_sub_category_id' => 67,
                'slug' => 'perspective-drawing',
                'created_at' => '2021-06-19 17:02:44',
                'updated_at' => '2021-06-19 17:02:44',
            ),
            22 => 
            array (
                'id' => 524,
                'name' => 'Portraiture',
                'course_sub_category_id' => 67,
                'slug' => 'portraiture',
                'created_at' => '2021-06-19 17:03:02',
                'updated_at' => '2021-06-19 17:03:02',
            ),
            23 => 
            array (
                'id' => 525,
            'name' => 'Geometric Dimensioning and Tolerancing (GD&T)',
                'course_sub_category_id' => 67,
                'slug' => 'geometric-dimensioning-and-tolerancing-gdt',
                'created_at' => '2021-06-19 17:03:26',
                'updated_at' => '2021-06-19 17:03:26',
            ),
            24 => 
            array (
                'id' => 526,
                'name' => 'Social Media Marketing',
                'course_sub_category_id' => 68,
                'slug' => 'social-media-marketing',
                'created_at' => '2021-06-19 17:10:58',
                'updated_at' => '2021-06-19 17:10:58',
            ),
            25 => 
            array (
                'id' => 527,
            'name' => 'Google Ads (AdWords)',
                'course_sub_category_id' => 68,
                'slug' => 'google-ads-adwords-1',
                'created_at' => '2021-06-19 17:11:16',
                'updated_at' => '2021-06-19 17:11:16',
            ),
            26 => 
            array (
                'id' => 528,
                'name' => 'Marketing Strategy',
                'course_sub_category_id' => 68,
                'slug' => 'marketing-strategy',
                'created_at' => '2021-06-19 17:11:31',
                'updated_at' => '2021-06-19 17:11:31',
            ),
            27 => 
            array (
                'id' => 529,
            'name' => 'Google Ads (AdWords) Certification',
                'course_sub_category_id' => 68,
                'slug' => 'google-ads-adwords-certification',
                'created_at' => '2021-06-19 17:11:50',
                'updated_at' => '2021-06-19 17:11:50',
            ),
            28 => 
            array (
                'id' => 530,
                'name' => 'Internet Marketing',
                'course_sub_category_id' => 68,
                'slug' => 'internet-marketing',
                'created_at' => '2021-06-19 17:12:08',
                'updated_at' => '2021-06-19 17:12:08',
            ),
            29 => 
            array (
                'id' => 531,
                'name' => 'YouTube Marketing',
                'course_sub_category_id' => 68,
                'slug' => 'youtube-marketing',
                'created_at' => '2021-06-19 17:12:25',
                'updated_at' => '2021-06-19 17:12:25',
            ),
            30 => 
            array (
                'id' => 532,
                'name' => 'Email Marketing',
                'course_sub_category_id' => 68,
                'slug' => 'email-marketing',
                'created_at' => '2021-06-19 17:12:43',
                'updated_at' => '2021-06-19 17:12:43',
            ),
            31 => 
            array (
                'id' => 533,
                'name' => 'Instagram Marketing',
                'course_sub_category_id' => 68,
                'slug' => 'instagram-marketing',
                'created_at' => '2021-06-19 17:13:01',
                'updated_at' => '2021-06-19 17:13:01',
            ),
            32 => 
            array (
                'id' => 534,
                'name' => 'Google Analytics',
                'course_sub_category_id' => 68,
                'slug' => 'google-analytics',
                'created_at' => '2021-06-19 17:13:18',
                'updated_at' => '2021-06-19 17:13:18',
            ),
            33 => 
            array (
                'id' => 535,
                'name' => 'SEO',
                'course_sub_category_id' => 69,
                'slug' => 'seo-1',
                'created_at' => '2021-06-19 17:17:23',
                'updated_at' => '2021-06-19 17:17:23',
            ),
            34 => 
            array (
                'id' => 536,
                'name' => 'WordPress',
                'course_sub_category_id' => 69,
                'slug' => 'wordpress-2',
                'created_at' => '2021-06-19 17:17:41',
                'updated_at' => '2021-06-19 17:17:41',
            ),
            35 => 
            array (
                'id' => 537,
                'name' => 'Keyword Research',
                'course_sub_category_id' => 69,
                'slug' => 'keyword-research',
                'created_at' => '2021-06-19 17:17:59',
                'updated_at' => '2021-06-19 17:17:59',
            ),
            36 => 
            array (
                'id' => 538,
                'name' => 'Local SEO',
                'course_sub_category_id' => 69,
                'slug' => 'local-seo',
                'created_at' => '2021-06-19 17:18:18',
                'updated_at' => '2021-06-19 17:18:18',
            ),
            37 => 
            array (
                'id' => 539,
                'name' => 'Google my Business',
                'course_sub_category_id' => 69,
                'slug' => 'google-my-business',
                'created_at' => '2021-06-19 17:18:35',
                'updated_at' => '2021-06-19 17:18:35',
            ),
            38 => 
            array (
                'id' => 540,
                'name' => 'SEO Audit',
                'course_sub_category_id' => 69,
                'slug' => 'seo-audit',
                'created_at' => '2021-06-19 17:18:56',
                'updated_at' => '2021-06-19 17:18:56',
            ),
            39 => 
            array (
                'id' => 541,
                'name' => 'Link Building',
                'course_sub_category_id' => 69,
                'slug' => 'link-building',
                'created_at' => '2021-06-19 17:19:12',
                'updated_at' => '2021-06-19 17:19:12',
            ),
            40 => 
            array (
                'id' => 542,
                'name' => 'Shopify',
                'course_sub_category_id' => 69,
                'slug' => 'shopify-1',
                'created_at' => '2021-06-19 17:19:28',
                'updated_at' => '2021-06-19 17:19:28',
            ),
            41 => 
            array (
                'id' => 543,
                'name' => 'Blogging',
                'course_sub_category_id' => 69,
                'slug' => 'blogging-1',
                'created_at' => '2021-06-19 17:19:44',
                'updated_at' => '2021-06-19 17:19:44',
            ),
            42 => 
            array (
                'id' => 544,
                'name' => 'Instagram Marketing',
                'course_sub_category_id' => 70,
                'slug' => 'instagram-marketing-1',
                'created_at' => '2021-06-19 17:22:36',
                'updated_at' => '2021-06-19 17:22:36',
            ),
            43 => 
            array (
                'id' => 545,
                'name' => 'Facebook Ads',
                'course_sub_category_id' => 70,
                'slug' => 'facebook-ads',
                'created_at' => '2021-06-19 17:22:56',
                'updated_at' => '2021-06-19 17:22:56',
            ),
            44 => 
            array (
                'id' => 546,
                'name' => 'Facebook Marketing',
                'course_sub_category_id' => 70,
                'slug' => 'facebook-marketing',
                'created_at' => '2021-06-19 17:23:25',
                'updated_at' => '2021-06-19 17:23:25',
            ),
            45 => 
            array (
                'id' => 547,
                'name' => 'PPC Advertising',
                'course_sub_category_id' => 70,
                'slug' => 'ppc-advertising',
                'created_at' => '2021-06-19 17:23:50',
                'updated_at' => '2021-06-19 17:23:50',
            ),
            46 => 
            array (
                'id' => 548,
                'name' => 'Social Media Management',
                'course_sub_category_id' => 70,
                'slug' => 'social-media-management',
                'created_at' => '2021-06-19 17:24:25',
                'updated_at' => '2021-06-19 17:24:25',
            ),
            47 => 
            array (
                'id' => 549,
                'name' => 'LinkedIn',
                'course_sub_category_id' => 70,
                'slug' => 'linkedin-2',
                'created_at' => '2021-06-19 17:25:08',
                'updated_at' => '2021-06-19 17:25:08',
            ),
            48 => 
            array (
                'id' => 550,
                'name' => 'Pinterest Marketing',
                'course_sub_category_id' => 70,
                'slug' => 'pinterest-marketing',
                'created_at' => '2021-06-19 17:25:33',
                'updated_at' => '2021-06-19 17:25:33',
            ),
            49 => 
            array (
                'id' => 551,
                'name' => 'Business Branding',
                'course_sub_category_id' => 71,
                'slug' => 'business-branding',
                'created_at' => '2021-06-19 17:29:03',
                'updated_at' => '2021-06-19 17:29:03',
            ),
            50 => 
            array (
                'id' => 552,
                'name' => 'YouTube Audience Growth',
                'course_sub_category_id' => 71,
                'slug' => 'youtube-audience-growth',
                'created_at' => '2021-06-19 17:30:06',
                'updated_at' => '2021-06-19 17:30:06',
            ),
            51 => 
            array (
                'id' => 553,
                'name' => 'YouTube Marketing',
                'course_sub_category_id' => 71,
                'slug' => 'youtube-marketing-1',
                'created_at' => '2021-06-19 17:30:25',
                'updated_at' => '2021-06-19 17:30:25',
            ),
            52 => 
            array (
                'id' => 554,
                'name' => 'Personal Branding',
                'course_sub_category_id' => 71,
                'slug' => 'personal-branding-1',
                'created_at' => '2021-06-19 17:30:44',
                'updated_at' => '2021-06-19 17:30:44',
            ),
            53 => 
            array (
                'id' => 555,
                'name' => 'Brand Management',
                'course_sub_category_id' => 71,
                'slug' => 'brand-management',
                'created_at' => '2021-06-19 17:31:08',
                'updated_at' => '2021-06-19 17:31:08',
            ),
            54 => 
            array (
                'id' => 556,
                'name' => 'Marketing Strategy',
                'course_sub_category_id' => 71,
                'slug' => 'marketing-strategy-1',
                'created_at' => '2021-06-19 17:31:26',
                'updated_at' => '2021-06-19 17:31:26',
            ),
            55 => 
            array (
                'id' => 557,
                'name' => 'Canva',
                'course_sub_category_id' => 71,
                'slug' => 'canva-1',
                'created_at' => '2021-06-19 17:31:46',
                'updated_at' => '2021-06-19 17:31:46',
            ),
            56 => 
            array (
                'id' => 558,
                'name' => 'Customer Service',
                'course_sub_category_id' => 71,
                'slug' => 'customer-service-1',
                'created_at' => '2021-06-19 17:32:06',
                'updated_at' => '2021-06-19 17:32:06',
            ),
            57 => 
            array (
                'id' => 559,
                'name' => 'Graphic Design',
                'course_sub_category_id' => 71,
                'slug' => 'graphic-design-1',
                'created_at' => '2021-06-19 17:32:26',
                'updated_at' => '2021-06-19 17:32:26',
            ),
            58 => 
            array (
                'id' => 560,
                'name' => 'Copywriting',
                'course_sub_category_id' => 72,
                'slug' => 'copywriting',
                'created_at' => '2021-06-19 17:36:01',
                'updated_at' => '2021-06-19 17:36:01',
            ),
            59 => 
            array (
                'id' => 561,
                'name' => 'Marketing Strategy',
                'course_sub_category_id' => 72,
                'slug' => 'marketing-strategy-2',
                'created_at' => '2021-06-19 17:36:25',
                'updated_at' => '2021-06-19 17:36:25',
            ),
            60 => 
            array (
                'id' => 562,
                'name' => 'Marketing Management',
                'course_sub_category_id' => 72,
                'slug' => 'marketing-management',
                'created_at' => '2021-06-19 17:36:53',
                'updated_at' => '2021-06-19 17:36:53',
            ),
            61 => 
            array (
                'id' => 563,
                'name' => 'Marketing Analytics',
                'course_sub_category_id' => 72,
                'slug' => 'marketing-analytics',
                'created_at' => '2021-06-19 17:37:22',
                'updated_at' => '2021-06-19 17:37:22',
            ),
            62 => 
            array (
                'id' => 564,
                'name' => 'Event Planning',
                'course_sub_category_id' => 72,
                'slug' => 'event-planning',
                'created_at' => '2021-06-19 17:37:46',
                'updated_at' => '2021-06-19 17:37:46',
            ),
            63 => 
            array (
                'id' => 565,
                'name' => 'Neuromarketing',
                'course_sub_category_id' => 72,
                'slug' => 'neuromarketing',
                'created_at' => '2021-06-19 17:38:09',
                'updated_at' => '2021-06-19 17:38:09',
            ),
            64 => 
            array (
                'id' => 566,
                'name' => 'Sales Skills',
                'course_sub_category_id' => 72,
                'slug' => 'sales-skills-1',
                'created_at' => '2021-06-19 17:38:29',
                'updated_at' => '2021-06-19 17:38:29',
            ),
            65 => 
            array (
                'id' => 567,
                'name' => 'Marketing Plan',
                'course_sub_category_id' => 72,
                'slug' => 'marketing-plan',
                'created_at' => '2021-06-19 17:38:55',
                'updated_at' => '2021-06-19 17:38:55',
            ),
            66 => 
            array (
                'id' => 568,
                'name' => 'Marketing Psychology',
                'course_sub_category_id' => 72,
                'slug' => 'marketing-psychology',
                'created_at' => '2021-06-19 17:39:25',
                'updated_at' => '2021-06-19 17:39:25',
            ),
            67 => 
            array (
                'id' => 569,
                'name' => 'Google Analytics',
                'course_sub_category_id' => 73,
                'slug' => 'google-analytics-1',
                'created_at' => '2021-06-19 17:46:03',
                'updated_at' => '2021-06-19 17:46:03',
            ),
            68 => 
            array (
                'id' => 570,
            'name' => 'Google Analytics Individual Qualification (IQ)',
                'course_sub_category_id' => 73,
                'slug' => 'google-analytics-individual-qualification-iq',
                'created_at' => '2021-06-19 17:46:54',
                'updated_at' => '2021-06-19 17:46:54',
            ),
            69 => 
            array (
                'id' => 571,
                'name' => 'Data Analysis',
                'course_sub_category_id' => 73,
                'slug' => 'data-analysis-3',
                'created_at' => '2021-06-19 17:47:13',
                'updated_at' => '2021-06-19 17:47:13',
            ),
            70 => 
            array (
                'id' => 572,
                'name' => 'Marketing Analytics',
                'course_sub_category_id' => 73,
                'slug' => 'marketing-analytics-1',
                'created_at' => '2021-06-19 17:47:31',
                'updated_at' => '2021-06-19 17:47:31',
            ),
            71 => 
            array (
                'id' => 573,
                'name' => 'Google Tag Manager',
                'course_sub_category_id' => 73,
                'slug' => 'google-tag-manager',
                'created_at' => '2021-06-19 17:47:58',
                'updated_at' => '2021-06-19 17:47:58',
            ),
            72 => 
            array (
                'id' => 574,
                'name' => 'SQL',
                'course_sub_category_id' => 73,
                'slug' => 'sql-3',
                'created_at' => '2021-06-19 17:48:15',
                'updated_at' => '2021-06-19 17:48:15',
            ),
            73 => 
            array (
                'id' => 575,
                'name' => 'Marketing Strategy',
                'course_sub_category_id' => 73,
                'slug' => 'marketing-strategy-3',
                'created_at' => '2021-06-19 17:48:33',
                'updated_at' => '2021-06-19 17:48:33',
            ),
            74 => 
            array (
                'id' => 576,
                'name' => 'Google Analytics Reports',
                'course_sub_category_id' => 73,
                'slug' => 'google-analytics-reports',
                'created_at' => '2021-06-19 17:49:01',
                'updated_at' => '2021-06-19 17:49:01',
            ),
            75 => 
            array (
                'id' => 577,
                'name' => 'Marketing Automation',
                'course_sub_category_id' => 73,
                'slug' => 'marketing-automation',
                'created_at' => '2021-06-19 17:49:24',
                'updated_at' => '2021-06-19 17:49:24',
            ),
            76 => 
            array (
                'id' => 578,
                'name' => 'Electronics',
                'course_sub_category_id' => 82,
                'slug' => 'electronics-2',
                'created_at' => '2021-06-20 14:04:20',
                'updated_at' => '2021-06-20 14:04:20',
            ),
            77 => 
            array (
                'id' => 579,
                'name' => 'Electrical Engineering',
                'course_sub_category_id' => 82,
                'slug' => 'electrical-engineering-1',
                'created_at' => '2021-06-20 14:04:45',
                'updated_at' => '2021-06-20 14:04:45',
            ),
            78 => 
            array (
                'id' => 580,
                'name' => 'Civil Engineering',
                'course_sub_category_id' => 82,
                'slug' => 'civil-engineering',
                'created_at' => '2021-06-20 14:05:05',
                'updated_at' => '2021-06-20 14:05:05',
            ),
            79 => 
            array (
                'id' => 581,
                'name' => 'Robotics',
                'course_sub_category_id' => 82,
                'slug' => 'robotics',
                'created_at' => '2021-06-20 14:05:25',
                'updated_at' => '2021-06-20 14:05:25',
            ),
            80 => 
            array (
                'id' => 582,
                'name' => 'Structural Engineering',
                'course_sub_category_id' => 82,
                'slug' => 'structural-engineering',
                'created_at' => '2021-06-20 18:06:04',
                'updated_at' => '2021-06-20 18:06:04',
            ),
            81 => 
            array (
                'id' => 583,
                'name' => 'Mechanical Engineering',
                'course_sub_category_id' => 82,
                'slug' => 'mechanical-engineering',
                'created_at' => '2021-06-20 18:06:22',
                'updated_at' => '2021-06-20 18:06:22',
            ),
            82 => 
            array (
                'id' => 584,
                'name' => 'Aerospace Engineering',
                'course_sub_category_id' => 82,
                'slug' => 'aerospace-engineering',
                'created_at' => '2021-06-20 18:06:36',
                'updated_at' => '2021-06-20 18:06:36',
            ),
            83 => 
            array (
                'id' => 585,
                'name' => 'Control Systems',
                'course_sub_category_id' => 82,
                'slug' => 'control-systems',
                'created_at' => '2021-06-20 18:06:54',
                'updated_at' => '2021-06-20 18:06:54',
            ),
            84 => 
            array (
                'id' => 586,
                'name' => 'Solar Energy',
                'course_sub_category_id' => 82,
                'slug' => 'solar-energy-1',
                'created_at' => '2021-06-20 18:07:16',
                'updated_at' => '2021-06-20 18:07:16',
            ),
            85 => 
            array (
                'id' => 587,
                'name' => 'Christianity',
                'course_sub_category_id' => 83,
                'slug' => 'christianity',
                'created_at' => '2021-06-20 18:08:01',
                'updated_at' => '2021-06-20 18:08:01',
            ),
            86 => 
            array (
                'id' => 588,
                'name' => 'The Bible',
                'course_sub_category_id' => 83,
                'slug' => 'the-bible',
                'created_at' => '2021-06-20 18:08:14',
                'updated_at' => '2021-06-20 18:08:14',
            ),
            87 => 
            array (
                'id' => 589,
                'name' => 'Psychology',
                'course_sub_category_id' => 83,
                'slug' => 'psychology',
                'created_at' => '2021-06-20 18:08:28',
                'updated_at' => '2021-06-20 18:08:28',
            ),
            88 => 
            array (
                'id' => 590,
                'name' => 'Statistics',
                'course_sub_category_id' => 83,
                'slug' => 'statistics-1',
                'created_at' => '2021-06-20 18:08:41',
                'updated_at' => '2021-06-20 18:08:41',
            ),
            89 => 
            array (
                'id' => 591,
                'name' => 'Philosophy',
                'course_sub_category_id' => 83,
                'slug' => 'philosophy',
                'created_at' => '2021-06-20 18:08:56',
                'updated_at' => '2021-06-20 18:08:56',
            ),
            90 => 
            array (
                'id' => 592,
                'name' => 'Creative Writing',
                'course_sub_category_id' => 83,
                'slug' => 'creative-writing',
                'created_at' => '2021-06-20 18:09:10',
                'updated_at' => '2021-06-20 18:09:10',
            ),
            91 => 
            array (
                'id' => 593,
                'name' => 'Art History',
                'course_sub_category_id' => 83,
                'slug' => 'art-history',
                'created_at' => '2021-06-20 18:09:23',
                'updated_at' => '2021-06-20 18:09:23',
            ),
            92 => 
            array (
                'id' => 594,
                'name' => 'Critical Thinking',
                'course_sub_category_id' => 83,
                'slug' => 'critical-thinking',
                'created_at' => '2021-06-20 18:09:36',
                'updated_at' => '2021-06-20 18:09:36',
            ),
            93 => 
            array (
                'id' => 595,
                'name' => 'English Literature',
                'course_sub_category_id' => 83,
                'slug' => 'english-literature',
                'created_at' => '2021-06-20 18:09:50',
                'updated_at' => '2021-06-20 18:09:50',
            ),
            94 => 
            array (
                'id' => 596,
                'name' => 'Calculus',
                'course_sub_category_id' => 84,
                'slug' => 'calculus',
                'created_at' => '2021-06-20 18:10:14',
                'updated_at' => '2021-06-20 18:10:52',
            ),
            95 => 
            array (
                'id' => 597,
                'name' => 'Statistics',
                'course_sub_category_id' => 84,
                'slug' => 'statistics-2',
                'created_at' => '2021-06-20 18:11:12',
                'updated_at' => '2021-06-20 18:11:12',
            ),
            96 => 
            array (
                'id' => 598,
                'name' => 'Linear Algebra',
                'course_sub_category_id' => 84,
                'slug' => 'linear-algebra',
                'created_at' => '2021-06-20 18:11:25',
                'updated_at' => '2021-06-20 18:11:25',
            ),
            97 => 
            array (
                'id' => 599,
                'name' => 'Algebra',
                'course_sub_category_id' => 84,
                'slug' => 'algebra',
                'created_at' => '2021-06-20 18:11:40',
                'updated_at' => '2021-06-20 18:11:40',
            ),
            98 => 
            array (
                'id' => 600,
                'name' => 'Probability',
                'course_sub_category_id' => 84,
                'slug' => 'probability',
                'created_at' => '2021-06-20 18:11:54',
                'updated_at' => '2021-06-20 18:11:54',
            ),
            99 => 
            array (
                'id' => 601,
                'name' => 'Trigonometry',
                'course_sub_category_id' => 84,
                'slug' => 'trigonometry',
                'created_at' => '2021-06-20 18:12:08',
                'updated_at' => '2021-06-20 18:12:08',
            ),
            100 => 
            array (
                'id' => 602,
                'name' => 'Discrete Math',
                'course_sub_category_id' => 84,
                'slug' => 'discrete-math',
                'created_at' => '2021-06-20 18:12:21',
                'updated_at' => '2021-06-20 18:12:21',
            ),
            101 => 
            array (
                'id' => 603,
                'name' => 'Geometry',
                'course_sub_category_id' => 84,
                'slug' => 'geometry',
                'created_at' => '2021-06-20 18:12:35',
                'updated_at' => '2021-06-20 18:12:35',
            ),
            102 => 
            array (
                'id' => 604,
                'name' => 'Physics',
                'course_sub_category_id' => 85,
                'slug' => 'physics',
                'created_at' => '2021-06-20 18:12:52',
                'updated_at' => '2021-06-20 18:12:52',
            ),
            103 => 
            array (
                'id' => 605,
                'name' => 'Orthodontics',
                'course_sub_category_id' => 85,
                'slug' => 'orthodontics',
                'created_at' => '2021-06-20 18:13:07',
                'updated_at' => '2021-06-20 18:13:07',
            ),
            104 => 
            array (
                'id' => 606,
                'name' => 'Chemistry',
                'course_sub_category_id' => 85,
                'slug' => 'chemistry',
                'created_at' => '2021-06-20 18:13:21',
                'updated_at' => '2021-06-20 18:13:21',
            ),
            105 => 
            array (
                'id' => 607,
                'name' => 'Solar Energy',
                'course_sub_category_id' => 85,
                'slug' => 'solar-energy-2',
                'created_at' => '2021-06-20 18:13:37',
                'updated_at' => '2021-06-20 18:13:37',
            ),
            106 => 
            array (
                'id' => 608,
                'name' => 'Bioinformatics',
                'course_sub_category_id' => 85,
                'slug' => 'bioinformatics',
                'created_at' => '2021-06-20 18:15:03',
                'updated_at' => '2021-06-20 18:15:03',
            ),
            107 => 
            array (
                'id' => 609,
                'name' => 'Anatomy',
                'course_sub_category_id' => 85,
                'slug' => 'anatomy',
                'created_at' => '2021-06-20 18:15:27',
                'updated_at' => '2021-06-20 18:15:27',
            ),
            108 => 
            array (
                'id' => 610,
                'name' => 'Research Paper Writing',
                'course_sub_category_id' => 85,
                'slug' => 'research-paper-writing',
                'created_at' => '2021-06-20 18:15:39',
                'updated_at' => '2021-06-20 18:15:39',
            ),
            109 => 
            array (
                'id' => 611,
                'name' => 'Biology',
                'course_sub_category_id' => 85,
                'slug' => 'biology',
                'created_at' => '2021-06-20 18:15:53',
                'updated_at' => '2021-06-20 18:15:53',
            ),
            110 => 
            array (
                'id' => 612,
                'name' => 'Neuroscience',
                'course_sub_category_id' => 85,
                'slug' => 'neuroscience-1',
                'created_at' => '2021-06-20 18:16:06',
                'updated_at' => '2021-06-20 18:16:06',
            ),
            111 => 
            array (
                'id' => 613,
                'name' => 'Online Course Creation',
                'course_sub_category_id' => 86,
                'slug' => 'online-course-creation',
                'created_at' => '2021-06-20 18:16:25',
                'updated_at' => '2021-06-20 18:16:25',
            ),
            112 => 
            array (
                'id' => 614,
                'name' => 'Teaching Online',
                'course_sub_category_id' => 86,
                'slug' => 'teaching-online',
                'created_at' => '2021-06-20 18:16:39',
                'updated_at' => '2021-06-20 18:16:39',
            ),
            113 => 
            array (
                'id' => 615,
                'name' => 'Data Entry Skills',
                'course_sub_category_id' => 86,
                'slug' => 'data-entry-skills',
                'created_at' => '2021-06-20 18:23:14',
                'updated_at' => '2021-06-20 18:23:14',
            ),
            114 => 
            array (
                'id' => 616,
                'name' => 'Canva',
                'course_sub_category_id' => 86,
                'slug' => 'canva-2',
                'created_at' => '2021-06-20 18:23:34',
                'updated_at' => '2021-06-20 18:23:34',
            ),
            115 => 
            array (
                'id' => 617,
                'name' => 'Online Business',
                'course_sub_category_id' => 86,
                'slug' => 'online-business-2',
                'created_at' => '2021-06-20 18:23:51',
                'updated_at' => '2021-06-20 18:23:51',
            ),
            116 => 
            array (
                'id' => 618,
                'name' => 'Horsemanship',
                'course_sub_category_id' => 86,
                'slug' => 'horsemanship',
                'created_at' => '2021-06-20 18:24:08',
                'updated_at' => '2021-06-20 18:24:08',
            ),
            117 => 
            array (
                'id' => 619,
                'name' => 'Math',
                'course_sub_category_id' => 86,
                'slug' => 'math',
                'created_at' => '2021-06-20 18:24:31',
                'updated_at' => '2021-06-20 18:24:31',
            ),
            118 => 
            array (
                'id' => 620,
                'name' => 'Articulate Storyline',
                'course_sub_category_id' => 86,
                'slug' => 'articulate-storyline',
                'created_at' => '2021-06-20 18:24:46',
                'updated_at' => '2021-06-20 18:24:46',
            ),
            119 => 
            array (
                'id' => 621,
                'name' => 'Teaching English',
                'course_sub_category_id' => 86,
                'slug' => 'teaching-english',
                'created_at' => '2021-06-20 18:26:46',
                'updated_at' => '2021-06-20 18:26:46',
            ),
            120 => 
            array (
                'id' => 622,
                'name' => 'Psychology',
                'course_sub_category_id' => 87,
                'slug' => 'psychology-1',
                'created_at' => '2021-06-20 18:27:21',
                'updated_at' => '2021-06-20 18:27:21',
            ),
            121 => 
            array (
                'id' => 623,
                'name' => 'Counseling',
                'course_sub_category_id' => 87,
                'slug' => 'counseling-1',
                'created_at' => '2021-06-20 18:27:43',
                'updated_at' => '2021-06-20 18:27:43',
            ),
            122 => 
            array (
                'id' => 624,
                'name' => 'Economics',
                'course_sub_category_id' => 87,
                'slug' => 'economics',
                'created_at' => '2021-06-20 18:28:17',
                'updated_at' => '2021-06-20 18:28:17',
            ),
            123 => 
            array (
                'id' => 625,
                'name' => 'Criminology',
                'course_sub_category_id' => 87,
                'slug' => 'criminology',
                'created_at' => '2021-06-20 18:28:32',
                'updated_at' => '2021-06-20 18:28:32',
            ),
            124 => 
            array (
                'id' => 626,
                'name' => 'Psychotherapy',
                'course_sub_category_id' => 87,
                'slug' => 'psychotherapy',
                'created_at' => '2021-06-20 18:28:47',
                'updated_at' => '2021-06-20 18:28:47',
            ),
            125 => 
            array (
                'id' => 627,
            'name' => 'Dialectical Behavior Therapy (DBT)',
                'course_sub_category_id' => 87,
                'slug' => 'dialectical-behavior-therapy-dbt',
                'created_at' => '2021-06-20 18:29:08',
                'updated_at' => '2021-06-20 18:29:08',
            ),
            126 => 
            array (
                'id' => 628,
                'name' => 'Critical Thinking',
                'course_sub_category_id' => 87,
                'slug' => 'critical-thinking-1',
                'created_at' => '2021-06-20 18:29:23',
                'updated_at' => '2021-06-20 18:29:23',
            ),
            127 => 
            array (
                'id' => 629,
                'name' => 'Research Methods',
                'course_sub_category_id' => 87,
                'slug' => 'research-methods',
                'created_at' => '2021-06-20 18:29:40',
                'updated_at' => '2021-06-20 18:29:40',
            ),
            128 => 
            array (
                'id' => 630,
                'name' => 'Social Psychology',
                'course_sub_category_id' => 87,
                'slug' => 'social-psychology',
                'created_at' => '2021-06-20 18:30:05',
                'updated_at' => '2021-06-20 18:30:05',
            ),
            129 => 
            array (
                'id' => 631,
                'name' => 'English Language',
                'course_sub_category_id' => 88,
                'slug' => 'english-language',
                'created_at' => '2021-06-20 18:31:05',
                'updated_at' => '2021-06-20 18:31:05',
            ),
            130 => 
            array (
                'id' => 632,
                'name' => 'German Language',
                'course_sub_category_id' => 88,
                'slug' => 'german-language',
                'created_at' => '2021-06-20 18:31:21',
                'updated_at' => '2021-06-20 18:31:21',
            ),
            131 => 
            array (
                'id' => 633,
                'name' => 'Spanish Language',
                'course_sub_category_id' => 88,
                'slug' => 'spanish-language',
                'created_at' => '2021-06-20 18:31:38',
                'updated_at' => '2021-06-20 18:31:38',
            ),
            132 => 
            array (
                'id' => 634,
                'name' => 'Japanese Language',
                'course_sub_category_id' => 88,
                'slug' => 'japanese-language',
                'created_at' => '2021-06-20 18:33:43',
                'updated_at' => '2021-06-20 18:33:43',
            ),
            133 => 
            array (
                'id' => 635,
                'name' => 'English Grammar',
                'course_sub_category_id' => 88,
                'slug' => 'english-grammar',
                'created_at' => '2021-06-20 18:35:56',
                'updated_at' => '2021-06-20 18:35:56',
            ),
            134 => 
            array (
                'id' => 636,
                'name' => 'English Conversation',
                'course_sub_category_id' => 88,
                'slug' => 'english-conversation',
                'created_at' => '2021-06-20 18:36:11',
                'updated_at' => '2021-06-20 18:36:11',
            ),
            135 => 
            array (
                'id' => 637,
                'name' => 'French Language',
                'course_sub_category_id' => 88,
                'slug' => 'french-language-2',
                'created_at' => '2021-06-20 18:36:29',
                'updated_at' => '2021-06-20 18:36:29',
            ),
            136 => 
            array (
                'id' => 638,
                'name' => 'English Vocabulary',
                'course_sub_category_id' => 88,
                'slug' => 'english-vocabulary',
                'created_at' => '2021-06-20 18:36:46',
                'updated_at' => '2021-06-20 18:36:46',
            ),
            137 => 
            array (
                'id' => 639,
                'name' => 'Sign Language',
                'course_sub_category_id' => 88,
                'slug' => 'sign-language',
                'created_at' => '2021-06-20 18:37:02',
                'updated_at' => '2021-06-20 18:37:02',
            ),
            138 => 
            array (
                'id' => 640,
                'name' => 'Train the Trainer',
                'course_sub_category_id' => 89,
                'slug' => 'train-the-trainer',
                'created_at' => '2021-06-20 18:38:08',
                'updated_at' => '2021-06-20 18:38:08',
            ),
            139 => 
            array (
                'id' => 641,
                'name' => 'Instructional Design',
                'course_sub_category_id' => 89,
                'slug' => 'instructional-design-1',
                'created_at' => '2021-06-20 18:38:22',
                'updated_at' => '2021-06-20 18:38:22',
            ),
            140 => 
            array (
                'id' => 642,
                'name' => 'Voice-Over',
                'course_sub_category_id' => 89,
                'slug' => 'voice-over',
                'created_at' => '2021-06-20 18:39:59',
                'updated_at' => '2021-06-20 18:39:59',
            ),
            141 => 
            array (
                'id' => 643,
                'name' => 'Coaching',
                'course_sub_category_id' => 89,
                'slug' => 'coaching',
                'created_at' => '2021-06-20 18:40:14',
                'updated_at' => '2021-06-20 18:40:14',
            ),
            142 => 
            array (
                'id' => 644,
                'name' => 'Early Childhood Education',
                'course_sub_category_id' => 89,
                'slug' => 'early-childhood-education-1',
                'created_at' => '2021-06-20 18:40:26',
                'updated_at' => '2021-06-20 18:40:26',
            ),
            143 => 
            array (
                'id' => 645,
                'name' => 'Personal Development',
                'course_sub_category_id' => 89,
                'slug' => 'personal-development-2',
                'created_at' => '2021-06-20 18:40:51',
                'updated_at' => '2021-06-20 18:40:51',
            ),
            144 => 
            array (
                'id' => 646,
                'name' => 'Moodle',
                'course_sub_category_id' => 89,
                'slug' => 'moodle',
                'created_at' => '2021-06-20 18:42:18',
                'updated_at' => '2021-06-20 18:42:18',
            ),
            145 => 
            array (
                'id' => 647,
                'name' => 'ESL',
                'course_sub_category_id' => 89,
                'slug' => 'esl',
                'created_at' => '2021-06-20 18:42:33',
                'updated_at' => '2021-06-20 18:42:33',
            ),
            146 => 
            array (
                'id' => 648,
                'name' => 'IELTS',
                'course_sub_category_id' => 90,
                'slug' => 'ielts',
                'created_at' => '2021-06-20 18:53:26',
                'updated_at' => '2021-06-20 18:53:26',
            ),
            147 => 
            array (
                'id' => 649,
                'name' => 'PMP',
                'course_sub_category_id' => 90,
                'slug' => 'pmp-1',
                'created_at' => '2021-06-20 18:53:41',
                'updated_at' => '2021-06-20 18:53:41',
            ),
            148 => 
            array (
                'id' => 650,
                'name' => 'Microsoft Certification',
                'course_sub_category_id' => 90,
                'slug' => 'microsoft-certification-1',
                'created_at' => '2021-06-20 18:54:05',
                'updated_at' => '2021-06-20 18:54:05',
            ),
            149 => 
            array (
                'id' => 651,
                'name' => 'Microsoft AZ-104',
                'course_sub_category_id' => 90,
                'slug' => 'microsoft-az-104',
                'created_at' => '2021-06-20 18:54:19',
                'updated_at' => '2021-06-20 18:54:19',
            ),
            150 => 
            array (
                'id' => 652,
                'name' => 'TOEFL',
                'course_sub_category_id' => 90,
                'slug' => 'toefl',
                'created_at' => '2021-06-20 18:54:31',
                'updated_at' => '2021-06-20 18:54:31',
            ),
            151 => 
            array (
                'id' => 653,
                'name' => 'PMBOK',
                'course_sub_category_id' => 90,
                'slug' => 'pmbok-1',
                'created_at' => '2021-06-20 18:54:45',
                'updated_at' => '2021-06-20 18:54:45',
            ),
            152 => 
            array (
                'id' => 654,
                'name' => 'Math',
                'course_sub_category_id' => 90,
                'slug' => 'math-1',
                'created_at' => '2021-06-20 18:54:59',
                'updated_at' => '2021-06-20 18:54:59',
            ),
            153 => 
            array (
                'id' => 655,
                'name' => 'Bookkeeping',
                'course_sub_category_id' => 90,
                'slug' => 'bookkeeping-1',
                'created_at' => '2021-06-20 18:55:16',
                'updated_at' => '2021-06-20 18:55:16',
            ),
            154 => 
            array (
                'id' => 656,
                'name' => 'GMAT',
                'course_sub_category_id' => 90,
                'slug' => 'gmat',
                'created_at' => '2021-06-20 18:55:31',
                'updated_at' => '2021-06-20 18:55:31',
            ),
            155 => 
            array (
                'id' => 657,
                'name' => 'Proofreading',
                'course_sub_category_id' => 91,
                'slug' => 'proofreading',
                'created_at' => '2021-06-20 18:56:19',
                'updated_at' => '2021-06-20 18:56:19',
            ),
            156 => 
            array (
                'id' => 658,
                'name' => 'Teaching Online',
                'course_sub_category_id' => 91,
                'slug' => 'teaching-online-1',
                'created_at' => '2021-06-20 18:56:44',
                'updated_at' => '2021-06-20 18:56:44',
            ),
            157 => 
            array (
                'id' => 659,
                'name' => 'Research Methods',
                'course_sub_category_id' => 91,
                'slug' => 'research-methods-1',
                'created_at' => '2021-06-20 18:56:58',
                'updated_at' => '2021-06-20 18:56:58',
            ),
            158 => 
            array (
                'id' => 660,
                'name' => 'Technical Analysis',
                'course_sub_category_id' => 91,
                'slug' => 'technical-analysis-2',
                'created_at' => '2021-06-20 18:57:12',
                'updated_at' => '2021-06-20 18:57:12',
            ),
            159 => 
            array (
                'id' => 661,
                'name' => 'Academic Writing',
                'course_sub_category_id' => 91,
                'slug' => 'academic-writing',
                'created_at' => '2021-06-20 18:57:28',
                'updated_at' => '2021-06-20 18:57:28',
            ),
            160 => 
            array (
                'id' => 662,
                'name' => 'NVivo',
                'course_sub_category_id' => 91,
                'slug' => 'nvivo',
                'created_at' => '2021-06-20 18:57:40',
                'updated_at' => '2021-06-20 18:57:40',
            ),
            161 => 
            array (
                'id' => 663,
                'name' => 'Early Childhood Education',
                'course_sub_category_id' => 91,
                'slug' => 'early-childhood-education-2',
                'created_at' => '2021-06-20 18:58:07',
                'updated_at' => '2021-06-20 18:58:07',
            ),
            162 => 
            array (
                'id' => 664,
                'name' => 'Punctuation',
                'course_sub_category_id' => 91,
                'slug' => 'punctuation',
                'created_at' => '2021-06-20 18:59:53',
                'updated_at' => '2021-06-20 18:59:53',
            ),
            163 => 
            array (
                'id' => 665,
            'name' => 'Design of Experiments (DOE)',
                'course_sub_category_id' => 91,
                'slug' => 'design-of-experiments-doe',
                'created_at' => '2021-06-20 19:00:10',
                'updated_at' => '2021-06-20 19:00:10',
            ),
            164 => 
            array (
                'id' => 666,
                'name' => 'Photography',
                'course_sub_category_id' => 92,
                'slug' => 'photography',
                'created_at' => '2021-06-20 19:06:43',
                'updated_at' => '2021-06-20 19:06:43',
            ),
            165 => 
            array (
                'id' => 667,
                'name' => 'iPhone Photography',
                'course_sub_category_id' => 92,
                'slug' => 'iphone-photography',
                'created_at' => '2021-06-20 19:07:07',
                'updated_at' => '2021-06-20 19:07:07',
            ),
            166 => 
            array (
                'id' => 668,
                'name' => 'DSLR',
                'course_sub_category_id' => 92,
                'slug' => 'dslr',
                'created_at' => '2021-06-20 19:07:22',
                'updated_at' => '2021-06-20 19:07:22',
            ),
            167 => 
            array (
                'id' => 669,
                'name' => 'Adobe Lightroom',
                'course_sub_category_id' => 92,
                'slug' => 'adobe-lightroom',
                'created_at' => '2021-06-20 19:07:36',
                'updated_at' => '2021-06-20 19:07:36',
            ),
            168 => 
            array (
                'id' => 670,
                'name' => 'Mobile Photography',
                'course_sub_category_id' => 92,
                'slug' => 'mobile-photography',
                'created_at' => '2021-06-20 19:07:51',
                'updated_at' => '2021-06-20 19:07:51',
            ),
            169 => 
            array (
                'id' => 671,
                'name' => 'Digital Photography',
                'course_sub_category_id' => 92,
                'slug' => 'digital-photography',
                'created_at' => '2021-06-20 19:08:14',
                'updated_at' => '2021-06-20 19:08:14',
            ),
            170 => 
            array (
                'id' => 672,
                'name' => 'Photoshop',
                'course_sub_category_id' => 92,
                'slug' => 'photoshop-3',
                'created_at' => '2021-06-20 20:01:22',
                'updated_at' => '2021-06-20 20:01:22',
            ),
            171 => 
            array (
                'id' => 673,
                'name' => 'GIMP',
                'course_sub_category_id' => 92,
                'slug' => 'gimp',
                'created_at' => '2021-06-20 20:01:45',
                'updated_at' => '2021-06-20 20:01:45',
            ),
            172 => 
            array (
                'id' => 674,
                'name' => 'Affinity Photo',
                'course_sub_category_id' => 92,
                'slug' => 'affinity-photo',
                'created_at' => '2021-06-20 20:03:49',
                'updated_at' => '2021-06-20 20:03:49',
            ),
            173 => 
            array (
                'id' => 675,
                'name' => 'Affinity Photo',
                'course_sub_category_id' => 96,
                'slug' => 'affinity-photo-1',
                'created_at' => '2021-06-20 20:04:25',
                'updated_at' => '2021-06-20 20:04:25',
            ),
            174 => 
            array (
                'id' => 676,
                'name' => 'Digital Photography',
                'course_sub_category_id' => 96,
                'slug' => 'digital-photography-1',
                'created_at' => '2021-06-20 20:04:42',
                'updated_at' => '2021-06-20 20:04:42',
            ),
            175 => 
            array (
                'id' => 677,
                'name' => 'Photography Composition',
                'course_sub_category_id' => 96,
                'slug' => 'photography-composition',
                'created_at' => '2021-06-20 20:04:58',
                'updated_at' => '2021-06-20 20:04:58',
            ),
            176 => 
            array (
                'id' => 678,
                'name' => 'Food Photography',
                'course_sub_category_id' => 96,
                'slug' => 'food-photography',
                'created_at' => '2021-06-20 20:05:13',
                'updated_at' => '2021-06-20 20:05:13',
            ),
            177 => 
            array (
                'id' => 679,
                'name' => 'DSLR',
                'course_sub_category_id' => 96,
                'slug' => 'dslr-1',
                'created_at' => '2021-06-20 20:05:29',
                'updated_at' => '2021-06-20 20:05:29',
            ),
            178 => 
            array (
                'id' => 680,
                'name' => 'Mobile Photography',
                'course_sub_category_id' => 96,
                'slug' => 'mobile-photography-1',
                'created_at' => '2021-06-20 20:05:45',
                'updated_at' => '2021-06-20 20:05:45',
            ),
            179 => 
            array (
                'id' => 681,
                'name' => 'Landscape Photography',
                'course_sub_category_id' => 96,
                'slug' => 'landscape-photography',
                'created_at' => '2021-06-20 20:07:48',
                'updated_at' => '2021-06-20 20:07:48',
            ),
            180 => 
            array (
                'id' => 682,
                'name' => 'Photography Lighting',
                'course_sub_category_id' => 96,
                'slug' => 'photography-lighting',
                'created_at' => '2021-06-20 20:08:03',
                'updated_at' => '2021-06-20 20:08:03',
            ),
            181 => 
            array (
                'id' => 683,
                'name' => 'Posing',
                'course_sub_category_id' => 93,
                'slug' => 'posing',
                'created_at' => '2021-06-20 20:08:41',
                'updated_at' => '2021-06-20 20:08:41',
            ),
            182 => 
            array (
                'id' => 684,
                'name' => 'Photography Business',
                'course_sub_category_id' => 93,
                'slug' => 'photography-business',
                'created_at' => '2021-06-20 20:09:08',
                'updated_at' => '2021-06-20 20:09:08',
            ),
            183 => 
            array (
                'id' => 685,
                'name' => 'Photography',
                'course_sub_category_id' => 93,
                'slug' => 'photography-1',
                'created_at' => '2021-06-20 20:09:25',
                'updated_at' => '2021-06-20 20:09:25',
            ),
            184 => 
            array (
                'id' => 686,
                'name' => 'Photoshop Retouching',
                'course_sub_category_id' => 93,
                'slug' => 'photoshop-retouching',
                'created_at' => '2021-06-20 20:09:40',
                'updated_at' => '2021-06-20 20:09:40',
            ),
            185 => 
            array (
                'id' => 687,
                'name' => 'Photography Lighting',
                'course_sub_category_id' => 93,
                'slug' => 'photography-lighting-1',
                'created_at' => '2021-06-20 20:09:56',
                'updated_at' => '2021-06-20 20:09:56',
            ),
            186 => 
            array (
                'id' => 688,
                'name' => 'Family Portrait Photography',
                'course_sub_category_id' => 93,
                'slug' => 'family-portrait-photography',
                'created_at' => '2021-06-20 20:10:13',
                'updated_at' => '2021-06-20 20:10:13',
            ),
            187 => 
            array (
                'id' => 689,
                'name' => 'Photoshop',
                'course_sub_category_id' => 93,
                'slug' => 'photoshop-4',
                'created_at' => '2021-06-20 20:10:31',
                'updated_at' => '2021-06-20 20:10:31',
            ),
            188 => 
            array (
                'id' => 690,
                'name' => 'Flash Photography',
                'course_sub_category_id' => 93,
                'slug' => 'flash-photography',
                'created_at' => '2021-06-20 20:10:45',
                'updated_at' => '2021-06-20 20:10:45',
            ),
            189 => 
            array (
                'id' => 691,
                'name' => 'Adobe Lightroom',
                'course_sub_category_id' => 94,
                'slug' => 'adobe-lightroom-1',
                'created_at' => '2021-06-20 20:11:37',
                'updated_at' => '2021-06-20 20:11:37',
            ),
            190 => 
            array (
                'id' => 692,
                'name' => 'Photoshop',
                'course_sub_category_id' => 94,
                'slug' => 'photoshop-5',
                'created_at' => '2021-06-20 20:11:53',
                'updated_at' => '2021-06-20 20:11:53',
            ),
            191 => 
            array (
                'id' => 693,
                'name' => 'Affinity Photo',
                'course_sub_category_id' => 94,
                'slug' => 'affinity-photo-2',
                'created_at' => '2021-06-20 20:12:11',
                'updated_at' => '2021-06-20 20:12:11',
            ),
            192 => 
            array (
                'id' => 694,
                'name' => 'Image Editing',
                'course_sub_category_id' => 94,
                'slug' => 'image-editing',
                'created_at' => '2021-06-20 20:12:27',
                'updated_at' => '2021-06-20 20:12:27',
            ),
            193 => 
            array (
                'id' => 695,
                'name' => 'Photoshop Retouching',
                'course_sub_category_id' => 94,
                'slug' => 'photoshop-retouching-1',
                'created_at' => '2021-06-20 20:12:45',
                'updated_at' => '2021-06-20 20:12:45',
            ),
            194 => 
            array (
                'id' => 696,
                'name' => 'Drone Photography',
                'course_sub_category_id' => 94,
                'slug' => 'drone-photography',
                'created_at' => '2021-06-20 20:13:03',
                'updated_at' => '2021-06-20 20:13:03',
            ),
            195 => 
            array (
                'id' => 697,
                'name' => 'Cameras',
                'course_sub_category_id' => 94,
                'slug' => 'cameras',
                'created_at' => '2021-06-20 20:13:18',
                'updated_at' => '2021-06-20 20:13:18',
            ),
            196 => 
            array (
                'id' => 698,
                'name' => 'Photography',
                'course_sub_category_id' => 94,
                'slug' => 'photography-2',
                'created_at' => '2021-06-20 20:13:36',
                'updated_at' => '2021-06-20 20:13:36',
            ),
            197 => 
            array (
                'id' => 699,
                'name' => 'DSLR',
                'course_sub_category_id' => 94,
                'slug' => 'dslr-2',
                'created_at' => '2021-06-20 20:13:53',
                'updated_at' => '2021-06-20 20:13:53',
            ),
            198 => 
            array (
                'id' => 700,
                'name' => 'Real Estate Photography',
                'course_sub_category_id' => 95,
                'slug' => 'real-estate-photography',
                'created_at' => '2021-06-20 20:14:18',
                'updated_at' => '2021-06-20 20:14:18',
            ),
            199 => 
            array (
                'id' => 701,
                'name' => 'Product Photography',
                'course_sub_category_id' => 95,
                'slug' => 'product-photography',
                'created_at' => '2021-06-20 20:14:34',
                'updated_at' => '2021-06-20 20:14:34',
            ),
            200 => 
            array (
                'id' => 702,
                'name' => 'Architecture Photography',
                'course_sub_category_id' => 95,
                'slug' => 'architecture-photography',
                'created_at' => '2021-06-20 20:14:52',
                'updated_at' => '2021-06-20 20:14:52',
            ),
            201 => 
            array (
                'id' => 703,
                'name' => 'Food Photography',
                'course_sub_category_id' => 95,
                'slug' => 'food-photography-1',
                'created_at' => '2021-06-20 20:15:08',
                'updated_at' => '2021-06-20 20:15:08',
            ),
            202 => 
            array (
                'id' => 704,
                'name' => 'Photography Business',
                'course_sub_category_id' => 95,
                'slug' => 'photography-business-1',
                'created_at' => '2021-06-20 20:15:28',
                'updated_at' => '2021-06-20 20:15:28',
            ),
            203 => 
            array (
                'id' => 705,
                'name' => 'Wedding Photography',
                'course_sub_category_id' => 95,
                'slug' => 'wedding-photography',
                'created_at' => '2021-06-20 20:15:44',
                'updated_at' => '2021-06-20 20:15:44',
            ),
            204 => 
            array (
                'id' => 706,
                'name' => 'Photography',
                'course_sub_category_id' => 95,
                'slug' => 'photography-3',
                'created_at' => '2021-06-20 20:16:01',
                'updated_at' => '2021-06-20 20:16:01',
            ),
            205 => 
            array (
                'id' => 707,
                'name' => 'Marketing Strategy',
                'course_sub_category_id' => 95,
                'slug' => 'marketing-strategy-4',
                'created_at' => '2021-06-20 20:16:25',
                'updated_at' => '2021-06-20 20:16:25',
            ),
            206 => 
            array (
                'id' => 708,
                'name' => 'Photoshop',
                'course_sub_category_id' => 95,
                'slug' => 'photoshop-6',
                'created_at' => '2021-06-20 20:16:40',
                'updated_at' => '2021-06-20 20:16:40',
            ),
            207 => 
            array (
                'id' => 709,
                'name' => 'Video Editing',
                'course_sub_category_id' => 98,
                'slug' => 'video-editing',
                'created_at' => '2021-06-20 20:16:59',
                'updated_at' => '2021-06-20 20:16:59',
            ),
            208 => 
            array (
                'id' => 710,
                'name' => 'Adobe Premiere',
                'course_sub_category_id' => 98,
                'slug' => 'adobe-premiere-1',
                'created_at' => '2021-06-20 20:17:18',
                'updated_at' => '2021-06-20 20:17:18',
            ),
            209 => 
            array (
                'id' => 711,
                'name' => 'Video Production',
                'course_sub_category_id' => 98,
                'slug' => 'video-production',
                'created_at' => '2021-06-20 20:17:34',
                'updated_at' => '2021-06-20 20:17:34',
            ),
            210 => 
            array (
                'id' => 712,
                'name' => 'DaVinci Resolve',
                'course_sub_category_id' => 98,
                'slug' => 'davinci-resolve',
                'created_at' => '2021-06-20 20:17:47',
                'updated_at' => '2021-06-20 20:17:47',
            ),
            211 => 
            array (
                'id' => 713,
                'name' => 'Filmmaking',
                'course_sub_category_id' => 98,
                'slug' => 'filmmaking',
                'created_at' => '2021-06-20 20:18:02',
                'updated_at' => '2021-06-20 20:18:02',
            ),
            212 => 
            array (
                'id' => 714,
                'name' => 'Color Grading',
                'course_sub_category_id' => 98,
                'slug' => 'color-grading',
                'created_at' => '2021-06-20 20:18:17',
                'updated_at' => '2021-06-20 20:18:17',
            ),
            213 => 
            array (
                'id' => 715,
                'name' => 'Cinematography',
                'course_sub_category_id' => 98,
                'slug' => 'cinematography',
                'created_at' => '2021-06-20 20:18:31',
                'updated_at' => '2021-06-20 20:18:31',
            ),
            214 => 
            array (
                'id' => 716,
                'name' => 'Final Cut Pro',
                'course_sub_category_id' => 98,
                'slug' => 'final-cut-pro',
                'created_at' => '2021-06-20 20:18:46',
                'updated_at' => '2021-06-20 20:18:46',
            ),
            215 => 
            array (
                'id' => 717,
                'name' => 'Videography',
                'course_sub_category_id' => 98,
                'slug' => 'videography',
                'created_at' => '2021-06-20 20:19:04',
                'updated_at' => '2021-06-20 20:19:04',
            ),
            216 => 
            array (
                'id' => 718,
                'name' => 'Photography',
                'course_sub_category_id' => 97,
                'slug' => 'photography-4',
                'created_at' => '2021-06-20 20:19:36',
                'updated_at' => '2021-06-20 20:19:36',
            ),
            217 => 
            array (
                'id' => 719,
                'name' => 'Drone Photography',
                'course_sub_category_id' => 97,
                'slug' => 'drone-photography-1',
                'created_at' => '2021-06-20 20:20:30',
                'updated_at' => '2021-06-20 20:20:30',
            ),
            218 => 
            array (
                'id' => 720,
                'name' => 'Landscape Photography',
                'course_sub_category_id' => 97,
                'slug' => 'landscape-photography-1',
                'created_at' => '2021-06-20 20:23:50',
                'updated_at' => '2021-06-20 20:23:50',
            ),
            219 => 
            array (
                'id' => 721,
                'name' => 'Video Editing',
                'course_sub_category_id' => 97,
                'slug' => 'video-editing-1',
                'created_at' => '2021-06-20 20:24:13',
                'updated_at' => '2021-06-20 20:24:13',
            ),
            220 => 
            array (
                'id' => 722,
                'name' => 'Drone',
                'course_sub_category_id' => 97,
                'slug' => 'drone',
                'created_at' => '2021-06-20 20:24:37',
                'updated_at' => '2021-06-20 20:24:37',
            ),
            221 => 
            array (
                'id' => 723,
                'name' => 'Nature Photography',
                'course_sub_category_id' => 97,
                'slug' => 'nature-photography',
                'created_at' => '2021-06-20 20:25:18',
                'updated_at' => '2021-06-20 20:25:18',
            ),
            222 => 
            array (
                'id' => 724,
                'name' => '3D Modeling',
                'course_sub_category_id' => 97,
                'slug' => '3d-modeling-1',
                'created_at' => '2021-06-20 20:25:40',
                'updated_at' => '2021-06-20 20:25:40',
            ),
            223 => 
            array (
                'id' => 725,
                'name' => 'Color Grading',
                'course_sub_category_id' => 97,
                'slug' => 'color-grading-1',
                'created_at' => '2021-06-20 20:26:03',
                'updated_at' => '2021-06-20 20:26:03',
            ),
            224 => 
            array (
                'id' => 726,
                'name' => 'Filmmaking',
                'course_sub_category_id' => 97,
                'slug' => 'filmmaking-1',
                'created_at' => '2021-06-20 20:26:28',
                'updated_at' => '2021-06-20 20:26:28',
            ),
            225 => 
            array (
                'id' => 727,
                'name' => 'Pilates',
                'course_sub_category_id' => 99,
                'slug' => 'pilates',
                'created_at' => '2021-06-20 20:27:42',
                'updated_at' => '2021-06-20 20:27:42',
            ),
            226 => 
            array (
                'id' => 728,
                'name' => 'Home Workout',
                'course_sub_category_id' => 99,
                'slug' => 'home-workout',
                'created_at' => '2021-06-20 20:28:06',
                'updated_at' => '2021-06-20 20:28:06',
            ),
            227 => 
            array (
                'id' => 729,
                'name' => 'Teacher Training',
                'course_sub_category_id' => 99,
                'slug' => 'teacher-training',
                'created_at' => '2021-06-20 20:28:43',
                'updated_at' => '2021-06-20 20:28:43',
            ),
            228 => 
            array (
                'id' => 730,
                'name' => 'Muscle Building',
                'course_sub_category_id' => 99,
                'slug' => 'muscle-building',
                'created_at' => '2021-06-20 20:29:05',
                'updated_at' => '2021-06-20 20:29:05',
            ),
            229 => 
            array (
                'id' => 731,
                'name' => 'Beauty',
                'course_sub_category_id' => 99,
                'slug' => 'beauty',
                'created_at' => '2021-06-20 20:29:28',
                'updated_at' => '2021-06-20 20:29:28',
            ),
            230 => 
            array (
                'id' => 732,
                'name' => 'Testosterone',
                'course_sub_category_id' => 99,
                'slug' => 'testosterone',
                'created_at' => '2021-06-20 20:29:57',
                'updated_at' => '2021-06-20 20:29:57',
            ),
            231 => 
            array (
                'id' => 733,
                'name' => 'Stretching Exercise',
                'course_sub_category_id' => 99,
                'slug' => 'stretching-exercise',
                'created_at' => '2021-06-20 20:30:59',
                'updated_at' => '2021-06-20 20:30:59',
            ),
            232 => 
            array (
                'id' => 734,
                'name' => 'Posture',
                'course_sub_category_id' => 99,
                'slug' => 'posture',
                'created_at' => '2021-06-20 20:31:24',
                'updated_at' => '2021-06-20 20:31:24',
            ),
            233 => 
            array (
                'id' => 735,
                'name' => 'Herbalism',
                'course_sub_category_id' => 100,
                'slug' => 'herbalism',
                'created_at' => '2021-06-20 20:31:51',
                'updated_at' => '2021-06-20 20:31:51',
            ),
            234 => 
            array (
                'id' => 736,
                'name' => 'Massage',
                'course_sub_category_id' => 100,
                'slug' => 'massage',
                'created_at' => '2021-06-20 20:32:17',
                'updated_at' => '2021-06-20 20:32:17',
            ),
            235 => 
            array (
                'id' => 737,
                'name' => 'Holistic Medicine',
                'course_sub_category_id' => 100,
                'slug' => 'holistic-medicine',
                'created_at' => '2021-06-20 20:32:40',
                'updated_at' => '2021-06-20 20:32:40',
            ),
            236 => 
            array (
                'id' => 738,
                'name' => 'Aromatherapy',
                'course_sub_category_id' => 100,
                'slug' => 'aromatherapy',
                'created_at' => '2021-06-20 20:33:11',
                'updated_at' => '2021-06-20 20:33:11',
            ),
            237 => 
            array (
                'id' => 739,
                'name' => 'Natural Medicine',
                'course_sub_category_id' => 100,
                'slug' => 'natural-medicine',
                'created_at' => '2021-06-20 20:34:01',
                'updated_at' => '2021-06-20 20:34:01',
            ),
            238 => 
            array (
                'id' => 740,
                'name' => 'Acupressure',
                'course_sub_category_id' => 100,
                'slug' => 'acupressure',
                'created_at' => '2021-06-20 20:34:25',
                'updated_at' => '2021-06-20 20:34:25',
            ),
            239 => 
            array (
                'id' => 741,
                'name' => 'Health',
                'course_sub_category_id' => 100,
                'slug' => 'health',
                'created_at' => '2021-06-20 20:34:51',
                'updated_at' => '2021-06-20 20:34:51',
            ),
            240 => 
            array (
                'id' => 742,
                'name' => 'Reflexology',
                'course_sub_category_id' => 100,
                'slug' => 'reflexology',
                'created_at' => '2021-06-20 20:35:16',
                'updated_at' => '2021-06-20 20:35:16',
            ),
            241 => 
            array (
                'id' => 743,
                'name' => 'Cupping Therapy',
                'course_sub_category_id' => 100,
                'slug' => 'cupping-therapy',
                'created_at' => '2021-06-20 20:35:47',
                'updated_at' => '2021-06-20 20:35:47',
            ),
            242 => 
            array (
                'id' => 744,
                'name' => 'Soccer',
                'course_sub_category_id' => 101,
                'slug' => 'soccer',
                'created_at' => '2021-06-20 20:36:14',
                'updated_at' => '2021-06-20 20:36:14',
            ),
            243 => 
            array (
                'id' => 745,
                'name' => 'Sport Psychology',
                'course_sub_category_id' => 101,
                'slug' => 'sport-psychology',
                'created_at' => '2021-06-20 20:36:37',
                'updated_at' => '2021-06-20 20:36:37',
            ),
            244 => 
            array (
                'id' => 746,
                'name' => 'Tennis',
                'course_sub_category_id' => 101,
                'slug' => 'tennis',
                'created_at' => '2021-06-20 20:37:00',
                'updated_at' => '2021-06-20 20:37:00',
            ),
            245 => 
            array (
                'id' => 747,
                'name' => 'Sports Coaching',
                'course_sub_category_id' => 101,
                'slug' => 'sports-coaching',
                'created_at' => '2021-06-20 20:37:27',
                'updated_at' => '2021-06-20 20:37:27',
            ),
            246 => 
            array (
                'id' => 748,
                'name' => 'Martial Arts',
                'course_sub_category_id' => 101,
                'slug' => 'martial-arts',
                'created_at' => '2021-06-20 20:37:51',
                'updated_at' => '2021-06-20 20:37:51',
            ),
            247 => 
            array (
                'id' => 749,
                'name' => 'Swimming',
                'course_sub_category_id' => 101,
                'slug' => 'swimming',
                'created_at' => '2021-06-20 20:38:21',
                'updated_at' => '2021-06-20 20:38:21',
            ),
            248 => 
            array (
                'id' => 750,
                'name' => 'Boxing',
                'course_sub_category_id' => 101,
                'slug' => 'boxing',
                'created_at' => '2021-06-20 20:38:45',
                'updated_at' => '2021-06-20 20:38:45',
            ),
            249 => 
            array (
                'id' => 751,
                'name' => 'Sports Massage',
                'course_sub_category_id' => 101,
                'slug' => 'sports-massage',
                'created_at' => '2021-06-20 20:39:08',
                'updated_at' => '2021-06-20 20:39:08',
            ),
            250 => 
            array (
                'id' => 752,
                'name' => 'Golf',
                'course_sub_category_id' => 101,
                'slug' => 'golf',
                'created_at' => '2021-06-20 20:39:30',
                'updated_at' => '2021-06-20 20:39:30',
            ),
            251 => 
            array (
                'id' => 753,
                'name' => 'Health Coaching',
                'course_sub_category_id' => 102,
                'slug' => 'health-coaching',
                'created_at' => '2021-06-20 20:39:59',
                'updated_at' => '2021-06-20 20:39:59',
            ),
            252 => 
            array (
                'id' => 754,
                'name' => 'Dieting',
                'course_sub_category_id' => 102,
                'slug' => 'dieting',
                'created_at' => '2021-06-20 20:40:22',
                'updated_at' => '2021-06-20 20:40:22',
            ),
            253 => 
            array (
                'id' => 755,
                'name' => 'Sports Nutrition',
                'course_sub_category_id' => 102,
                'slug' => 'sports-nutrition',
                'created_at' => '2021-06-20 20:40:46',
                'updated_at' => '2021-06-20 20:40:46',
            ),
            254 => 
            array (
                'id' => 756,
                'name' => 'Vegan Cooking',
                'course_sub_category_id' => 102,
                'slug' => 'vegan-cooking',
                'created_at' => '2021-06-20 20:41:09',
                'updated_at' => '2021-06-20 20:41:09',
            ),
            255 => 
            array (
                'id' => 757,
                'name' => 'Ketogenic Diet',
                'course_sub_category_id' => 102,
                'slug' => 'ketogenic-diet',
                'created_at' => '2021-06-20 20:41:39',
                'updated_at' => '2021-06-20 20:41:39',
            ),
            256 => 
            array (
                'id' => 758,
                'name' => 'Gut Health',
                'course_sub_category_id' => 102,
                'slug' => 'gut-health',
                'created_at' => '2021-06-20 20:43:00',
                'updated_at' => '2021-06-20 20:43:00',
            ),
            257 => 
            array (
                'id' => 759,
                'name' => 'Weight Loss',
                'course_sub_category_id' => 102,
                'slug' => 'weight-loss',
                'created_at' => '2021-06-20 20:43:28',
                'updated_at' => '2021-06-20 20:43:28',
            ),
            258 => 
            array (
                'id' => 760,
                'name' => 'Meal Planning',
                'course_sub_category_id' => 102,
                'slug' => 'meal-planning',
                'created_at' => '2021-06-20 20:43:53',
                'updated_at' => '2021-06-20 20:43:53',
            ),
            259 => 
            array (
                'id' => 761,
                'name' => 'Yoga for Kids',
                'course_sub_category_id' => 103,
                'slug' => 'yoga-for-kids',
                'created_at' => '2021-06-20 20:44:21',
                'updated_at' => '2021-06-20 20:44:21',
            ),
            260 => 
            array (
                'id' => 762,
                'name' => 'Pranayama',
                'course_sub_category_id' => 103,
                'slug' => 'pranayama',
                'created_at' => '2021-06-20 20:44:43',
                'updated_at' => '2021-06-20 20:44:43',
            ),
            261 => 
            array (
                'id' => 763,
                'name' => 'Face Yoga',
                'course_sub_category_id' => 103,
                'slug' => 'face-yoga',
                'created_at' => '2021-06-20 20:45:05',
                'updated_at' => '2021-06-20 20:45:05',
            ),
            262 => 
            array (
                'id' => 764,
                'name' => 'Chair Yoga',
                'course_sub_category_id' => 103,
                'slug' => 'chair-yoga',
                'created_at' => '2021-06-20 20:45:27',
                'updated_at' => '2021-06-20 20:45:27',
            ),
            263 => 
            array (
                'id' => 765,
                'name' => 'Teacher Training',
                'course_sub_category_id' => 103,
                'slug' => 'teacher-training-1',
                'created_at' => '2021-06-20 20:45:56',
                'updated_at' => '2021-06-20 20:45:56',
            ),
            264 => 
            array (
                'id' => 766,
                'name' => 'Kundalini',
                'course_sub_category_id' => 103,
                'slug' => 'kundalini',
                'created_at' => '2021-06-20 20:46:19',
                'updated_at' => '2021-06-20 20:46:19',
            ),
            265 => 
            array (
                'id' => 767,
                'name' => 'Meditation',
                'course_sub_category_id' => 103,
                'slug' => 'meditation-1',
                'created_at' => '2021-06-20 20:46:41',
                'updated_at' => '2021-06-20 20:46:41',
            ),
            266 => 
            array (
                'id' => 768,
                'name' => 'Anatomy',
                'course_sub_category_id' => 103,
                'slug' => 'anatomy-1',
                'created_at' => '2021-06-20 20:47:04',
                'updated_at' => '2021-06-20 20:47:04',
            ),
            267 => 
            array (
                'id' => 769,
                'name' => 'Weight Loss',
                'course_sub_category_id' => 104,
                'slug' => 'weight-loss-1',
                'created_at' => '2021-06-20 20:47:30',
                'updated_at' => '2021-06-20 20:47:30',
            ),
            268 => 
            array (
                'id' => 770,
                'name' => 'Nutrition',
                'course_sub_category_id' => 104,
                'slug' => 'nutrition',
                'created_at' => '2021-06-20 20:48:04',
                'updated_at' => '2021-06-20 20:48:04',
            ),
            269 => 
            array (
                'id' => 771,
                'name' => 'Ketogenic Diet',
                'course_sub_category_id' => 104,
                'slug' => 'ketogenic-diet-1',
                'created_at' => '2021-06-20 20:48:27',
                'updated_at' => '2021-06-20 20:48:27',
            ),
            270 => 
            array (
                'id' => 772,
                'name' => 'Ketosis',
                'course_sub_category_id' => 104,
                'slug' => 'ketosis',
                'created_at' => '2021-06-20 20:48:50',
                'updated_at' => '2021-06-20 20:48:50',
            ),
            271 => 
            array (
                'id' => 773,
                'name' => 'Fitness',
                'course_sub_category_id' => 104,
                'slug' => 'fitness',
                'created_at' => '2021-06-20 20:49:11',
                'updated_at' => '2021-06-20 20:49:11',
            ),
            272 => 
            array (
                'id' => 774,
                'name' => 'Muscle Building',
                'course_sub_category_id' => 104,
                'slug' => 'muscle-building-1',
                'created_at' => '2021-06-20 20:49:32',
                'updated_at' => '2021-06-20 20:49:32',
            ),
            273 => 
            array (
                'id' => 775,
                'name' => 'Fat Loss',
                'course_sub_category_id' => 104,
                'slug' => 'fat-loss',
                'created_at' => '2021-06-20 20:49:54',
                'updated_at' => '2021-06-20 20:49:54',
            ),
            274 => 
            array (
                'id' => 776,
                'name' => 'Massage',
                'course_sub_category_id' => 104,
                'slug' => 'massage-1',
                'created_at' => '2021-06-20 20:50:18',
                'updated_at' => '2021-06-20 20:50:18',
            ),
            275 => 
            array (
                'id' => 777,
                'name' => 'Krav Maga',
                'course_sub_category_id' => 105,
                'slug' => 'krav-maga',
                'created_at' => '2021-06-20 20:50:41',
                'updated_at' => '2021-06-20 20:50:41',
            ),
            276 => 
            array (
                'id' => 778,
                'name' => 'Self-Defense',
                'course_sub_category_id' => 105,
                'slug' => 'self-defense',
                'created_at' => '2021-06-20 20:51:07',
                'updated_at' => '2021-06-20 20:51:07',
            ),
            277 => 
            array (
                'id' => 779,
                'name' => 'Close Combat',
                'course_sub_category_id' => 105,
                'slug' => 'close-combat',
                'created_at' => '2021-06-20 20:51:29',
                'updated_at' => '2021-06-20 20:51:29',
            ),
            278 => 
            array (
                'id' => 780,
                'name' => 'Martial Arts',
                'course_sub_category_id' => 105,
                'slug' => 'martial-arts-1',
                'created_at' => '2021-06-20 20:51:51',
                'updated_at' => '2021-06-20 20:51:51',
            ),
            279 => 
            array (
                'id' => 781,
                'name' => 'Boxing',
                'course_sub_category_id' => 105,
                'slug' => 'boxing-1',
                'created_at' => '2021-06-20 20:52:14',
                'updated_at' => '2021-06-20 20:52:14',
            ),
            280 => 
            array (
                'id' => 782,
                'name' => 'Tai Chi',
                'course_sub_category_id' => 105,
                'slug' => 'tai-chi',
                'created_at' => '2021-06-20 20:52:41',
                'updated_at' => '2021-06-20 20:52:41',
            ),
            281 => 
            array (
                'id' => 783,
                'name' => 'Kung Fu',
                'course_sub_category_id' => 105,
                'slug' => 'kung-fu',
                'created_at' => '2021-06-20 20:53:08',
                'updated_at' => '2021-06-20 20:53:08',
            ),
            282 => 
            array (
                'id' => 784,
                'name' => 'Wing Chun',
                'course_sub_category_id' => 105,
                'slug' => 'wing-chun',
                'created_at' => '2021-06-20 20:53:32',
                'updated_at' => '2021-06-20 20:53:32',
            ),
            283 => 
            array (
                'id' => 785,
                'name' => 'Muay Thai',
                'course_sub_category_id' => 105,
                'slug' => 'muay-thai',
                'created_at' => '2021-06-20 20:53:58',
                'updated_at' => '2021-06-20 20:53:58',
            ),
            284 => 
            array (
                'id' => 786,
                'name' => 'First Aid',
                'course_sub_category_id' => 106,
                'slug' => 'first-aid',
                'created_at' => '2021-06-20 20:54:29',
                'updated_at' => '2021-06-20 20:54:29',
            ),
            285 => 
            array (
                'id' => 787,
                'name' => 'Workplace Health and Safety',
                'course_sub_category_id' => 106,
                'slug' => 'workplace-health-and-safety',
                'created_at' => '2021-06-20 20:54:51',
                'updated_at' => '2021-06-20 20:54:51',
            ),
            286 => 
            array (
                'id' => 788,
                'name' => 'Herbalism',
                'course_sub_category_id' => 106,
                'slug' => 'herbalism-1',
                'created_at' => '2021-06-20 20:55:14',
                'updated_at' => '2021-06-20 20:55:14',
            ),
            287 => 
            array (
                'id' => 789,
                'name' => 'Health',
                'course_sub_category_id' => 106,
                'slug' => 'health-1',
                'created_at' => '2021-06-20 20:55:39',
                'updated_at' => '2021-06-20 20:55:39',
            ),
            288 => 
            array (
                'id' => 790,
                'name' => 'Nursing',
                'course_sub_category_id' => 106,
                'slug' => 'nursing',
                'created_at' => '2021-06-20 20:56:05',
                'updated_at' => '2021-06-20 20:56:05',
            ),
            289 => 
            array (
                'id' => 791,
                'name' => 'Health Coaching',
                'course_sub_category_id' => 106,
                'slug' => 'health-coaching-1',
                'created_at' => '2021-06-20 20:56:28',
                'updated_at' => '2021-06-20 20:56:28',
            ),
            290 => 
            array (
                'id' => 792,
                'name' => 'Survival Skills',
                'course_sub_category_id' => 106,
                'slug' => 'survival-skills',
                'created_at' => '2021-06-20 20:56:51',
                'updated_at' => '2021-06-20 20:56:51',
            ),
            291 => 
            array (
                'id' => 793,
                'name' => 'OSHA',
                'course_sub_category_id' => 106,
                'slug' => 'osha',
                'created_at' => '2021-06-20 20:57:17',
                'updated_at' => '2021-06-20 20:57:17',
            ),
            292 => 
            array (
                'id' => 794,
                'name' => 'Grief Healing',
                'course_sub_category_id' => 106,
                'slug' => 'grief-healing',
                'created_at' => '2021-06-20 20:57:39',
                'updated_at' => '2021-06-20 20:57:39',
            ),
            293 => 
            array (
                'id' => 795,
                'name' => 'Belly Dancing',
                'course_sub_category_id' => 107,
                'slug' => 'belly-dancing',
                'created_at' => '2021-06-20 20:58:01',
                'updated_at' => '2021-06-20 20:58:01',
            ),
            294 => 
            array (
                'id' => 796,
                'name' => 'Salsa Dancing',
                'course_sub_category_id' => 107,
                'slug' => 'salsa-dancing',
                'created_at' => '2021-06-20 20:58:24',
                'updated_at' => '2021-06-20 20:58:24',
            ),
            295 => 
            array (
                'id' => 797,
                'name' => 'Hip Hop Dancing',
                'course_sub_category_id' => 107,
                'slug' => 'hip-hop-dancing',
                'created_at' => '2021-06-20 20:58:47',
                'updated_at' => '2021-06-20 20:58:47',
            ),
            296 => 
            array (
                'id' => 798,
                'name' => 'Tango Dance',
                'course_sub_category_id' => 107,
                'slug' => 'tango-dance',
                'created_at' => '2021-06-20 20:59:26',
                'updated_at' => '2021-06-20 20:59:26',
            ),
            297 => 
            array (
                'id' => 799,
                'name' => 'Bachata',
                'course_sub_category_id' => 107,
                'slug' => 'bachata',
                'created_at' => '2021-06-20 20:59:51',
                'updated_at' => '2021-06-20 20:59:51',
            ),
            298 => 
            array (
                'id' => 800,
                'name' => 'Poi Spinning',
                'course_sub_category_id' => 107,
                'slug' => 'poi-spinning',
                'created_at' => '2021-06-20 21:00:13',
                'updated_at' => '2021-06-20 21:00:13',
            ),
            299 => 
            array (
                'id' => 801,
                'name' => 'Ballet',
                'course_sub_category_id' => 107,
                'slug' => 'ballet',
                'created_at' => '2021-06-20 21:00:37',
                'updated_at' => '2021-06-20 21:00:37',
            ),
            300 => 
            array (
                'id' => 802,
                'name' => 'Indian Dance',
                'course_sub_category_id' => 107,
                'slug' => 'indian-dance',
                'created_at' => '2021-06-20 21:01:05',
                'updated_at' => '2021-06-20 21:01:05',
            ),
            301 => 
            array (
                'id' => 803,
                'name' => 'Sound Therapy',
                'course_sub_category_id' => 108,
                'slug' => 'sound-therapy',
                'created_at' => '2021-06-20 21:01:34',
                'updated_at' => '2021-06-20 21:01:34',
            ),
            302 => 
            array (
                'id' => 804,
                'name' => 'Mindfulness',
                'course_sub_category_id' => 108,
                'slug' => 'mindfulness-1',
                'created_at' => '2021-06-20 21:01:59',
                'updated_at' => '2021-06-20 21:01:59',
            ),
            303 => 
            array (
                'id' => 805,
                'name' => 'Addiction Recovery',
                'course_sub_category_id' => 108,
                'slug' => 'addiction-recovery',
                'created_at' => '2021-06-20 21:02:28',
                'updated_at' => '2021-06-20 21:02:28',
            ),
            304 => 
            array (
                'id' => 806,
                'name' => 'Tai Chi',
                'course_sub_category_id' => 108,
                'slug' => 'tai-chi-1',
                'created_at' => '2021-06-20 21:02:55',
                'updated_at' => '2021-06-20 21:02:55',
            ),
            305 => 
            array (
                'id' => 807,
                'name' => 'Qi Gong',
                'course_sub_category_id' => 108,
                'slug' => 'qi-gong',
                'created_at' => '2021-06-20 21:03:29',
                'updated_at' => '2021-06-20 21:03:29',
            ),
            306 => 
            array (
                'id' => 808,
                'name' => 'Stress Management',
                'course_sub_category_id' => 108,
                'slug' => 'stress-management',
                'created_at' => '2021-06-20 21:03:53',
                'updated_at' => '2021-06-20 21:03:53',
            ),
            307 => 
            array (
                'id' => 809,
                'name' => 'Reiki',
                'course_sub_category_id' => 108,
                'slug' => 'reiki',
                'created_at' => '2021-06-20 21:04:17',
                'updated_at' => '2021-06-20 21:04:17',
            ),
            308 => 
            array (
                'id' => 810,
                'name' => 'Energy Healing',
                'course_sub_category_id' => 108,
                'slug' => 'energy-healing',
                'created_at' => '2021-06-20 21:04:42',
                'updated_at' => '2021-06-20 21:04:42',
            ),
            309 => 
            array (
                'id' => 811,
                'name' => 'Massage',
                'course_sub_category_id' => 110,
                'slug' => 'massage-2',
                'created_at' => '2021-06-20 21:05:11',
                'updated_at' => '2021-06-20 21:05:11',
            ),
            310 => 
            array (
                'id' => 812,
                'name' => 'Sports Massage',
                'course_sub_category_id' => 110,
                'slug' => 'sports-massage-1',
                'created_at' => '2021-06-20 21:05:36',
                'updated_at' => '2021-06-20 21:05:36',
            ),
            311 => 
            array (
                'id' => 813,
                'name' => 'Qi Gong',
                'course_sub_category_id' => 110,
                'slug' => 'qi-gong-1',
                'created_at' => '2021-06-20 21:06:03',
                'updated_at' => '2021-06-20 21:06:03',
            ),
            312 => 
            array (
                'id' => 814,
                'name' => 'Holistic Medicine',
                'course_sub_category_id' => 110,
                'slug' => 'holistic-medicine-1',
                'created_at' => '2021-06-20 21:06:30',
                'updated_at' => '2021-06-20 21:06:30',
            ),
            313 => 
            array (
                'id' => 815,
            'name' => 'EFT (Emotional FreedomTechnique)',
                'course_sub_category_id' => 110,
                'slug' => 'eft-emotional-freedomtechnique',
                'created_at' => '2021-06-20 21:06:54',
                'updated_at' => '2021-06-20 21:06:54',
            ),
            314 => 
            array (
                'id' => 816,
                'name' => 'Skincare',
                'course_sub_category_id' => 110,
                'slug' => 'skincare',
                'created_at' => '2021-06-20 21:07:22',
                'updated_at' => '2021-06-20 21:07:22',
            ),
            315 => 
            array (
                'id' => 817,
                'name' => 'Makeup Artistry',
                'course_sub_category_id' => 110,
                'slug' => 'makeup-artistry',
                'created_at' => '2021-06-20 21:07:47',
                'updated_at' => '2021-06-20 21:07:47',
            ),
            316 => 
            array (
                'id' => 818,
                'name' => 'Facial Massage',
                'course_sub_category_id' => 110,
                'slug' => 'facial-massage',
                'created_at' => '2021-06-20 21:08:12',
                'updated_at' => '2021-06-20 21:08:12',
            ),
            317 => 
            array (
                'id' => 819,
                'name' => 'Beauty',
                'course_sub_category_id' => 110,
                'slug' => 'beauty-1',
                'created_at' => '2021-06-20 21:08:47',
                'updated_at' => '2021-06-20 21:08:47',
            ),
            318 => 
            array (
                'id' => 820,
                'name' => 'Cisco CCNA',
                'course_sub_category_id' => 36,
                'slug' => 'cisco-ccna-1',
                'created_at' => '2021-06-20 21:52:25',
                'updated_at' => '2021-06-20 21:52:25',
            ),
            319 => 
            array (
                'id' => 821,
                'name' => 'CompTIA Security+',
                'course_sub_category_id' => 36,
                'slug' => 'comptia-security-1',
                'created_at' => '2021-06-20 21:53:28',
                'updated_at' => '2021-06-20 21:53:28',
            ),
            320 => 
            array (
                'id' => 822,
                'name' => 'CompTIA Network+',
                'course_sub_category_id' => 36,
                'slug' => 'comptia-network',
                'created_at' => '2021-06-20 21:53:53',
                'updated_at' => '2021-06-20 21:53:53',
            ),
            321 => 
            array (
                'id' => 823,
                'name' => 'Kubernetes',
                'course_sub_category_id' => 36,
                'slug' => 'kubernetes-2',
                'created_at' => '2021-06-20 21:54:47',
                'updated_at' => '2021-06-20 21:54:47',
            ),
            322 => 
            array (
                'id' => 824,
                'name' => 'Python',
                'course_sub_category_id' => 39,
                'slug' => 'python-3',
                'created_at' => '2021-06-20 22:08:45',
                'updated_at' => '2021-06-20 22:08:45',
            ),
            323 => 
            array (
                'id' => 825,
                'name' => 'Kubernetes',
                'course_sub_category_id' => 39,
                'slug' => 'kubernetes-3',
                'created_at' => '2021-06-20 22:08:59',
                'updated_at' => '2021-06-20 22:08:59',
            ),
            324 => 
            array (
                'id' => 826,
                'name' => 'Docker',
                'course_sub_category_id' => 39,
                'slug' => 'docker-1',
                'created_at' => '2021-06-20 22:10:48',
                'updated_at' => '2021-06-20 22:10:48',
            ),
            325 => 
            array (
                'id' => 827,
                'name' => 'DevOps',
                'course_sub_category_id' => 39,
                'slug' => 'devops-1',
                'created_at' => '2021-06-20 22:11:21',
                'updated_at' => '2021-06-20 22:11:21',
            ),
            326 => 
            array (
                'id' => 828,
                'name' => 'Algorithms',
                'course_sub_category_id' => 39,
                'slug' => 'algorithms-1',
                'created_at' => '2021-06-20 22:11:51',
                'updated_at' => '2021-06-20 22:11:51',
            ),
            327 => 
            array (
                'id' => 829,
                'name' => 'Ansible',
                'course_sub_category_id' => 39,
                'slug' => 'ansible',
                'created_at' => '2021-06-20 22:12:30',
                'updated_at' => '2021-06-20 22:12:30',
            ),
            328 => 
            array (
                'id' => 830,
                'name' => 'React',
                'course_sub_category_id' => 39,
                'slug' => 'react-2',
                'created_at' => '2021-06-20 22:13:03',
                'updated_at' => '2021-06-20 22:13:03',
            ),
            329 => 
            array (
                'id' => 831,
                'name' => 'Java',
                'course_sub_category_id' => 39,
                'slug' => 'java-2',
                'created_at' => '2021-06-20 22:13:29',
                'updated_at' => '2021-06-20 22:13:29',
            ),
            330 => 
            array (
                'id' => 832,
                'name' => 'Software Architecture',
                'course_sub_category_id' => 39,
                'slug' => 'software-architecture',
                'created_at' => '2021-06-20 22:13:56',
                'updated_at' => '2021-06-20 22:13:56',
            ),
            331 => 
            array (
                'id' => 833,
                'name' => 'Mindfulness',
                'course_sub_category_id' => 54,
                'slug' => 'mindfulness-2',
                'created_at' => '2021-06-20 22:21:46',
                'updated_at' => '2021-06-20 22:21:46',
            ),
            332 => 
            array (
                'id' => 834,
                'name' => 'Meditation',
                'course_sub_category_id' => 54,
                'slug' => 'meditation-2',
                'created_at' => '2021-06-20 22:22:46',
                'updated_at' => '2021-06-20 22:22:46',
            ),
            333 => 
            array (
                'id' => 835,
                'name' => 'Creative Writing',
                'course_sub_category_id' => 53,
                'slug' => 'creative-writing-1',
                'created_at' => '2021-06-20 22:24:39',
                'updated_at' => '2021-06-20 22:24:39',
            ),
            334 => 
            array (
                'id' => 836,
                'name' => 'Writing',
                'course_sub_category_id' => 53,
                'slug' => 'writing-2',
                'created_at' => '2021-06-20 22:25:17',
                'updated_at' => '2021-06-20 22:25:17',
            ),
            335 => 
            array (
                'id' => 837,
                'name' => 'Screenwriting',
                'course_sub_category_id' => 53,
                'slug' => 'screenwriting-1',
                'created_at' => '2021-06-20 22:26:18',
                'updated_at' => '2021-06-20 22:26:18',
            ),
            336 => 
            array (
                'id' => 838,
                'name' => 'Art Therapy',
                'course_sub_category_id' => 53,
                'slug' => 'art-therapy',
                'created_at' => '2021-06-20 22:26:43',
                'updated_at' => '2021-06-20 22:26:43',
            ),
            337 => 
            array (
                'id' => 839,
                'name' => 'Writing a Book',
                'course_sub_category_id' => 53,
                'slug' => 'writing-a-book-1',
                'created_at' => '2021-06-20 22:27:09',
                'updated_at' => '2021-06-20 22:27:09',
            ),
            338 => 
            array (
                'id' => 840,
                'name' => 'Storytelling',
                'course_sub_category_id' => 53,
                'slug' => 'storytelling-1',
                'created_at' => '2021-06-20 22:27:34',
                'updated_at' => '2021-06-20 22:27:34',
            ),
            339 => 
            array (
                'id' => 841,
                'name' => 'Aromatherapy',
                'course_sub_category_id' => 53,
                'slug' => 'aromatherapy-1',
                'created_at' => '2021-06-20 22:28:02',
                'updated_at' => '2021-06-20 22:28:02',
            ),
            340 => 
            array (
                'id' => 842,
                'name' => 'Drawing',
                'course_sub_category_id' => 53,
                'slug' => 'drawing-3',
                'created_at' => '2021-06-20 22:28:29',
                'updated_at' => '2021-06-20 22:28:29',
            ),
            341 => 
            array (
                'id' => 843,
                'name' => 'English Literature',
                'course_sub_category_id' => 53,
                'slug' => 'english-literature-1',
                'created_at' => '2021-06-20 22:29:01',
                'updated_at' => '2021-06-20 22:29:01',
            ),
            342 => 
            array (
                'id' => 844,
                'name' => 'Spirituality',
                'course_sub_category_id' => 51,
                'slug' => 'spirituality',
                'created_at' => '2021-06-20 22:29:53',
                'updated_at' => '2021-06-20 22:29:53',
            ),
            343 => 
            array (
                'id' => 845,
                'name' => 'Mindfulness',
                'course_sub_category_id' => 51,
                'slug' => 'mindfulness-3',
                'created_at' => '2021-06-20 22:30:21',
                'updated_at' => '2021-06-20 22:30:21',
            ),
            344 => 
            array (
                'id' => 846,
                'name' => 'Life Coach Training',
                'course_sub_category_id' => 51,
                'slug' => 'life-coach-training-4',
                'created_at' => '2021-06-20 22:30:48',
                'updated_at' => '2021-06-20 22:30:48',
            ),
            345 => 
            array (
                'id' => 847,
                'name' => 'Tarot Reading',
                'course_sub_category_id' => 51,
                'slug' => 'tarot-reading',
                'created_at' => '2021-06-20 22:31:15',
                'updated_at' => '2021-06-20 22:31:15',
            ),
            346 => 
            array (
                'id' => 848,
                'name' => 'Spiritual Healing',
                'course_sub_category_id' => 51,
                'slug' => 'spiritual-healing',
                'created_at' => '2021-06-20 22:32:08',
                'updated_at' => '2021-06-20 22:32:08',
            ),
            347 => 
            array (
                'id' => 849,
                'name' => 'Numerology',
                'course_sub_category_id' => 51,
                'slug' => 'numerology',
                'created_at' => '2021-06-20 22:32:37',
                'updated_at' => '2021-06-20 22:32:37',
            ),
            348 => 
            array (
                'id' => 850,
                'name' => 'Meditation',
                'course_sub_category_id' => 51,
                'slug' => 'meditation-3',
                'created_at' => '2021-06-20 22:37:29',
                'updated_at' => '2021-06-20 22:37:29',
            ),
            349 => 
            array (
                'id' => 851,
                'name' => 'Divination',
                'course_sub_category_id' => 51,
                'slug' => 'divination',
                'created_at' => '2021-06-20 22:38:04',
                'updated_at' => '2021-06-20 22:38:04',
            ),
            350 => 
            array (
                'id' => 852,
                'name' => 'Akashic Records',
                'course_sub_category_id' => 51,
                'slug' => 'akashic-records',
                'created_at' => '2021-06-20 22:38:54',
                'updated_at' => '2021-06-20 22:38:54',
            ),
            351 => 
            array (
                'id' => 853,
                'name' => 'Reiki',
                'course_sub_category_id' => 50,
                'slug' => 'reiki-1',
                'created_at' => '2021-06-20 22:41:46',
                'updated_at' => '2021-06-20 22:41:46',
            ),
            352 => 
            array (
                'id' => 854,
                'name' => 'Energy Healing',
                'course_sub_category_id' => 50,
                'slug' => 'energy-healing-1',
                'created_at' => '2021-06-20 22:42:31',
                'updated_at' => '2021-06-20 22:42:31',
            ),
            353 => 
            array (
                'id' => 855,
                'name' => 'Tarot Reading',
                'course_sub_category_id' => 50,
                'slug' => 'tarot-reading-1',
                'created_at' => '2021-06-20 22:42:52',
                'updated_at' => '2021-06-20 22:42:52',
            ),
            354 => 
            array (
                'id' => 856,
                'name' => 'Psychic',
                'course_sub_category_id' => 50,
                'slug' => 'psychic',
                'created_at' => '2021-06-20 22:43:19',
                'updated_at' => '2021-06-20 22:43:19',
            ),
            355 => 
            array (
                'id' => 857,
                'name' => 'Hypnotherapy',
                'course_sub_category_id' => 50,
                'slug' => 'hypnotherapy',
                'created_at' => '2021-06-20 22:43:49',
                'updated_at' => '2021-06-20 22:43:49',
            ),
            356 => 
            array (
                'id' => 858,
                'name' => 'Crystal Energy',
                'course_sub_category_id' => 50,
                'slug' => 'crystal-energy',
                'created_at' => '2021-06-20 22:44:13',
                'updated_at' => '2021-06-20 22:44:13',
            ),
            357 => 
            array (
                'id' => 859,
                'name' => 'Chakra',
                'course_sub_category_id' => 50,
                'slug' => 'chakra',
                'created_at' => '2021-06-20 22:44:40',
                'updated_at' => '2021-06-20 22:44:40',
            ),
            358 => 
            array (
                'id' => 860,
                'name' => 'Shamanism',
                'course_sub_category_id' => 50,
                'slug' => 'shamanism',
                'created_at' => '2021-06-20 22:45:05',
                'updated_at' => '2021-06-20 22:45:05',
            ),
            359 => 
            array (
                'id' => 861,
                'name' => 'Spiritual Healing',
                'course_sub_category_id' => 50,
                'slug' => 'spiritual-healing-1',
                'created_at' => '2021-06-20 22:45:31',
                'updated_at' => '2021-06-20 22:45:31',
            ),
            360 => 
            array (
                'id' => 862,
                'name' => 'Life Coach Training',
                'course_sub_category_id' => 49,
                'slug' => 'life-coach-training-5',
                'created_at' => '2021-06-20 22:47:54',
                'updated_at' => '2021-06-20 22:47:54',
            ),
            361 => 
            array (
                'id' => 863,
                'name' => 'Childhood Trauma Healing',
                'course_sub_category_id' => 49,
                'slug' => 'childhood-trauma-healing-2',
                'created_at' => '2021-06-20 22:48:15',
                'updated_at' => '2021-06-20 22:48:15',
            ),
            362 => 
            array (
                'id' => 864,
            'name' => 'Eye Movement Desensitization and Reprocessing (EMDR)',
                'course_sub_category_id' => 49,
                'slug' => 'eye-movement-desensitization-and-reprocessing-emdr-1',
                'created_at' => '2021-06-20 22:48:47',
                'updated_at' => '2021-06-20 22:48:47',
            ),
            363 => 
            array (
                'id' => 865,
                'name' => 'Positive Psychology',
                'course_sub_category_id' => 49,
                'slug' => 'positive-psychology-1',
                'created_at' => '2021-06-20 22:49:54',
                'updated_at' => '2021-06-20 22:49:54',
            ),
            364 => 
            array (
                'id' => 866,
                'name' => 'Law of Attraction',
                'course_sub_category_id' => 49,
                'slug' => 'law-of-attraction-1',
                'created_at' => '2021-06-20 22:50:08',
                'updated_at' => '2021-06-20 22:50:08',
            ),
            365 => 
            array (
                'id' => 867,
                'name' => 'CBT',
                'course_sub_category_id' => 49,
                'slug' => 'cbt-1',
                'created_at' => '2021-06-20 22:50:36',
                'updated_at' => '2021-06-20 22:50:36',
            ),
            366 => 
            array (
                'id' => 868,
                'name' => 'Mindfulness',
                'course_sub_category_id' => 49,
                'slug' => 'mindfulness-4',
                'created_at' => '2021-06-20 22:51:28',
                'updated_at' => '2021-06-20 22:51:28',
            ),
            367 => 
            array (
                'id' => 869,
                'name' => 'Life Purpose',
                'course_sub_category_id' => 49,
                'slug' => 'life-purpose-2',
                'created_at' => '2021-06-20 22:51:49',
                'updated_at' => '2021-06-20 22:51:49',
            ),
            368 => 
            array (
                'id' => 870,
                'name' => 'Voice Acting',
                'course_sub_category_id' => 47,
                'slug' => 'voice-acting',
                'created_at' => '2021-06-20 22:53:50',
                'updated_at' => '2021-06-20 22:53:50',
            ),
            369 => 
            array (
                'id' => 871,
                'name' => 'LinkedIn',
                'course_sub_category_id' => 47,
                'slug' => 'linkedin-3',
                'created_at' => '2021-06-20 22:54:15',
                'updated_at' => '2021-06-20 22:54:15',
            ),
            370 => 
            array (
                'id' => 872,
                'name' => 'WordPress',
                'course_sub_category_id' => 113,
                'slug' => 'wordpress-3',
                'created_at' => '2021-06-20 22:58:38',
                'updated_at' => '2021-06-20 22:58:38',
            ),
            371 => 
            array (
                'id' => 873,
                'name' => 'CSS',
                'course_sub_category_id' => 113,
                'slug' => 'css-1',
                'created_at' => '2021-06-20 22:59:00',
                'updated_at' => '2021-06-20 22:59:00',
            ),
            372 => 
            array (
                'id' => 874,
                'name' => 'Mobile App Design',
                'course_sub_category_id' => 113,
                'slug' => 'mobile-app-design-1',
                'created_at' => '2021-06-20 23:00:23',
                'updated_at' => '2021-06-20 23:00:23',
            ),
            373 => 
            array (
                'id' => 875,
                'name' => 'Photoshop',
                'course_sub_category_id' => 113,
                'slug' => 'photoshop-7',
                'created_at' => '2021-06-20 23:00:47',
                'updated_at' => '2021-06-20 23:00:47',
            ),
            374 => 
            array (
                'id' => 876,
                'name' => 'HTML',
                'course_sub_category_id' => 113,
                'slug' => 'html',
                'created_at' => '2021-06-20 23:01:18',
                'updated_at' => '2021-06-20 23:01:18',
            ),
            375 => 
            array (
                'id' => 877,
                'name' => 'Adobe XD',
                'course_sub_category_id' => 113,
                'slug' => 'adobe-xd-1',
                'created_at' => '2021-06-20 23:01:46',
                'updated_at' => '2021-06-20 23:01:46',
            ),
            376 => 
            array (
                'id' => 878,
                'name' => 'User Interface',
                'course_sub_category_id' => 113,
                'slug' => 'user-interface-1',
                'created_at' => '2021-06-20 23:02:15',
                'updated_at' => '2021-06-20 23:02:15',
            ),
            377 => 
            array (
                'id' => 879,
                'name' => 'HTML5',
                'course_sub_category_id' => 113,
                'slug' => 'html5',
                'created_at' => '2021-06-20 23:02:45',
                'updated_at' => '2021-06-20 23:02:45',
            ),
            378 => 
            array (
                'id' => 880,
                'name' => 'Confidence',
                'course_sub_category_id' => 114,
                'slug' => 'confidence',
                'created_at' => '2021-06-20 23:05:43',
                'updated_at' => '2021-06-20 23:05:43',
            ),
            379 => 
            array (
                'id' => 881,
                'name' => 'Self-Esteem',
                'course_sub_category_id' => 114,
                'slug' => 'self-esteem',
                'created_at' => '2021-06-20 23:06:05',
                'updated_at' => '2021-06-20 23:06:05',
            ),
            380 => 
            array (
                'id' => 882,
                'name' => 'Fashion',
                'course_sub_category_id' => 114,
                'slug' => 'fashion-1',
                'created_at' => '2021-06-20 23:06:34',
                'updated_at' => '2021-06-20 23:06:34',
            ),
            381 => 
            array (
                'id' => 883,
                'name' => 'Communication Skills',
                'course_sub_category_id' => 114,
                'slug' => 'communication-skills-2',
                'created_at' => '2021-06-20 23:07:04',
                'updated_at' => '2021-06-20 23:07:04',
            ),
            382 => 
            array (
                'id' => 884,
                'name' => 'Neuro-Linguistic Programming',
                'course_sub_category_id' => 114,
                'slug' => 'neuro-linguistic-programming-2',
                'created_at' => '2021-06-20 23:07:26',
                'updated_at' => '2021-06-20 23:07:26',
            ),
            383 => 
            array (
                'id' => 885,
                'name' => 'Social Skills',
                'course_sub_category_id' => 114,
                'slug' => 'social-skills',
                'created_at' => '2021-06-20 23:07:52',
                'updated_at' => '2021-06-20 23:07:52',
            ),
            384 => 
            array (
                'id' => 886,
                'name' => 'Art for Kids',
                'course_sub_category_id' => 114,
                'slug' => 'art-for-kids',
                'created_at' => '2021-06-20 23:08:19',
                'updated_at' => '2021-06-20 23:08:19',
            ),
            385 => 
            array (
                'id' => 887,
                'name' => 'Drawing',
                'course_sub_category_id' => 114,
                'slug' => 'drawing-4',
                'created_at' => '2021-06-20 23:08:44',
                'updated_at' => '2021-06-20 23:08:44',
            ),
            386 => 
            array (
                'id' => 888,
                'name' => 'Personal Development',
                'course_sub_category_id' => 114,
                'slug' => 'personal-development-3',
                'created_at' => '2021-06-20 23:09:10',
                'updated_at' => '2021-06-20 23:09:10',
            ),
            387 => 
            array (
                'id' => 889,
                'name' => 'CFA',
                'course_sub_category_id' => 111,
                'slug' => 'cfa-1',
                'created_at' => '2021-06-20 23:13:07',
                'updated_at' => '2021-06-20 23:13:07',
            ),
            388 => 
            array (
                'id' => 890,
            'name' => 'Certified Management Accountant (CMA)',
                'course_sub_category_id' => 111,
                'slug' => 'certified-management-accountant-cma',
                'created_at' => '2021-06-20 23:13:27',
                'updated_at' => '2021-06-20 23:13:27',
            ),
            389 => 
            array (
                'id' => 891,
                'name' => 'Quantitative Finance',
                'course_sub_category_id' => 111,
                'slug' => 'quantitative-finance',
                'created_at' => '2021-06-20 23:15:45',
                'updated_at' => '2021-06-20 23:15:45',
            ),
            390 => 
            array (
                'id' => 892,
                'name' => 'Financial Management',
                'course_sub_category_id' => 111,
                'slug' => 'financial-management-1',
                'created_at' => '2021-06-20 23:16:14',
                'updated_at' => '2021-06-20 23:16:14',
            ),
            391 => 
            array (
                'id' => 893,
                'name' => 'Stock Trading',
                'course_sub_category_id' => 111,
                'slug' => 'stock-trading-2',
                'created_at' => '2021-06-20 23:16:39',
                'updated_at' => '2021-06-20 23:16:39',
            ),
            392 => 
            array (
                'id' => 894,
                'name' => 'Corporate Finance',
                'course_sub_category_id' => 111,
                'slug' => 'corporate-finance-1',
                'created_at' => '2021-06-20 23:17:30',
                'updated_at' => '2021-06-20 23:17:30',
            ),
            393 => 
            array (
                'id' => 895,
                'name' => 'Financial Markets',
                'course_sub_category_id' => 111,
                'slug' => 'financial-markets',
                'created_at' => '2021-06-20 23:18:06',
                'updated_at' => '2021-06-20 23:18:06',
            ),
            394 => 
            array (
                'id' => 896,
                'name' => 'Financial Planning',
                'course_sub_category_id' => 111,
                'slug' => 'financial-planning-1',
                'created_at' => '2021-06-20 23:18:55',
                'updated_at' => '2021-06-20 23:18:55',
            ),
            395 => 
            array (
                'id' => 897,
                'name' => 'ANBIMA Certification',
                'course_sub_category_id' => 111,
                'slug' => 'anbima-certification',
                'created_at' => '2021-06-20 23:20:18',
                'updated_at' => '2021-06-20 23:20:18',
            ),
            396 => 
            array (
                'id' => 898,
                'name' => 'ACCA',
                'course_sub_category_id' => 111,
                'slug' => 'acca',
                'created_at' => '2021-06-20 23:21:09',
                'updated_at' => '2021-06-20 23:21:09',
            ),
            397 => 
            array (
                'id' => 899,
                'name' => 'Financial Analysis',
                'course_sub_category_id' => 112,
                'slug' => 'financial-analysis-2',
                'created_at' => '2021-06-20 23:24:41',
                'updated_at' => '2021-06-20 23:24:41',
            ),
            398 => 
            array (
                'id' => 900,
                'name' => 'Financial Modeling',
                'course_sub_category_id' => 112,
                'slug' => 'financial-modeling-1',
                'created_at' => '2021-06-20 23:25:03',
                'updated_at' => '2021-06-20 23:25:03',
            ),
            399 => 
            array (
                'id' => 901,
                'name' => 'Finance Fundamentals',
                'course_sub_category_id' => 112,
                'slug' => 'finance-fundamentals-3',
                'created_at' => '2021-06-20 23:25:28',
                'updated_at' => '2021-06-20 23:25:28',
            ),
            400 => 
            array (
                'id' => 902,
                'name' => 'Excel',
                'course_sub_category_id' => 112,
                'slug' => 'excel-3',
                'created_at' => '2021-06-20 23:25:54',
                'updated_at' => '2021-06-20 23:25:54',
            ),
            401 => 
            array (
                'id' => 903,
                'name' => 'Investing',
                'course_sub_category_id' => 112,
                'slug' => 'investing-1',
                'created_at' => '2021-06-20 23:26:20',
                'updated_at' => '2021-06-20 23:26:20',
            ),
            402 => 
            array (
                'id' => 904,
                'name' => 'Investment Banking',
                'course_sub_category_id' => 112,
                'slug' => 'investment-banking-1',
                'created_at' => '2021-06-20 23:26:47',
                'updated_at' => '2021-06-20 23:26:47',
            ),
        ));
        
        
    }
}
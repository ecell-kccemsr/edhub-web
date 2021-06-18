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
        ));
        
        
    }
}
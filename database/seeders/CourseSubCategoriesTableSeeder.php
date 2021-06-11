<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseSubCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_sub_categories')->delete();
        
        \DB::table('course_sub_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Web Development',
                'course_category_id' => 1,
                'tags' => 'Web Developer,Angular,Web Development,JavaScript,React,Redux,HTML5,CSS3,Vue,Django,Sass,ASP.NET,Spring Boot,Spring Cloud,NodeJs,TypeScript,AngularJs,PHP,HTML,CSS,WordPress,BootStrap,Flask,Vue.js,SSL,HTTP,HTTPS,Material-UI',
                'slug' => 'web-development-1',
                'created_at' => '2021-06-06 22:44:00',
                'updated_at' => '2021-06-11 13:13:30',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Data Science',
                'course_category_id' => 1,
                'tags' => 'Machine Learning,Data Science,R,Python,Deep Learning,Artificial Intelligence,Big Data,Apache Spark,NLP,Natural Laungage Processing,Scala,Database,AI,Statistics,Azure,Tensorflow,Keras,Data Analysis,Docker,Neural Networks,Reinforcement,Data Analytics,Visualization,PySpark',
                'slug' => 'data-science-1',
                'created_at' => '2021-06-06 22:44:00',
                'updated_at' => '2021-06-11 13:10:14',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Programming Language',
                'course_category_id' => 1,
                'tags' => 'Python,Java,React,Node.js,Spring,Hibernate,C#,C++,C,Go,Javascript,Programmer,SQL,Programming Languages,JSP,Shell Scripting,TypeScript,Developer,Coding,PowerShell,Ruby,Matlab,Data Sctructre,Windows',
                'slug' => 'programming-language-1',
                'created_at' => '2021-06-06 22:45:00',
                'updated_at' => '2021-06-11 13:01:36',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Mobile Development',
                'course_category_id' => 1,
                'tags' => 'ios,swift,React Native,Flutter,Android,Kotlin,App Development,Android Developer,Ionic,App,SwiftUI,Mobile ,Augmented Unity,Apple,Dart',
                'slug' => 'mobile-development-1',
                'created_at' => '2021-06-06 23:09:00',
                'updated_at' => '2021-06-11 13:07:13',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Database Design & Development',
                'course_category_id' => 1,
                'tags' => 'SQL,Apache,MongoDB,Database,Hbase,NoSQL,Azure,Hadoop,PostgreSQL,Oracle,DB2,Data,T-SQL,Amazon Redshift,Snowflake,ETL,AWS,Cassandra',
                'slug' => 'database-design-development-1',
                'created_at' => '2021-06-06 23:10:00',
                'updated_at' => '2021-06-11 13:08:24',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Game Development',
                'course_category_id' => 1,
                'tags' => 'Game Developer,Video Game,Unity,Game Development,Unreal Engine,Game,Lua,Game Programming,2D,3D,VR,Multiplayer,OpenGL,Construct,Houdini,Godot,GUI',
                'slug' => 'game-development-1',
                'created_at' => '2021-06-06 23:10:00',
                'updated_at' => '2021-06-11 12:59:35',
            ),
            6 => 
            array (
                'id' => 8,
                'name' => 'Software Testing',
                'course_category_id' => 1,
                'tags' => 'Selenium,Software Testing,Unit Testing,Rest API,Automation,TestNG,JMeter,Testing,HP,Postman',
                'slug' => 'software-testing-1',
                'created_at' => '2021-06-06 23:10:00',
                'updated_at' => '2021-06-11 12:46:43',
            ),
            7 => 
            array (
                'id' => 9,
                'name' => 'Software Engineering',
                'course_category_id' => 1,
                'tags' => 'Scrum,Apache Spark,Arduino',
                'slug' => 'software-engineering-1',
                'created_at' => '2021-06-06 23:11:00',
                'updated_at' => '2021-06-11 12:58:20',
            ),
            8 => 
            array (
                'id' => 10,
                'name' => 'Development Tools',
                'course_category_id' => 1,
                'tags' => 'Docker,Kubernetes,JIRA,Git,Alteryx,Ci,Cd,Terraform,DevOps,vim,jenkins',
                'slug' => 'development-tools',
                'created_at' => '2021-06-06 23:11:00',
                'updated_at' => '2021-06-11 12:44:38',
            ),
            9 => 
            array (
                'id' => 11,
                'name' => 'Entrepreneurship',
                'course_category_id' => 2,
                'tags' => 'Start-up ,IPO,MBA,Business,Entrepreneur,business plan,Clients,Freelancer,blogger,Blog ,internet of money,Financials & Operations,leadership,Entrepreneurship',
                'slug' => 'entrepreneurship-1',
                'created_at' => '2021-06-06 23:27:00',
                'updated_at' => '2021-06-11 12:54:00',
            ),
            10 => 
            array (
                'id' => 12,
                'name' => 'Communication',
                'course_category_id' => 2,
                'tags' => 'Communications,Confidence,Style & Impact,Presentation Skills,blogger,Writter ,Speaking,Speech,Email,Listening,personalities,Effective Communication,Public Speaking,Speech Course',
                'slug' => 'communication-1',
                'created_at' => '2021-06-06 23:45:00',
                'updated_at' => '2021-06-11 12:52:39',
            ),
            11 => 
            array (
                'id' => 13,
                'name' => 'Management',
                'course_category_id' => 2,
                'tags' => 'Management,Product Management,Product Manager,interviews,Manager,Leadership ,Management Skills,prototyping,companies,Agile,Product Owner,scrum master,Teamwork Skills,manage team',
                'slug' => 'management-1',
                'created_at' => '2021-06-07 00:15:00',
                'updated_at' => '2021-06-11 12:51:02',
            ),
            12 => 
            array (
                'id' => 14,
                'name' => 'Sales',
                'course_category_id' => 2,
                'tags' => 'Sales Hacking,Essential sales skills,sales skills,sales strategies,sales techniques,Sell,Customers,befriending customers,Lead Generation,Pitching,Closing Deals,Sell your idea,service,product',
                'slug' => 'sales',
                'created_at' => '2021-06-11 13:14:32',
                'updated_at' => '2021-06-11 13:14:32',
            ),
            13 => 
            array (
                'id' => 15,
                'name' => 'Business Strategy',
                'course_category_id' => 2,
                'tags' => 'business plan,Business,Digital Marketing ,Social Media Marketing,Marketing ,strategies,Business Model,Business Fundamentals
,Marketing Strategy,Trading,Digital Strategies,Blog,strategic thinking,business thinkers',
                'slug' => 'business-strategy',
                'created_at' => '2021-06-11 13:15:25',
                'updated_at' => '2021-06-11 13:15:25',
            ),
            14 => 
            array (
                'id' => 16,
                'name' => 'Operations',
                'course_category_id' => 2,
                'tags' => 'Operations Courses,Six Sigma,UiPath,automate,logistics ,supply chain,Six Sigma Belt,Robotic Process Automation,Green Belt
,white Belt,Yellow Belt,Automation,Tech Primer',
                'slug' => 'operations',
                'created_at' => '2021-06-11 13:16:41',
                'updated_at' => '2021-06-11 13:16:41',
            ),
            15 => 
            array (
                'id' => 17,
                'name' => 'Project Management',
                'course_category_id' => 2,
                'tags' => 'Project Management Courses,Agile Certified,Agile Development,Agile Project Delivery,Agile Project Management.,Project Management,Excel,Fundamental,Principles,Prioritization,Stakeholder Expectations,Team Empowerment,agile methods',
                'slug' => 'project-management',
                'created_at' => '2021-06-11 13:17:45',
                'updated_at' => '2021-06-11 13:17:45',
            ),
            16 => 
            array (
                'id' => 18,
                'name' => 'Business Law',
                'course_category_id' => 2,
                'tags' => 'Business Law Courses,Drafting Winning Contracts,Negotiating Well,GDPR compliance ,CCPA compliance,compliance,CIPP/E test,Patent 
,Trademark process,Copyright ,Trademark,Data Protection Regulation,Legal,Regulations',
                'slug' => 'business-law',
                'created_at' => '2021-06-11 13:18:55',
                'updated_at' => '2021-06-11 13:18:55',
            ),
            17 => 
            array (
                'id' => 19,
                'name' => 'Business Analytics & Intelligence',
                'course_category_id' => 2,
                'tags' => 'SQL,Database,PostgreSQL,data science,data analytics,big data,Power BI,Tableau Desktop
,Bar charts,Excel,data sources,business intelligence,Business Analysis,Business Analyst',
                'slug' => 'business-analytics-intelligence',
                'created_at' => '2021-06-11 13:20:10',
                'updated_at' => '2021-06-11 13:20:10',
            ),
            18 => 
            array (
                'id' => 20,
                'name' => 'Human Resources',
                'course_category_id' => 2,
                'tags' => 'Human Resources Courses,ELearning,Human Resources,HR,blended learning,communication,recruitment,leadership,online security,privacy,diversity,equity,inclusion',
                'slug' => 'human-resources',
                'created_at' => '2021-06-11 13:21:18',
                'updated_at' => '2021-06-11 13:21:18',
            ),
            19 => 
            array (
                'id' => 21,
                'name' => 'Industry',
                'course_category_id' => 2,
                'tags' => 'Industry Courses,Industry,Pharmacy Technician,Life Coach,Personal Development,
Training,Empower Clients,Salesforce,Workplace Safety,pharmacy math,pharmaceutical industry,Oil Industry,Gas Industry',
                'slug' => 'industry',
                'created_at' => '2021-06-11 13:22:28',
                'updated_at' => '2021-06-11 13:22:28',
            ),
            20 => 
            array (
                'id' => 22,
                'name' => 'E-Commerce',
                'course_category_id' => 2,
                'tags' => 'E-Commerce Courses,Amazon selling blueprint,Shopify,Amazon ,eBay,Flipkart,Drop Ship,Alibaba,drop shipping,Drone,Drone Shipping,Amazon FBA,E-Commerce',
                'slug' => 'e-commerce',
                'created_at' => '2021-06-11 13:23:28',
                'updated_at' => '2021-06-11 13:23:28',
            ),
            21 => 
            array (
                'id' => 23,
                'name' => 'Media',
                'course_category_id' => 2,
                'tags' => 'Media Courses,writing,formatting,publishing,marketing,Kindle ebooks,screenplay,Screenwriting,Audiobook,USC Master Class.,podcast recording,podcast,animations,Graphics',
                'slug' => 'media',
                'created_at' => '2021-06-11 13:24:25',
                'updated_at' => '2021-06-11 13:24:25',
            ),
            22 => 
            array (
                'id' => 24,
                'name' => 'Real States',
                'course_category_id' => 2,
                'tags' => 'Real Estate Investing,Real Estate Investment,Real Estate,Transactions,Loan,rental income property,Airbnb,Mortgage ,loan processor,Construction,rent,pro forma investment,Airbnb Hosting,Real Estate Flipping',
                'slug' => 'real-states',
                'created_at' => '2021-06-11 13:25:24',
                'updated_at' => '2021-06-11 13:25:24',
            ),
            23 => 
            array (
                'id' => 25,
                'name' => 'Other Business',
                'course_category_id' => 2,
                'tags' => 'PowerPoint,QuickBooks Online,QuickBooks,Blockchain,Basics of Blockchain,Bitcoin,Ethereum,transcripts,transcripting skills,Grant Writing,Freelance Writing ,PMI-RMP',
                'slug' => 'other-business',
                'created_at' => '2021-06-11 13:26:13',
                'updated_at' => '2021-06-11 13:26:13',
            ),
        ));
        
        
    }
}
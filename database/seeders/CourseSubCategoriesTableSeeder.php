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
            24 => 
            array (
                'id' => 26,
                'name' => 'Accounting & Bookkeeping',
                'course_category_id' => 3,
                'tags' => 'Accounting,Bookkeeping,Financial Accounting,Financial Fundamentals,Financial Statement,QuickBooks Online,Xero,Tally.ERP,Cost Accounting,Modeling ,Valuation,SAP FICO,bookkeeping,Card Repair',
                'slug' => 'accounting-bookkeeping',
                'created_at' => '2021-06-12 14:33:24',
                'updated_at' => '2021-06-12 14:33:24',
            ),
            25 => 
            array (
                'id' => 27,
                'name' => 'Compliance',
                'course_category_id' => 3,
                'tags' => 'Anti Money Laundering,Risk Management,Sarbanes-Oxley,CAMS ,CAMS Certification,Trade and Commerce,Internal Auditing,IFRS,Accounting,Financial Risk,Financial Risk Management,Financial Crime,Money Laundering',
                'slug' => 'compliance',
                'created_at' => '2021-06-12 14:35:50',
                'updated_at' => '2021-06-12 14:35:50',
            ),
            26 => 
            array (
                'id' => 28,
                'name' => 'Cryptocurrency & Blockchain',
                'course_category_id' => 3,
                'tags' => 'Cryptocurrency,Blockchain,personal finance,blockchain,Day Trading,Algorithmic Trading,Bitcoin Trading,Technical Analysis,NFT,DeFi & investing,Cryptocurrency  Investment,Altcoin,Non-Fungible Tokens',
                'slug' => 'cryptocurrency-blockchain',
                'created_at' => '2021-06-12 14:37:03',
                'updated_at' => '2021-06-12 14:37:03',
            ),
            27 => 
            array (
                'id' => 29,
                'name' => 'Economics',
                'course_category_id' => 3,
                'tags' => 'stata,Macroeconomics,Microeconomics,Finance Fundamentals,Entrepreneurship Fundamentals,Regression Analysis
,Data Visualization,Global Economics,Economics,money creation,monetary policy,Data manipulation,circular economy',
                'slug' => 'economics',
                'created_at' => '2021-06-12 14:38:10',
                'updated_at' => '2021-06-12 14:38:10',
            ),
            28 => 
            array (
                'id' => 30,
                'name' => 'Finance',
                'course_category_id' => 3,
                'tags' => 'Personal Finance,Investment Banking,CFA,Corporate ,Corporate Finance,Certified Management Accountant,Quantitative Analysis
,ANBIMA Certification,Financial Planning,Investing ,Accounting,Python,Company Valuation,Private Equity',
                'slug' => 'finance',
                'created_at' => '2021-06-12 14:47:31',
                'updated_at' => '2021-06-12 14:47:31',
            ),
            29 => 
            array (
                'id' => 31,
                'name' => 'Investing & Trading',
                'course_category_id' => 3,
                'tags' => 'Invest ,Trading,Stock Trading,Investing ,Forex,Day trading,Options trading,Financial Trading,Financial Analyst,Investor,Stock Market,Stock,Crypto,Cryptocurrency',
                'slug' => 'investing-trading',
                'created_at' => '2021-06-12 14:49:42',
                'updated_at' => '2021-06-12 14:49:42',
            ),
            30 => 
            array (
                'id' => 32,
                'name' => 'Money Management Tools',
                'course_category_id' => 3,
                'tags' => 'QuicksBooks online,QuicksBooks,QuicksBooks Pro,SAP FICO,SAP  ,Money Management,Excel Shortcuts,Xero Advisor,Xero  
,Xero Accounting,Microsoft Dynamics NAV,Bookkeeping,Managerial accounting,cost accounting',
                'slug' => 'money-management-tools',
                'created_at' => '2021-06-12 14:52:58',
                'updated_at' => '2021-06-12 14:52:58',
            ),
            31 => 
            array (
                'id' => 33,
                'name' => 'Taxes',
                'course_category_id' => 3,
                'tags' => 'Tax Preparation,Goods and Service Tax,Accounting ,Home Business,Value Addded Tax,SAT,Financial Accounting ,Taxes
,Income tax preparation,schedule C income,US Income tax,GST,CA Intermediate Syllabus,Partnership Income tax',
                'slug' => 'taxes',
                'created_at' => '2021-06-12 14:54:44',
                'updated_at' => '2021-06-12 14:54:44',
            ),
            32 => 
            array (
                'id' => 34,
                'name' => 'Other Finance & Accounting',
                'course_category_id' => 3,
                'tags' => 'Technical Analysis ,PowerPoint ,Stock Trading,Passive Income ,Coaching,Online Business,passive income,Financial Planning Coaching
,Revenue Cycle,Healthcare Finance,Pivot Tables,Insurance,Public Speaking,PowerPoint',
                'slug' => 'other-finance-accounting',
                'created_at' => '2021-06-12 14:57:34',
                'updated_at' => '2021-06-12 14:57:34',
            ),
            33 => 
            array (
                'id' => 35,
                'name' => 'IT Certification',
                'course_category_id' => 4,
                'tags' => 'AWS Certification,Microsoft Certification,AWS Solutions Architect,Amazon Web Services,AWS Certified Developer,Cisco 200-301 Certification,CCNA certification,Cisco 200-301 Certification.,CompTIA Security+,SY0-501 Exam,AWS Certified SysOps,CompTIA A+ Certification 
,Core 1 (220-1001),Azure Architect Technology',
                'slug' => 'it-certification',
                'created_at' => '2021-06-12 15:06:42',
                'updated_at' => '2021-06-12 15:06:42',
            ),
            34 => 
            array (
                'id' => 36,
                'name' => 'Network & Security',
                'course_category_id' => 4,
                'tags' => 'ethical hacker,ethical hacking,security videos,Cyber Security Specialist,website hacking,CompTIA Network+,Network  
,Network Hacking ,penetration testing skills,AWS Management Console,hacking lab,Hacking',
                'slug' => 'network-security',
                'created_at' => '2021-06-12 15:08:26',
                'updated_at' => '2021-06-12 15:08:26',
            ),
            35 => 
            array (
                'id' => 37,
                'name' => 'Hardware',
                'course_category_id' => 4,
                'tags' => 'PLC program,Arduino,PLC Fundamentals,Embedded,logic,Arduino gadgets,FreeRTOS,STM32F4x,ARM Cortex,M3/M4 processor
,TM32 Timers,CAN,RTC,PWM,Low Power',
                'slug' => 'hardware',
                'created_at' => '2021-06-12 15:09:42',
                'updated_at' => '2021-06-12 15:09:42',
            ),
            36 => 
            array (
                'id' => 38,
                'name' => 'Operating Systems',
                'course_category_id' => 4,
                'tags' => 'Linux operating system,Linux  ,Operating Systems,Linux Command,Linux Training course,shell script,Bash ,Windows PowerShell
,Windows,Windows Server,Linux system administration,Linux administration,Microsoft SCCM',
                'slug' => 'operating-systems',
                'created_at' => '2021-06-12 15:10:37',
                'updated_at' => '2021-06-12 15:10:37',
            ),
            37 => 
            array (
                'id' => 39,
                'name' => 'Other IT & Software',
                'course_category_id' => 4,
                'tags' => 'DevOps,Algorithms,Kubernetes,advanced C++,Java Spring Framework,Java Web Service ,AWS Lambda Functions,Ansible,SAP MM,.NET
,Software Architecture',
                'slug' => 'other-it-software',
                'created_at' => '2021-06-12 15:11:46',
                'updated_at' => '2021-06-12 15:11:46',
            ),
            38 => 
            array (
                'id' => 40,
                'name' => 'Microsoft',
                'course_category_id' => 5,
                'tags' => 'Excel,Microsoft,Word,Powerpoint,Sharepoint,Outlook,Data Models,Office ,Power BI,Computer Skills,OneNote',
                'slug' => 'microsoft',
                'created_at' => '2021-06-12 15:14:47',
                'updated_at' => '2021-06-12 15:14:47',
            ),
            39 => 
            array (
                'id' => 41,
                'name' => 'Apple',
                'course_category_id' => 5,
                'tags' => 'Mac,iMovie,Keynote,FileMaker,Vellum,iphone,OmniFocus,Apple,Notability,Screenflow,OS X Yosemite,Final Cut Pro v10.2,iPad',
                'slug' => 'apple',
                'created_at' => '2021-06-12 15:15:56',
                'updated_at' => '2021-06-12 15:15:56',
            ),
            40 => 
            array (
                'id' => 42,
                'name' => 'Google',
                'course_category_id' => 5,
                'tags' => 'Google,Gmail,G Suite,Assistant,Google Drive,Google Classroom,Email,Google Keep,Google Calendar,Translate API,Google Hangouts,Google Cloud',
                'slug' => 'google',
                'created_at' => '2021-06-12 15:17:32',
                'updated_at' => '2021-06-12 15:17:32',
            ),
            41 => 
            array (
                'id' => 43,
                'name' => 'SAP',
                'course_category_id' => 5,
                'tags' => 'SAP,SAP S/4HANA,SAP MM,SAP ABAP,SAP Financial Accounting,SAP SD,Logistics Management,B2B Sales,Sales Management,Supply Chain,SAP HCM,SAP FICO,SAP Basis,SAP Project,SAP BusinessObjects,SAP Warehouse Management,SAP Simple Finance',
                'slug' => 'sap',
                'created_at' => '2021-06-12 15:36:30',
                'updated_at' => '2021-06-12 15:36:30',
            ),
            42 => 
            array (
                'id' => 44,
                'name' => 'Oracle',
                'course_category_id' => 5,
                'tags' => 'Oracle Database,Pl/SQL,Database Administration,Oracle Fusion HCM,Oracle Data Integrator,SQL,Oracle Primavera,Oracle Business Intelligence,Oracle E-Business Suite,Database Developer Tools,Project Planning,Oracle Data Guard,Oracle Cloud,Data Modeling,Oracle Certification,Oracle ERP,ERP',
                'slug' => 'oracle',
                'created_at' => '2021-06-12 15:37:45',
                'updated_at' => '2021-06-12 15:37:45',
            ),
            43 => 
            array (
                'id' => 45,
                'name' => 'Personal Transformation',
                'course_category_id' => 6,
                'tags' => 'Life Coaching,Neuroscience ,Mindfulness,CBT,Goal Setting ,difficult behavior,psychology,Emotional Intelligence,productivity,time management,productive,working remotely,productive mindset,work schedules,email communication,Boost productivity,Task Management',
                'slug' => 'personal-transformation',
                'created_at' => '2021-06-12 15:44:24',
                'updated_at' => '2021-06-12 15:44:24',
            ),
            44 => 
            array (
                'id' => 46,
                'name' => 'Leadership',
                'course_category_id' => 6,
                'tags' => 'Management Skills,Leading Teams ,Process Improvement,Leader  ,Leadership,Communication Skills,Persuasive Management,Spirituality Coach,conflict ,resolving disagreements,Emotional Intelligence,Relationships,Influence',
                'slug' => 'leadership',
                'created_at' => '2021-06-12 15:46:11',
                'updated_at' => '2021-06-12 15:46:11',
            ),
            45 => 
            array (
                'id' => 47,
                'name' => 'Career Development',
                'course_category_id' => 6,
                'tags' => 'Career Hacking,interviewing ,networking skills,resume,linkedin skills,Soft Skills,Business grammar ,business English,business letter,American English,Voice Over,social media marketing,essays',
                'slug' => 'career-development',
                'created_at' => '2021-06-12 15:50:18',
                'updated_at' => '2021-06-12 15:50:18',
            ),
            46 => 
            array (
                'id' => 48,
                'name' => 'Parenting & Relationships',
                'course_category_id' => 6,
                'tags' => 'Neuroscience for parents,relationships,Relationship Counselling ,Emotionally Focused,love based relationships,Heal Events,relationship growth,Montessori,Mental Illness,Premarital Counseling,Marriage ,traumatized youth,Nonverbal Communication',
                'slug' => 'parenting-relationships',
                'created_at' => '2021-06-12 15:51:45',
                'updated_at' => '2021-06-12 15:51:45',
            ),
            47 => 
            array (
                'id' => 49,
                'name' => 'Happiness',
                'course_category_id' => 6,
                'tags' => 'Happiness Life Coach,Law of Attraction,Self Hypnosis,Neuroscience,Mindfulness,Manifesting Money,Health,mindfulness life coach,Positive Psychology,Law of Attraction',
                'slug' => 'happiness',
                'created_at' => '2021-06-12 15:58:12',
                'updated_at' => '2021-06-12 15:58:12',
            ),
            48 => 
            array (
                'id' => 50,
                'name' => 'Esoteric Practices',
                'course_category_id' => 6,
                'tags' => 'Reiki,Crystal Reiki Master,TAROT,Tarot Card Readings,Tarot Cards,Animal Reiki,Chakras,Energy Body,Psychic Ability,Hypnotherapy,Hypnosis',
                'slug' => 'esoteric-practices',
                'created_at' => '2021-06-12 15:59:06',
                'updated_at' => '2021-06-12 15:59:06',
            ),
            49 => 
            array (
                'id' => 51,
                'name' => 'Religion & Spirituality',
                'course_category_id' => 6,
                'tags' => 'Spiritual Life coach,Spirit Guides,spiritual growth,Angels,communicate with Angels ,Archangels,Earth Angels,career readings ,life purpose readings,Meditation,Kabbalistic Tarot,Psychic Spiritual Pendulum',
                'slug' => 'religion-spirituality',
                'created_at' => '2021-06-12 16:00:52',
                'updated_at' => '2021-06-12 16:00:52',
            ),
            50 => 
            array (
                'id' => 52,
                'name' => 'Personal Brand Building',
                'course_category_id' => 6,
                'tags' => 'personal brand,LinkedIn Profile,digital brand,Digital Body Language,meetings,Civil Engineering,professional LinkedIn trainer ,Digital Marketing practitioner,body language,Language,Writing a book',
                'slug' => 'personal-brand-building',
                'created_at' => '2021-06-12 16:03:14',
                'updated_at' => '2021-06-12 16:03:14',
            ),
            51 => 
            array (
                'id' => 53,
                'name' => 'Creativity',
                'course_category_id' => 6,
                'tags' => 'Art Therapy,Therapeutic Art,Healing Process,Self Expression,Self Healing,Art ,Aromatherapy,screenwriting,storytelling,Creative
,Creative Writing ,Humor Writing ,Chess',
                'slug' => 'creativity',
                'created_at' => '2021-06-12 16:04:50',
                'updated_at' => '2021-06-12 16:04:50',
            ),
            52 => 
            array (
                'id' => 54,
                'name' => 'Stress Management',
                'course_category_id' => 6,
                'tags' => 'Emotional Intelligence ,Negative Emotions,Anxiety & Fear,Anger,Anger Management,Emotional Resilience,Resilience,Time Management
,Mindfulness Meditation,Mindfulness ,Emotional Intelligence',
                'slug' => 'stress-management',
                'created_at' => '2021-06-12 16:06:08',
                'updated_at' => '2021-06-12 16:06:08',
            ),
            53 => 
            array (
                'id' => 55,
                'name' => 'Memory & Study Skills',
                'course_category_id' => 6,
                'tags' => 'memory,Speed Reading,Mind Mapping,Focus Training,learning strategies,remember anything ,optimization problems,Speed Reading',
                'slug' => 'memory-study-skills',
                'created_at' => '2021-06-12 16:07:00',
                'updated_at' => '2021-06-12 16:07:00',
            ),
            54 => 
            array (
                'id' => 56,
                'name' => 'Motivation',
                'course_category_id' => 6,
                'tags' => 'Motivate ,Mental training,Mental Strength,confidence,Positive Habits ,Willpower,Habits,Motivating ,SMARTER goals,Self discipline',
                'slug' => 'motivation',
                'created_at' => '2021-06-12 16:08:25',
                'updated_at' => '2021-06-12 16:08:25',
            ),
            55 => 
            array (
                'id' => 57,
                'name' => 'Other Personal Development',
                'course_category_id' => 6,
                'tags' => 'Freight Broker,voiceovers,Voicemaster,Survival Concepts,French language,car maintenance,Confidence on camera,handwriting analysis
,Social circle ,Pet First Aid',
                'slug' => 'other-personal-development',
                'created_at' => '2021-06-12 16:09:36',
                'updated_at' => '2021-06-12 16:09:36',
            ),
            56 => 
            array (
                'id' => 58,
                'name' => 'Graphic Design & Illustration',
                'course_category_id' => 7,
                'tags' => 'Drawing,Adobe Photoshop,illustrations,Covers Photoshop,Illustrator,InDesign,Design Theory,Branding,Logo Design,Affinity Designer,anatomy
,Digital painting,Photoshop',
                'slug' => 'graphic-design-illustration',
                'created_at' => '2021-06-12 16:13:14',
                'updated_at' => '2021-06-12 16:13:14',
            ),
            57 => 
            array (
                'id' => 59,
                'name' => 'Design Tools',
                'course_category_id' => 7,
                'tags' => 'Procreate,After Effects CC,Adobe Photoshop CC,Adobe Photoshop,Adobe Premiere Pro,Affinity Designer,Sketch software,Rhinoceros 3D,AutoCAD,Photoshop CS6,InDesign Adobe,Procreate ipad',
                'slug' => 'design-tools',
                'created_at' => '2021-06-12 16:15:15',
                'updated_at' => '2021-06-12 16:15:15',
            ),
            58 => 
            array (
                'id' => 60,
                'name' => 'User Experience Design',
                'course_category_id' => 7,
                'tags' => 'User Interface ,Adobe XD,Figma ,web design ,product design ,Mobile app design ,Professional portfolio ,usability testing ,UX,UI,UX audit ,UX Design Fundamentals',
                'slug' => 'user-experience-design',
                'created_at' => '2021-06-12 16:20:03',
                'updated_at' => '2021-06-12 16:20:03',
            ),
            59 => 
            array (
                'id' => 61,
                'name' => 'Game Design',
                'course_category_id' => 7,
                'tags' => 'Unreal engine ,pixel art ,Unity ,Drawing ,Blender ,Digital painting ,level design ,Game ,Game Development ,Digital sketch,photorealistic digital images,Video Game',
                'slug' => 'game-design',
                'created_at' => '2021-06-12 16:23:12',
                'updated_at' => '2021-06-12 16:23:12',
            ),
            60 => 
            array (
                'id' => 62,
                'name' => 'Design Thinking',
                'course_category_id' => 7,
                'tags' => 'design thinking,creative solution,complete Design Thinking,Gamification,VSD ,Anime Academy,abstract painting',
                'slug' => 'design-thinking',
                'created_at' => '2021-06-12 16:25:36',
                'updated_at' => '2021-06-12 16:25:36',
            ),
            61 => 
            array (
                'id' => 63,
                'name' => '3D & Animation',
                'course_category_id' => 7,
                'tags' => 'Blender,3D models,3D Printing,Motion Graphics,VFX Visual Effects,VFX Compositing,Blender 2.8 ,Blender 2.9,3Ds Max ,V-Ray,3D art',
                'slug' => '3d-animation',
                'created_at' => '2021-06-12 16:26:13',
                'updated_at' => '2021-06-12 16:26:13',
            ),
            62 => 
            array (
                'id' => 64,
                'name' => 'Fashion Design',
                'course_category_id' => 7,
                'tags' => 'fashion  ,sewing,Adobe Illustrator,Photoshop,Jewelry Design,T-Shirt Design,Anime,Jewelry Making,Marvelous Designer,Brand Management,Drawing,Illustration,Design Pattern,Nail Art',
                'slug' => 'fashion-design',
                'created_at' => '2021-06-12 16:27:08',
                'updated_at' => '2021-06-12 16:27:08',
            ),
            63 => 
            array (
                'id' => 65,
                'name' => 'Architectural Design',
                'course_category_id' => 7,
                'tags' => 'AutoCAD,Revit,Architectural Design,SketchUp,ARCHICAD,Landscape Architecture,LEED,Civil Engineerin,Grasshopper 3d,Architecture Fundamentals,ETABS,Interior Design,3ds Max,Construction,BIM',
                'slug' => 'architectural-design',
                'created_at' => '2021-06-12 16:28:05',
                'updated_at' => '2021-06-12 16:28:05',
            ),
            64 => 
            array (
                'id' => 66,
                'name' => 'Interior Design',
                'course_category_id' => 7,
                'tags' => 'Interior Design,Color Theory,Lighting Design,HVAC,Minimalist Lifestyle,3ds Max,Botany,Electrical Design,Feng Shui,Sustainable Architecture,Architectural Design,Electricity,Home Improvement',
                'slug' => 'interior-design',
                'created_at' => '2021-06-12 16:29:16',
                'updated_at' => '2021-06-12 16:29:16',
            ),
            65 => 
            array (
                'id' => 67,
                'name' => 'Other Design',
                'course_category_id' => 7,
            'tags' => 'Character Design,Electronics,Drawing,Circuit Design,Digital Painting,Comic Book Creation,Perspective Drawing,Portraiture,Geometric Dimensioning and Tolerancing (GD&T),Procreate Digital Illustration App,Pencil Drawing,Pixel Art,Concept Art,ANSYS,Computational Fluid Dynamics,Solar Energy,Cartoon Drawing',
                'slug' => 'other-design',
                'created_at' => '2021-06-12 16:30:08',
                'updated_at' => '2021-06-12 16:30:08',
            ),
            66 => 
            array (
                'id' => 68,
                'name' => 'Digital Marketing',
                'course_category_id' => 8,
            'tags' => 'Digital Marketing,Google Ads (Adwords),Social Media Marketing,Marketing Strategy,Google Ads (AdWords) Certification,Internet Marketing,YouTube Marketing,Email Marketing,Google Analytics,Retargeting,Podcasting,Advertising Strategy,Copywriting,Landing Page Optimization',
                'slug' => 'digital-marketing',
                'created_at' => '2021-06-12 16:31:56',
                'updated_at' => '2021-06-12 16:31:56',
            ),
            67 => 
            array (
                'id' => 69,
                'name' => 'Search Engine Optimization',
                'course_category_id' => 8,
                'tags' => ',SEO,Search Engine Optimization,Keyword Research,Local SEO,Google my Business,SEO Audit,Link Building,Google Search Console,Squarespace,Google sites,Ranking',
                'slug' => 'search-engine-optimization',
                'created_at' => '2021-06-12 16:34:01',
                'updated_at' => '2021-06-12 16:34:01',
            ),
            68 => 
            array (
                'id' => 70,
                'name' => 'Social Media Marketing',
                'course_category_id' => 8,
                'tags' => 'Instagram Marketing,Social Media Marketing,Facebook Ads,Facebook Marketing,PPC Advertising,Social Media Management,TikTok Marketing,LinkedIn,Pinterest Marketing,Instagram Photography,YouTube Audience Growth,Twitter Marketing,Facebook Training,Digital Marketing,YouTube Marketing,Influencer Marketing,Facebook Groups,Personal Branding',
                'slug' => 'social-media-marketing',
                'created_at' => '2021-06-12 16:34:58',
                'updated_at' => '2021-06-12 16:34:58',
            ),
            69 => 
            array (
                'id' => 71,
                'name' => 'Branding',
                'course_category_id' => 8,
                'tags' => 'Business Branding,YouTube Audience Growth,Personal Branding,Brand Management,Marketing Strategy,Canva,Customer Service,Voice-Over,Storytelling,Book Marketing,Reputation Management',
                'slug' => 'branding',
                'created_at' => '2021-06-12 16:35:43',
                'updated_at' => '2021-06-12 16:35:43',
            ),
            70 => 
            array (
                'id' => 72,
                'name' => 'Marketing Fundamentals',
                'course_category_id' => 8,
                'tags' => 'Copywriting,Marketing Strategy,Marketing Management,Marketing Analytics,Event Planning,Neuromarketing,Sales Skills,Marketing Plan,Marketing Psychology,Online Business',
                'slug' => 'marketing-fundamentals',
                'created_at' => '2021-06-12 16:36:22',
                'updated_at' => '2021-06-12 16:36:22',
            ),
            71 => 
            array (
                'id' => 73,
                'name' => 'Marketing Analytics & Automation',
                'course_category_id' => 8,
            'tags' => 'Google Analytics Individual Qualification (IQ),Data Analysis,Marketing Analytics,Google Tag Manager,SQL,Marketing Strategy,GoogleAnalytics Reports,Marketing Automation,HubSpot,Marketo,Excel Modeling,Forecasting Model,ActiveCampaign,Retail Business,Google Data Studio',
                'slug' => 'marketing-analytics-automation',
                'created_at' => '2021-06-12 16:37:38',
                'updated_at' => '2021-06-12 16:37:38',
            ),
            72 => 
            array (
                'id' => 74,
                'name' => 'Content Marketing',
                'course_category_id' => 8,
                'tags' => 'Content Marketing,Copywriting,Content Writing,Content Creation',
                'slug' => 'content-marketing',
                'created_at' => '2021-06-12 16:38:10',
                'updated_at' => '2021-06-12 16:38:10',
            ),
            73 => 
            array (
                'id' => 75,
                'name' => 'Affiliate Marketing',
                'course_category_id' => 8,
                'tags' => 'Affiliate Marketing,ClickBank,Amazon Affiliate Marketing,CPA Marketing,Teespring,Network Marketing,Home Business,Online Business',
                'slug' => 'affiliate-marketing',
                'created_at' => '2021-06-12 16:38:46',
                'updated_at' => '2021-06-12 16:38:46',
            ),
            74 => 
            array (
                'id' => 76,
                'name' => 'Product Marketing',
                'course_category_id' => 8,
            'tags' => 'Marketing Plan,Product Management,Amazon Kindle Direct Publishing (KDP),Self-Publishing,Voice-Over,SaaS,Amazon PPC Advertising
,Meditation,Audiobook Creation,ClickFunnels,Personas,Kickstarter,Lead Generation',
                'slug' => 'product-marketing',
                'created_at' => '2021-06-12 16:39:29',
                'updated_at' => '2021-06-12 16:39:29',
            ),
        ));
        
        
    }
}
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
                'tags' => 'JS,Nuxt.js,Next.js,Redux,Vue.js,ES6,Svelte.js,DOM,Tensorflow.js,jQuerry,NodeJS,Express',
                'slug' => 'javascript',
                'created_at' => '2021-06-06 22:47:04',
                'updated_at' => '2021-06-06 22:47:04',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'React',
                'course_sub_category_id' => 1,
                'tags' => 'React.js,Redux,react router,hooks,GraphQL,ContextAPI,Stripe,Firebase,ES6,React Native,jest,MERN',
                'slug' => 'react',
                'created_at' => '2021-06-06 23:15:23',
                'updated_at' => '2021-06-06 23:15:23',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'CSS',
                'course_sub_category_id' => 1,
                'tags' => 'HTML,CSS3,Flexbox,Grid,Sass,bootstrap,responsive,HTML5,Tailwind,animation,materialised,SVG,Design,front end',
                'slug' => 'css',
                'created_at' => '2021-06-06 23:17:08',
                'updated_at' => '2021-06-06 23:17:08',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Angular',
                'course_sub_category_id' => 1,
                'tags' => 'AngularJS,NodeJS,MEAN,NgRx,AngularFire',
                'slug' => 'angular',
                'created_at' => '2021-06-06 23:17:44',
                'updated_at' => '2021-06-06 23:17:44',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'PHP',
                'course_sub_category_id' => 1,
                'tags' => 'MySQL,OOP,MVC',
                'slug' => 'php',
                'created_at' => '2021-06-06 23:18:14',
                'updated_at' => '2021-06-06 23:18:14',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Django',
                'course_sub_category_id' => 1,
                'tags' => 'Python',
                'slug' => 'django',
                'created_at' => '2021-06-06 23:22:21',
                'updated_at' => '2021-06-06 23:22:21',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Node JS',
                'course_sub_category_id' => 1,
                'tags' => 'Node.js,PM2',
                'slug' => 'node-js',
                'created_at' => '2021-06-06 23:23:14',
                'updated_at' => '2021-06-06 23:23:14',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Wordpress',
                'course_sub_category_id' => 1,
                'tags' => 'theme,no coding,template,SEO',
                'slug' => 'wordpress',
                'created_at' => '2021-06-06 23:23:46',
                'updated_at' => '2021-06-06 23:23:46',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'business fundamentals',
                'course_sub_category_id' => 11,
                'tags' => 'MBA,Business School,Business Concepts,Sales Fundamentals,advertising,marketing communications,marketing strategies,business credit reports,Credit for Business,aspects of business,SaaS Business Model,Business Trends,Founders,Inverstors',
                'slug' => 'business-fundamentals-1',
                'created_at' => '2021-06-06 23:29:20',
                'updated_at' => '2021-06-06 23:44:21',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'entrepreneurship Fundamentals',
                'course_sub_category_id' => 11,
                'tags' => 'entrepreneur,investor,Founders,Startups,business ideas,Cofounder,Products,market research,service design,prototyping,branding,sales,fundraising,CEO,CTO',
                'slug' => 'entrepreneurship-fundamentals',
                'created_at' => '2021-06-06 23:31:18',
                'updated_at' => '2021-06-06 23:31:18',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'business strategy',
                'course_sub_category_id' => 11,
                'tags' => 'Business,Marketing,Complete MBA,start a company,business analysis,strategies,business value,innovative ideas,Corporate Strategy,competitor analysis,Consultants,customers,Market,Five forces model',
                'slug' => 'business-strategy',
                'created_at' => '2021-06-06 23:32:58',
                'updated_at' => '2021-06-06 23:32:58',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'startup',
                'course_sub_category_id' => 11,
                'tags' => 'Digital Marketing,entrepreneur,market research,service design,prototyping,branding,sales,fundraising,CEO,CTO,Funding,fundraising,business idea,pitch deck,venture capitalists,angel investors',
                'slug' => 'startup',
                'created_at' => '2021-06-06 23:34:30',
                'updated_at' => '2021-06-06 23:34:30',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'freelancing',
                'course_sub_category_id' => 11,
                'tags' => 'Skills,Fiverr,customers,Client,Own boss,freelance editor,Freelance Medical Writing,Career Choice,Upwork,Freelancing opportunity,tools for freelancers,target audience,niche skill,long-term customers',
                'slug' => 'freelancing',
                'created_at' => '2021-06-06 23:36:35',
                'updated_at' => '2021-06-06 23:36:35',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'business plan',
                'course_sub_category_id' => 11,
                'tags' => 'Customer Loyalty,Net Promoter Score,business development,Business Ideas,Fundraising Campaign,Budget,Lean Thinking,Business Planning,Business Strategy,eCommerce,freelancing services,affiliate,self-branded businesses,innovative start-ups',
                'slug' => 'business-plan-1',
                'created_at' => '2021-06-06 23:38:31',
                'updated_at' => '2021-06-06 23:45:01',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'online business',
                'course_sub_category_id' => 11,
                'tags' => 'Internet Marketing,client,Digital Products,Online Courses,Online Coaching,eBooks,Webinars,Online marketing,marketing strategies,Home Business,marketing,Online Therapist',
                'slug' => 'online-business',
                'created_at' => '2021-06-06 23:39:43',
                'updated_at' => '2021-06-06 23:39:43',
            ),
            15 => 
            array (
                'id' => 16,
                'name' => 'blogging',
                'course_sub_category_id' => 11,
                'tags' => 'successful blog,Blogs,blogging blueprint,Blogging,expert blogger,freelance writer,blogger writer,blogging niche,fully-fledged blog,stunning blog,massive audience,content,profitable and interesting',
                'slug' => 'blogging',
                'created_at' => '2021-06-06 23:41:01',
                'updated_at' => '2021-06-06 23:41:01',
            ),
            16 => 
            array (
                'id' => 17,
                'name' => 'home business',
                'course_sub_category_id' => 11,
                'tags' => 'SEO business,pricing models,business,home business,profitable,freelance,Simple,web hosting,Development,Transcriptionist,business model,low-cost start up',
                'slug' => 'home-business',
                'created_at' => '2021-06-06 23:42:17',
                'updated_at' => '2021-06-06 23:42:17',
            ),
            17 => 
            array (
                'id' => 18,
                'name' => 'communication skills',
                'course_sub_category_id' => 12,
                'tags' => 'Business Communication,email writing,Manipulation,Effectively communicate,Communicate confidently,memorable way,email etiquette,key skills,Personal Development,business,Cross-Culturally,develop',
                'slug' => 'communication-skills',
                'created_at' => '2021-06-06 23:48:01',
                'updated_at' => '2021-06-06 23:48:01',
            ),
            18 => 
            array (
                'id' => 19,
                'name' => 'presentation skills',
                'course_sub_category_id' => 12,
                'tags' => 'business skills,Selling Presentation,Public Speaking,Speech Course,techniques,audience,camera,Eliminate awkwardness,Excel,Word Bubbles,CEO-Level,Eye-catching,presentations Communicating',
                'slug' => 'presentation-skills',
                'created_at' => '2021-06-06 23:50:02',
                'updated_at' => '2021-06-06 23:50:02',
            ),
            19 => 
            array (
                'id' => 20,
                'name' => 'writing',
                'course_sub_category_id' => 12,
                'tags' => 'Journal Editor,Write With Confidence,Style & Impact,blogs writing,sparkle,exceptional,writing Books & Essays,Writing newspapers,spellbinding,writing Punctuation,writing tools,concept book',
                'slug' => 'writing',
                'created_at' => '2021-06-06 23:51:27',
                'updated_at' => '2021-06-06 23:51:27',
            ),
            20 => 
            array (
                'id' => 21,
                'name' => 'public speaking',
                'course_sub_category_id' => 12,
                'tags' => 'Public Speaking,Speech Course,Audience,presenter,Communications,Presenting inspiring stories,motivational speech,keynote speech,speaking business,presentation skills,Communicating,zero-fluff content,memorable way',
                'slug' => 'public-speaking-1',
                'created_at' => '2021-06-06 23:53:06',
                'updated_at' => '2021-06-06 23:55:12',
            ),
            21 => 
            array (
                'id' => 22,
                'name' => 'fiction writing',
                'course_sub_category_id' => 12,
                'tags' => 'writing,killer novels,memoirs,short stories,fiction,Crafting Dynamic Characters,mystery novel,comprehensive novel,realistic characters,Riveting Fiction,Selling Books, Fiction Writing,',
                'slug' => 'fiction-writing',
                'created_at' => '2021-06-06 23:54:40',
                'updated_at' => '2021-06-06 23:54:40',
            ),
            22 => 
            array (
                'id' => 23,
                'name' => 'business writing',
                'course_sub_category_id' => 12,
                'tags' => 'Writing,newspapers,spellbinding writing,Punctuation,writing tools,concept book,memoirs,short stories,persuasive writing,technical writing,Business grammar,business English',
                'slug' => 'business-writing',
                'created_at' => '2021-06-06 23:57:16',
                'updated_at' => '2021-06-06 23:57:16',
            ),
            23 => 
            array (
                'id' => 24,
                'name' => 'email etiquette',
                'course_sub_category_id' => 12,
                'tags' => 'Business,Personal Development,email writing,communication,email messages,write emails,Email Etiquette,business writing,communication frustration,Email Ninja,Email Inbox,email',
                'slug' => 'email-etiquette',
                'created_at' => '2021-06-06 23:58:40',
                'updated_at' => '2021-06-06 23:58:40',
            ),
            24 => 
            array (
                'id' => 25,
                'name' => 'business communication',
                'course_sub_category_id' => 12,
                'tags' => 'communication skills,business writing,business grammar,conflict resolution,Project confidence,business presentation,Word Bubbles,CEO-Level,Eye-catching presentations,Communicating Business,Communication,email etiquette',
                'slug' => 'business-communication',
                'created_at' => '2021-06-06 23:59:54',
                'updated_at' => '2021-06-06 23:59:54',
            ),
            25 => 
            array (
                'id' => 26,
                'name' => 'storytelling',
                'course_sub_category_id' => 12,
                'tags' => 'Storytelling Abilities,Storytelling,Speeches,Tell Stories,emotional stories,Word-of-Mouth,Persuade Amaze,Inspire Your Audience,Persuasive Stories,hypnotic storytelling,Business',
                'slug' => 'storytelling',
                'created_at' => '2021-06-07 00:01:08',
                'updated_at' => '2021-06-07 00:01:08',
            ),
            26 => 
            array (
                'id' => 27,
                'name' => 'product management',
                'course_sub_category_id' => 13,
                'tags' => 'Product Manager,Product Management,Product Lifecycle,sizes of companies,product Management,manager,prototyping,wireframing,user,industry-standard tools,laser-focused products',
                'slug' => 'product-management',
                'created_at' => '2021-06-07 00:17:04',
                'updated_at' => '2021-06-07 00:17:04',
            ),
            27 => 
            array (
                'id' => 28,
                'name' => 'leadership',
                'course_sub_category_id' => 13,
                'tags' => 'leadership skills,leadership techniques,practical advice,training Management,Skills,team manager,Team Building,Team Management,management techniques,communication skills,Problem Solving,Leader',
                'slug' => 'leadership',
                'created_at' => '2021-06-07 00:18:26',
                'updated_at' => '2021-06-07 00:18:26',
            ),
            28 => 
            array (
                'id' => 29,
                'name' => 'management skills',
                'course_sub_category_id' => 13,
                'tags' => 'Management Skills,Leading Teams,employees,team manager,Team Management,Manage a team,skilled manager,leadership productivity,communication skills,empowerment,engagement',
                'slug' => 'management-skills',
                'created_at' => '2021-06-07 00:19:26',
                'updated_at' => '2021-06-07 00:19:26',
            ),
            29 => 
            array (
                'id' => 30,
                'name' => 'business strategy',
                'course_sub_category_id' => 13,
                'tags' => 'MBA graduates,MBA,industry analysis,Competitor analysis,Five forces model,seek to serve,avoiding false starts,expensive pitfalls,start a company,business vision,digital business strategy',
                'slug' => 'business-strategy-1',
                'created_at' => '2021-06-07 00:20:39',
                'updated_at' => '2021-06-07 00:20:39',
            ),
            30 => 
            array (
                'id' => 31,
                'name' => 'ISO 9001',
                'course_sub_category_id' => 13,
                'tags' => 'requirements of ISO 9001:2015,Quality Management,System history of ISO 9001,Quality Management System,Audits,principles of audits,practices of audits,types of audits,ISO 9001:2015,Transition integrated,management system,risk-based thinking',
                'slug' => 'iso-9001',
                'created_at' => '2021-06-07 00:21:58',
                'updated_at' => '2021-06-07 00:21:58',
            ),
            31 => 
            array (
                'id' => 32,
                'name' => 'business process management',
                'course_sub_category_id' => 13,
                'tags' => 'Management Skills,Leading Teams,employees,team manager,Team Management,business model,Business tool,LEAN business processes,Simple Improvement,process management,business model,Management Tools',
                'slug' => 'business-process-management',
                'created_at' => '2021-06-07 00:23:17',
                'updated_at' => '2021-06-07 00:23:17',
            ),
            32 => 
            array (
                'id' => 33,
                'name' => 'quality management',
                'course_sub_category_id' => 13,
                'tags' => 'requirements of ISO 9001:2015,Quality Management System,history of ISO 9001,Quality Management System,Audits,principles of audits,practices of audits,types of audits,principles of quality management,Waste in Business,Root Cause,Analysis Corrective,Action Process',
                'slug' => 'quality-management',
                'created_at' => '2021-06-07 00:24:39',
                'updated_at' => '2021-06-07 00:24:39',
            ),
            33 => 
            array (
                'id' => 34,
                'name' => 'manager training',
                'course_sub_category_id' => 13,
                'tags' => 'Management Skills,manager training,delegate tasks manager,Communicating,Communicate,strategic tasks,team performance,effective goals',
                'slug' => 'manager-training',
                'created_at' => '2021-06-07 00:25:51',
                'updated_at' => '2021-06-07 00:25:51',
            ),
            34 => 
            array (
                'id' => 35,
                'name' => 'Agile',
                'course_sub_category_id' => 13,
            'tags' => 'Scrum Agile project,Agile project PSM,scrum,Scrum Master,Certification Agile,Certified Agile,Project Management (Scrum),Scrum Kanban,Scrumban Agile,Samurai Bootcamp',
                'slug' => 'agile',
                'created_at' => '2021-06-07 00:27:01',
                'updated_at' => '2021-06-07 00:27:01',
            ),
        ));
        
        
    }
}
<?php
namespace App\Console\Commands;

use App\Models\Course;
use App\Models\CourseReview;
use Illuminate\Console\Command;
use App\Models\CourseCurriculum;
use App\Models\CourseInstructor;
use Illuminate\Support\Facades\Http;

class FetchCourses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:courses {count}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Courses from providers';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $count=$this->argument('count');
        $token = "eUR5ZXFoSnBvTkQwZkhkTjlaSTZsR3hUNVNjME1xV1NIYm9EMk5xMjpoWERicmpJUzR4VGU1dGtPSnd1Yk1FbHhnS1E5SzNMdjJ1RXhyYzZBTEF0b1pWSzRrWEhZNGk3aUlrbU5NYzNoOWRWRTc3dEk0N1FiNTlZakpKNXdOU2xkZndYZ01yVExFbWt0ZHFaM3M2Nm82NFZzazhGUGUxTHhhUEJlWnhqaA==";
        $page = 1;
        while($page++ <= $count) {
            $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Basic $token", "Content-Type" => "application/json;charset=utf-8"])->get("https://www.udemy.com/api-2.0/courses/?page=$page");
            if ($response->successful() === true)
            {
                $courses = $response->json() ['results'];
                foreach ($courses as $course)
                {
                    $dbCourse = Course::create(['title' => $course['title'], 'subtitle' => "", 'image' => $course['image_480x270'], 'url' => 'https://www.udemy.com' . $course['url'], 'skills' => '', 'career_outcome' => '', 'job_opportunities' => '', 'description' => $course['headline'], 'prerequisites' => '', 'FAQs' => '', 'certification' => 1, 'rating' => 4, 'price' => $course['price_detail']['amount'], 'course_provider_id' => 1, 'slug' => $course['published_title'], ]);
                    foreach ($course['visible_instructors'] as $instructor)
                    {
                        CourseInstructor::create(['name' => $instructor['display_name'], 'designation' => $instructor['job_title'], 'image' => $instructor['image_100x100'], 'url' => 'https://www.udemy.com' . $instructor['url'], 'course_id' => $dbCourse->id, ]);
                    }
                    $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Basic $token", "Content-Type" => "application/json;charset=utf-8"])->get('https://www.udemy.com/api-2.0/courses/' . $course['id'] . '/public-curriculum-items?page_size=1000');
                    if ($response->successful())
                    {
                        $curriculum_array = $response->json() ['results'];
                        foreach ($curriculum_array as $curriculum)
                        {
                            CourseCurriculum::create(['title' => $curriculum['title'], 'description' => $curriculum['description'], 'course_id' => $dbCourse->id, 'type' => $curriculum['_class'] == 'chapter' ? 'chapter' : 'lecture', ]);
                        }
                    }
    
                    $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Basic $token", "Content-Type" => "application/json;charset=utf-8"])->get('https://www.udemy.com/api-2.0/courses/' . $course['id'] . '/reviews?page_size=1000');
                    if ($response->successful())
                    {
                        $reviews = $response->json() ['results'];
                        foreach ($reviews as $review)
                        {
                            CourseReview::create(['content' => $review['content'], 'rating' => $review['rating'], 'course_id' => $dbCourse->id, 'user_name' => $review['user']['display_name'], ]);
                        }
                    }
                }
                $this->line("10 Courses fetched");
            }
            else
            {
                dd("Request Failed");
            }
        }

        return 0;
    }
}


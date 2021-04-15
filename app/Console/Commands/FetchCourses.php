<?php
namespace App\Console\Commands;

use App\Models\Course;
use App\Models\CourseReview;
use Illuminate\Console\Command;
use App\Models\CourseCurriculum;
use App\Models\CourseInstructor;
use App\Models\CurriculumChapter;
use App\Models\CurriculumLecture;
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
            $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Basic $token", "Content-Type" => "application/json;charset=utf-8"])->get("https://www.udemy.com/api-2.0/courses/?fields[course]=@all&page=$page");
            if ($response->successful() === true)
            {
                $courses = $response->json() ['results'];
                foreach ($courses as $course)
                {
                    $dbCourse = Course::create([
                        'title' => $course['title'],
                        'subtitle' => $course['headline'],
                        'locale' => $course['locale']['title'],
                        'captions' => $course['caption_languages'],
                        'image' => $course['image_480x270'],
                        'url' => 'https://www.udemy.com' . $course['url'],
                        'outcome' => $course['what_you_will_learn_data']['items'],
                        'description' => $course['description'],
                        'prerequisites' => $course['prerequisites'],
                        'faq' => $course['faq'],
                        'certification' => 1,
                        'rating' => $course['avg_rating'],
                        'rating_distribution' => $course['rating_distribution'],
                        'price' => $course['price_detail']['amount'],
                        'discount_price' => isset($course['discount_price']) ? $course['discount_price']['amount'] : $course['price_detail']['amount'],
                        'course_provider_id' => 1,
                        'slug' => $course['published_title'],
                    ]);
                    foreach ($course['visible_instructors'] as $instructor)
                    {
                        CourseInstructor::create(['name' => $instructor['display_name'], 'designation' => $instructor['job_title'], 'image' => $instructor['image_100x100'], 'url' => 'https://www.udemy.com' . $instructor['url'], 'course_id' => $dbCourse->id, ]);
                    }
                    $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Basic $token", "Content-Type" => "application/json;charset=utf-8"])->get('https://www.udemy.com/api-2.0/courses/' . $course['id'] . '/public-curriculum-items?page_size=1000');
                    if ($response->successful())
                    {
                        $curriculum_array = $response->json() ['results'];
                        $chapter = null;
                        foreach ($curriculum_array as $curriculum)
                        {
                            if($curriculum['_class'] === 'chapter') {
                                $chapter = CurriculumChapter::create([
                                    'title' => $curriculum['title'],
                                    'description' => isset($curriculum['description']) ? $curriculum['description'] : '',
                                    'course_id' => $dbCourse->id,
                                ]);
                            } else {
                                if( $chapter !== null) {
                                    CurriculumLecture::create([
                                        'title' => $curriculum['title'],
                                        'description' => isset($curriculum['description']) ? $curriculum['description'] : '',
                                        'curriculum_chapter_id' => $chapter->id,
                                    ]);
                                }
                            }
                            
                        }
                    }
    
                    $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Basic $token", "Content-Type" => "application/json;charset=utf-8"])->get('https://www.udemy.com/api-2.0/courses/' . $course['id'] . '/reviews?fields[user]=@all&page_size=1000');
                    if ($response->successful())
                    {
                        $reviews = $response->json() ['results'];
                        foreach ($reviews as $review)
                        {
                            CourseReview::create(['content' => $review['content'], 
                                'rating' => $review['rating'], 
                                'course_id' => $dbCourse->id, 
                                'user_image' => $review['user']['image_100x100'],
                                'user_name' => $review['user']['display_name'],
                            ]);
                        }
                    }
                }
                $this->line("12 Courses fetched");
            }
            else
            {
                dd("Request Failed");
            }
        }

        return 0;
    }
}


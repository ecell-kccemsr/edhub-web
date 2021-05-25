<?php
namespace App\Console\Commands;

use App\Models\Course;
use App\Models\CourseTopic;
use App\Models\CourseReview;
use App\Models\CourseCategory;
use Illuminate\Console\Command;
use App\Models\CourseCurriculum;
use App\Models\CourseInstructor;
use App\Models\CourseSubCategory;
use App\Models\CurriculumChapter;
use App\Models\CurriculumLecture;
use Illuminate\Support\Facades\Http;

class FetchUdemy extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:udemy {count}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Courses from udemy';

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
        $token = "VjFRYmJRWTJwYTQzSjQ0ZTZJSVVCYjU5dW9ueHZ2ckZtRmtZZ0hKdjpwTHdIOUE3YThhVDcyTTA5ZTVTbVRDTHFzcmxWaFRwYnNiRmUzZHE0dmhBdGVBdTN6akh2SnpmQ2VFeld0RTZra3VubFlSaDNwcUQxam9zdGpreEFzT2VKejg0VTZ1eVpXdzlFQ1M1S0o5UUpCWk85YlFCUGdmZkRwZEdGRTNaYQ==";
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
                        'cid' => $course['id'],
                        'certification' => $course['has_certificate'],
                        'difficulty_level' => $course['instructional_level_simple'],
                        'rating' => $course['avg_rating'],
                        'rating_distribution' => $course['rating_distribution'],
                        'price' => $course['price_detail']['amount'],
                        'discount_price' => isset($course['discount_price']) ? $course['discount_price']['amount'] : $course['price_detail']['amount'],
                        'course_provider_id' => 1,
                        'slug' => $course['published_title'],
                    ]);

                    $category = CourseCategory::firstOrCreate(['name' => $course['primary_category']['title']]);
                    $dbCourse->course_category_id = $category->id;
                    $subCategory = CourseSubCategory::firstOrCreate(['name' => $course['primary_subcategory']['title'], 'course_category_id' => $category->id]);
                    $dbCourse->course_sub_category_id = $subCategory->id;
                    if(isset($course['course_has_labels'][0])) {
                        $topic = CourseTopic::firstOrCreate(['name' => $course['course_has_labels'][0]['label']['title'], 'course_sub_category_id' => $subCategory->id]);
                        $dbCourse->course_topic_id = $topic->id;
                    }
                    $dbCourse->save();

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
                dd($response->status(), $response->body());
            }
        }

        return 0;
    }
}
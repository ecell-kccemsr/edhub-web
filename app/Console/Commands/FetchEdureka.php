<?php
namespace App\Console\Commands;

use App\Models\Course;
use App\Models\CourseTopic;
use Illuminate\Support\Str;
use App\Models\CourseReview;
use App\Models\CourseCategory;
use Illuminate\Console\Command;
use App\Models\CourseCurriculum;
use App\Models\CourseInstructor;
use App\Models\CourseSubCategory;
use App\Models\CurriculumChapter;
use App\Models\CurriculumLecture;
use Illuminate\Support\Facades\Http;

class FetchEdureka extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:edureka {token}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Courses from Edureka';

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
        $totalFetched = 0;
        $count = 2;
        $token = $this->argument('token');
        $page = 1;
        while($page++ <= $count) {
            $response = Http::withHeaders(["Accept" => "application/json, text/plain, */*", "Authorization" => "Bearer $token", "Content-Type" => "application/json;charset=utf-8"])->get("https://api.rakutenmarketing.com/productsearch/1.0?pagenumber=" . $page);
            if ($response->successful() === true)
            {
                $xml = simplexml_load_string($response->body(), "SimpleXMLElement", LIBXML_NOCDATA);
                $result = json_decode(json_encode($xml),TRUE);
                if(isset($result['item'])) {
                    $count = $result['TotalPages'];
                    foreach($result['item'] as $item) 
                    {
                        if(Course::where('course_provider_id', '3')->where('cid', $item['sku'])->first() !== null) {
                            continue;
                        }
                        $dbCourse = new Course([
                            'title' => $item['productname'],
                            'cid' => $item['sku'],
                            'subtitle' => is_array($item['description']['short']) ? '' : $item['description']['short'],
                            'image' => $item['imageurl'],
                            'url' => $item['linkurl'],
                            'description' => is_array($item['description']['long']) ? '' : $item['description']['long'],
                            'price' => $item['price'],
                            'discount_price' => $item['saleprice'],
                            'course_provider_id' => 3,
                            'certification' => true,
                            'rating' => '0',
                        ]);
                        $dbCourse->generateSlug();
                        if(isset($item['category']['primary'])) {
                            $category = CourseCategory::firstOrCreate(['name' => $item['category']['primary']]);
                            $dbCourse->course_category_id = $category->id;
                            if(isset($item['category']['secondary'])) {
                                if(is_array($item['category']['secondary']) === false) {
                                    $subCategory = CourseSubCategory::firstOrCreate(['name' => $item['category']['secondary'], 'course_category_id' => $category->id]);
                                    $dbCourse->course_sub_category_id = $subCategory->id;
                                }
                            }
                        }
                        $dbCourse->save();
                        $totalFetched++;
                    }
                }
            }
            else
            {
                dd($response->status(), $response->body());
            }
        }
        $this->line("Total $totalFetched courses fetched from Edureka");
        return 0;
    }
}
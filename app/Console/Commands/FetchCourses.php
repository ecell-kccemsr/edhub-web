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
use TeamTNT\TNTSearch\Classifier\TNTClassifier;

class FetchCourses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:courses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Courses from rakutenmarketing.com';

    /**
     * Crdentials
     *
     */

    protected $requestToken = "NkV2VGY4VmJYZFNmZmt4NzNzZnBoQkNab2hzYTpwQjByeV9pNnhmMEFyWlBDdzJ3NDY5Q2VBRE1h";
    protected $username = "highhand";
    protected $password = "edhub@89";
    protected $scope = "3854190";
    protected $providers = [
        [
            'name' => 'Edureka',
            'id' => 3,
            'mid' => '42536',
        ],
    ];

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
        // Train Model
        $classifier = new TNTClassifier();
        foreach (CourseTopic::all() as $topic) {
            $classifier->learn($topic->name, $topic->id);
            $tags = explode(',', $topic->tags);
            foreach ($tags as $tag) {
                $classifier->learn($tag, $topic->id);
            }
        }

        $response =  Http::withToken($this->requestToken, "basic")->asForm()->post('https://api.rakutenmarketing.com/token', [
            "grant_type" => "password",
            "username" => $this->username,
            "password" => $this->password,
            "scope" => $this->scope,
        ]);
        if ($response->successful() === false) {
            dd("Failed to aquire authentication token");
        }
        $totalFetched = 0;
        $token = $response->json("access_token");
        foreach ($this->providers as $provider) {
            $count = 1;
            $page = 0;
            $this->info('Fetching courses from ' . $provider['name']);
            while ($page++ <= $count) {
                $this->line("Page: $page/$count");
                $response = Http::withHeaders([
                    "Accept" => "application/json, text/plain, */*",
                    "Authorization" => "Bearer $token",
                    "Content-Type" => "application/json;charset=utf-8"
                ])->get("https://api.rakutenmarketing.com/productsearch/1.0?pagenumber=$page&mid=" . $provider['mid']);
                if ($response->successful() === true) {
                    $xml = simplexml_load_string($response->body(), "SimpleXMLElement", LIBXML_NOCDATA);
                    $result = json_decode(json_encode($xml), TRUE);
                    $count = $result['TotalPages'];
                    if (isset($result['item'])) {
                        foreach ($result['item'] as $item) {
                            if (Course::where('cid', $item['sku'])->first() !== null) {
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
                                'course_provider_id' => $provider['id'],
                            ]);
                            $dbCourse->generateSlug();
                            // Predict Topic
                            $guess = $classifier->predict($dbCourse->title);
                            if (isset($guess['label'])) {
                                $dbCourse->course_topic_id = intval($guess['label']);
                            }
                            $dbCourse->save();
                            $totalFetched++;
                            $this->line("Fetched $dbCourse->title");
                        }
                    }
                } else {
                    dd($response->status(), $response->body());
                }
            }
        }
        $this->info("Total $totalFetched courses fetched");
        return 0;
    }
}

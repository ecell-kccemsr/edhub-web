<?php

namespace App\Console\Commands;

use App\Models\Blog;
use App\Models\News;
use App\Models\Testimony;
use App\Models\ExamResult;
use App\Models\ExamCalendar;
use App\Models\NewsCategory;
use App\Models\GovernmentJob;
use App\Models\QuestionPaper;
use App\Models\NewsSubCategory;
use Illuminate\Console\Command;
use App\Models\ExamCalendarCategory;
use App\Models\GovernmentJobCategory;
use App\Models\QuestionPaperCategory;
use App\Models\GovernmentJobSubCategory;
use App\Models\QuestionPaperSubCategory;

class AppFakerCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:fake {count}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate fake data';

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

        //News
        NewsCategory::factory()->count($count)->create();
        NewsSubCategory::factory()->count($count)->create();
        News::factory()->count($count)->create();

        //Government Job
        GovernmentJobCategory::factory()->count($count)->create();
        GovernmentJobSubCategory::factory()->count($count)->create();
        GovernmentJob::factory()->count($count)->create();

        //Question Paper
        QuestionPaperCategory::factory()->count($count)->create();
        QuestionPaperSubCategory::factory()->count($count)->create();
        QuestionPaper::factory()->count($count)->create();

        //Exam Calendar
        ExamCalendarCategory::factory()->count($count)->create();
        ExamCalendar::factory()->count($count)->create();

        //Testimony
        Testimony::factory()->count($count)->create();

        //Blog
        Blog::factory()->count($count)->create();

        //Exam Result
        ExamResult::factory()->count($count)->create();


        $this->line("Fake data added.");
        return 0;
    }
}

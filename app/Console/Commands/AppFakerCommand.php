<?php

namespace App\Console\Commands;

use App\Models\News;
use App\Models\ExamCalendar;
use App\Models\GovernmentJob;
use App\Models\QuestionPaper;
use Illuminate\Console\Command;

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
        News::factory()->count($count)->create();
        GovernmentJob::factory()->count($count)->create();
        QuestionPaper::factory()->count($count)->create();
        ExamCalendar::factory()->count($count)->create();
        $this->line("Fake data added.");
        return 0;
    }
}

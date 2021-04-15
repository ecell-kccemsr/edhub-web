<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Artisan;

class AppRefreshCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh storage, database and seed';

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
        $file = new Filesystem;
        $file->cleanDirectory(storage_path('app/public'));
        File::copyDirectory(base_path('assets'), storage_path('app/public'));
        Artisan::call('db:wipe');
        Artisan::call('migrate --seed');
        Artisan::call('cache:clear');
        Artisan::call('app:setup');
        Artisan::call('passport:install');
        $this->line("Application refreshed.");
        return 0;
    }
}

<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

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
        File::delete(storage_path('app/public'));
        Artisan::call('db:wipe');
        Artisan::call('migrate --seed');
        Artisan::call('cache:clear');
        Artisan::call('app:setup');
        $this->line("Application refreshed.");
        return 0;
    }
}

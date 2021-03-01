<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;

class AppSetupCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy the necessary files, and link storage.';

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
     * @return mixed
     */
    public function handle()
    {
        $src = base_path('assets');
        $dest = storage_path('app/public');
        if (File::isDirectory($dest)) {
            $this->error("The $dest directory already exists.");
        } else {
            File::copyDirectory($src, $dest);
            $this->info("The $dest directory has been copied.");
        }
        Artisan::call("storage:link");
    }
}

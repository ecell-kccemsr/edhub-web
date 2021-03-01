<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class AppSeedCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create seeds for voyager';

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
        Artisan::call('iseed data_types,data_rows,menus,menu_items,data_rows,roles,permissions,permission_role,settings --force');
        return 0;
    }
}

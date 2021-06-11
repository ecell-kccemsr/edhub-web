<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class AppBackupListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:backup-list';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'list all backup files';

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
        $path = base_path('.backup');
        $files = array_diff(scandir($path,1), array('..', '.'));
        $arr = [];
        foreach($files as $file)
        {
            array_push($arr,array($file));
        }
        $this->table('Backup file',$arr);
    }
}

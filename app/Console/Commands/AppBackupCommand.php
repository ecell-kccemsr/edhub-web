<?php

namespace App\Console\Commands;

use DateTime;
use Illuminate\Support\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class AppBackupCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'App Backup';

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
        $this->backupBaseFolder();
        $backup_folder = $this->backupFolder();
        $this->copyPublicFolder($backup_folder);
        $this->dataBackup($backup_folder);
    }

    public function backupBaseFolder()
    {
        $path = base_path('.backup');
        if (!File::exists($path)) {
            File::makeDirectory($path);
            $this->line("New backup base folder has been created.");   
        }
        else{
            $this->line("Backup base folder already exists.");
        }
        return $path;
    }

    public function backupFolder()
    {
        $folderName =  Carbon::now()->format("Y-m-d-H-i-s");
        $path = base_path(".backup\\".$folderName);
        if(!File::isDirectory($path)){
            File::makeDirectory($path);
            $this->line("New backup folder has been created.");
        }
        else{
            $this->line("Backup folder already exists.");
        }
        return ".backup\\".$folderName;
    }

    public function copyPublicFolder($backup_folder){
        File::copyDirectory(base_path('storage/app/public'), base_path($backup_folder));
    }

    public function dataBackup($backup_folder)
    {
        $path = base_path("$backup_folder\data");
        if(!File::isDirectory($path)){
            File::makeDirectory($path);
            $this->line("New data folder has been created.");
        }
        $tables = DB::select('SHOW TABLES');
        $exclude_tables = ['data_types','data_rows','menus','menu_items','data_rows','roles','permissions','permission_role','settings'];
        $db = "Tables_in_".env('DB_DATABASE');
        foreach($tables as $table)
        {
            if(!in_array($table->$db, $exclude_tables))
            {

                $file = $table->$db . '.json';
                $table->$db = DB::table($table->$db)->get();
                $data = json_encode($table->$db);
                File::put("$path\\$file",$data);
               
            }
        }
        $this->line("Data files have been created.");
    }

    


}

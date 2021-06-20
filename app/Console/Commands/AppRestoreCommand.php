<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class AppRestoreCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:restore {backup_name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Restore backup files and data';

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
        $this->restore($this->argument('backup_name'));
    }

    public function restore($backup_name)
    {
        if($backup_name == "latest")
        {
            $path = base_path('.backup');
            $files = array_diff(scandir($path,1), array('..', '.'));
            $backup_name = $files[0];
            if(!File::exists(base_path(".backup/".$backup_name)))
            {
                $this->line("Backup not found");
            }
            else{
                $this->restore_backup($backup_name);
            }
        }
        else{
            if(!File::exists(base_path(".backup/".$backup_name)))
            {
                $this->line("Backup not found");
            }
            else{
                $this->restore_backup($backup_name);
            }
        }
    }

    public function restore_backup($backup_name)
    {
        $source_path = base_path(".backup/$backup_name/files");
        File::copyDirectory($source_path, base_path('storage/app/public'));
        $path = base_path(".backup/$backup_name/data");
        $data = array_diff(scandir($path), array('..', '.'));
        foreach($data as $d)
        {
            $data_path = ".backup/$backup_name/data/$d";
            $rows = json_decode(file_get_contents($data_path), true);
            $table_name = pathinfo($d, PATHINFO_FILENAME);
            DB::table($table_name)->delete();
            foreach($rows as $row){
                Schema::disableForeignKeyConstraints();
                DB::beginTransaction();
                try
                {
                    DB::table($table_name)->insert($row);
                    DB::commit();
                }
                catch(\Exception $e)
                {
                    DB::rollback();
                    throw $e;
                }
                finally 
                {
                    Schema::enableForeignKeyConstraints();   
                }
            }
        }
    }
}

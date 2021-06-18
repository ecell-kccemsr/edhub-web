<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Schema::disableForeignKeyConstraints();
        $this->call(DataTypesTableSeeder::class);
        $this->call(DataRowsTableSeeder::class);
        $this->call(MenusTableSeeder::class);
        $this->call(MenuItemsTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(PermissionRoleTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(CurrentAffairSubCategoriesTableSeeder::class);
        $this->call(CurrentAffairCategoriesTableSeeder::class);
        $this->call(QuestionPaperCategoriesTableSeeder::class);
        $this->call(ExamCalendarCategoriesTableSeeder::class);
        $this->call(GovernmentJobCategoriesTableSeeder::class);
        $this->call(GovernmentJobSubCategoriesTableSeeder::class);
        $this->call(NewsSubCategoriesTableSeeder::class);
        $this->call(NewsCategoriesTableSeeder::class);
        $this->call(CourseProvidersTableSeeder::class);
        $this->call(CourseCategoriesTableSeeder::class);
        $this->call(CourseSubCategoriesTableSeeder::class);
        $this->call(CourseTopicsTableSeeder::class);

        Schema::enableForeignKeyConstraints();
    }
}

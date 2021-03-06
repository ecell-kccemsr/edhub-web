<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGovernmentJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('government_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description');
            $table->longText('job_positions');
            $table->longText('eligibility_criteria');
            $table->longText('syllabus');
            $table->longText('exam_pattern');
            $table->longText('cutoff');
            $table->longText('apply_online');
            $table->longText('admit_card');
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('subcategory_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('government_jobs');
    }
}
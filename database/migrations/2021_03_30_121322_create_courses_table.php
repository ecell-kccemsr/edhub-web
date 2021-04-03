<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle');
            $table->string('image');
            $table->string('url');
            $table->longText('skills')->nullable();
            $table->longText('career_outcome')->nullable();
            $table->longText('job_opportunities')->nullable();
            $table->longText('description')->nullable();
            $table->longText('course_content')->nullable();
            $table->longText('prerequisites')->nullable();
            $table->string('instructor_name')->nullable();
            $table->unsignedDouble('instructor_rating')->nullable();
            $table->unsignedInteger('instructor_reviews')->nullable();
            $table->unsignedInteger('instructor_students')->nullable();
            $table->longText('instructor_designation')->nullable();
            $table->longText('instructor_description')->nullable();
            $table->longText('FAQs');
            $table->boolean('certification');
            $table->unsignedDouble('rating');
            $table->unsignedDouble('price');
            $table->unsignedInteger('course_provider_id');
            $table->string('slug')->unique();
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
        Schema::dropIfExists('courses');
    }
}

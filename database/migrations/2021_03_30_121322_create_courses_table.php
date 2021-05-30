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
            $table->string('cid')->nullable();
            $table->string('subtitle')->nullable();
            $table->string('locale')->nullable();
            $table->longText('captions')->nullable();
            $table->longText('image')->nullable();
            $table->longText('url');
            $table->string('difficulty_level')->default('Beginner');
            $table->longText('outcome')->nullable();
            $table->longText('description')->nullable();
            $table->longText('prerequisites')->nullable();
            $table->longText('faq')->nullable();
            $table->longText('rating_distribution')->nullable();
            $table->boolean('certification');
            $table->unsignedDouble('rating');
            $table->unsignedDouble('price');
            $table->unsignedDouble('discount_price');
            $table->unsignedInteger('course_provider_id');
            $table->unsignedInteger('course_category_id')->nullable();
            $table->unsignedInteger('course_sub_category_id')->nullable();
            $table->unsignedInteger('course_topic_id')->nullable();
            $table->string('slug')->unique();
            $table->integer('discount_percentage');
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

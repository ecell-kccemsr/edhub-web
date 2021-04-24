<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionPaperSubCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_paper_sub_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedInteger('question_paper_category_id');
            $table->string('slug')->unique();
            $table->string('seo_keywords')->nullable();
            $table->string('image')->nullable();
            $table->longText('seo_description')->nullable();
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
        Schema::dropIfExists('question_paper_sub_categories');
    }
}

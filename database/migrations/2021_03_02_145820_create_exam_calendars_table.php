<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamCalendarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exam_calendars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('date');
            $table->string('image');
            $table->boolean('official');
            $table->string('url');
            $table->unsignedInteger('category_id');
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
        Schema::dropIfExists('exam_calendars');
    }
}

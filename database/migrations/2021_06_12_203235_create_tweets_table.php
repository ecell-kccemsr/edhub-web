<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTweetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tweets', function (Blueprint $table) {
            $table->id();
            $table->longText('body');
            $table->string('image')->nullable();
            $table->string('author_name')->nullable();
            $table->dateTime('published_at');
            $table->unsignedInteger('news_id');
            $table->string('tweet_url')->nullable();
            $table->string('author_username')->nullable();
            $table->string('author_profile_image')->nullable();
            $table->string('tweet_source')->nullable();
            $table->unsignedInteger('like_count')->nullable();
            $table->unsignedInteger('retweet_count')->nullable();
            $table->unsignedInteger('quote_count')->nullable();
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
        Schema::dropIfExists('tweets');
    }
}

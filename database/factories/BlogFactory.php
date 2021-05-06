<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->realText(50),
            'body' => $this->faker->paragraph,
            'image' => $this->faker->imageUrl,
            'tags' => $this->faker->word(),
            'author_name' => $this->faker->word,
            'author_image' => $this->faker->imageUrl,
            'autor_designation' => $this->faker->jobTitle,
            'read_time' => random_int(0, 60),
            'published_at' => $this->faker->dateTime,
        ];
    }
}

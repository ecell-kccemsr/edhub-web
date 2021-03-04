<?php

namespace Database\Factories;

use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = News::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title,
            'description' => $this->faker->description,
            'details' => $this->faker->details,
            'image' => $this->faker->image,
            'category_id' => NewsCategory::first() ? NewsCategory::first()->id : null,
            'subcategory_id' => NewsCategory::first() ? NewsCategory::first()->id : null,
        ];
    }
}

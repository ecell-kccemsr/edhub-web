<?php

namespace Database\Factories;

use App\Models\News;
use App\Models\NewsCategory;
use App\Models\NewsSubCategory;
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
            'title' => $this->faker->realText(50),
            'tags' => $this->faker->word(),                                            
            'description' => $this->faker->sentence,
            'details' => $this->faker->paragraph,
            'image' => $this->faker->imageUrl,
            'total_views' => random_int(0, 60),
            'category_id' => NewsCategory::inRandomOrder()->first()->id,
            'subcategory_id' => NewsSubCategory::inRandomOrder()->first()->id,
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,
            'published_by' => $this->faker->name,
            'published_at' => $this->faker->dateTime,
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\NewsCategory;
use App\Models\NewsSubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsSubCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = NewsSubCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'category_id' => NewsCategory::first() ? NewsCategory::first()->id : null,
        ];
    }
}

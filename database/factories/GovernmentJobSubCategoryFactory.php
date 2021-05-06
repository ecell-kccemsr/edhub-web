<?php

namespace Database\Factories;

use App\Models\GovernmentJobCategory;
use App\Models\GovernmentJobSubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class GovernmentJobSubCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GovernmentJobSubCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'category_id' => GovernmentJobCategory::inRandomOrder()->first()->id,
            'image' => $this->faker->imageUrl,
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,
        ];
    }
}

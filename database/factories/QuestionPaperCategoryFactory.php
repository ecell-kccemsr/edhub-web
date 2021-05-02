<?php

namespace Database\Factories;

use App\Models\QuestionPaperCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionPaperCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = QuestionPaperCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,
        ];
    }
}

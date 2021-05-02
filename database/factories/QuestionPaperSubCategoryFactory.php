<?php

namespace Database\Factories;

use App\Models\QuestionPaperCategory;
use App\Models\QuestionPaperSubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionPaperSubCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = QuestionPaperSubCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'category_id' => QuestionPaperCategory::first() ? QuestionPaperCategory::first()->id : null,
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,
            'image' => $this->faker->image,
        ];
    }
}

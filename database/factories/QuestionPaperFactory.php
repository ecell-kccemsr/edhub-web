<?php

namespace Database\Factories;

use App\Models\QuestionPaper;
use App\Models\QuestionPaperCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionPaperFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = QuestionPaper::class;

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
            'year' => $this->faker->year,
            'url' => $this->faker->url,
            'category_id' => QuestionPaperCategory::first() ? QuestionPaperCategory::first()->id : null,
        ];
    }
}

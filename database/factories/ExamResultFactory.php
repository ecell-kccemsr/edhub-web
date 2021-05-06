<?php

namespace Database\Factories;

use App\Models\ExamResult;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExamResultFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ExamResult::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'url' => $this->faker->url,
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,        
        ];
    }
}

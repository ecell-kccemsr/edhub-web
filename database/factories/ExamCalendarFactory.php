<?php

namespace Database\Factories;

use App\Models\ExamCalendar;
use App\Models\ExamCalendarCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExamCalendarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ExamCalendar::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'date' => $this->faker->date,
            'image' => $this->faker->image,
            'official' => random_int(0, 1),
            'url' => $this->faker->url,
            'category_id' => ExamCalendarCategory::inRandomOrder()->first(),
            'age_limit' => random_int(0, 60),
            'qualification' => random_int(10,12),
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,
        ];
    }
}

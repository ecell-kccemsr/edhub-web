<?php

namespace Database\Factories;

use App\Models\GovernmentJob;
use App\Models\GovernmentJobCategory;
use App\Models\GovernmentJobSubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class GovernmentJobFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GovernmentJob::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title,
            'description' => $this->faker->paragraph,
            'image' => $this->faker->image,
            'salary_and_job_positions' => $this->faker->sentence,
            'eligibility_criteria' => $this->faker->sentence,
            'syllabus' => $this->faker->sentence,
            'exam_pattern' => $this->faker->sentence,
            'cutoff' => $this->faker->sentence,
            'admit_card' => $this->faker->sentence,
            'apply_online' => $this->faker->sentence,
            'category_id' => GovernmentJobCategory::inRandomOrder()->first(),
            'subcategory_id' => GovernmentJobSubCategory::inRandomOrder()->first(),
            'age_limit' => random_int(0, 60),
            'qualification' => random_int(10,12),
            'seo_keywords' => $this->faker->sentence,
            'seo_description' => $this->faker->sentence,
        ];
    }
}

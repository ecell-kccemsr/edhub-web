<?php

namespace Database\Factories;

use App\Models\GovernmentJob;
use App\Models\GovernmentJobCategory;
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
            'description' => $this->faker->description,
            'job_positions' => $this->faker->job_positions,
            'eligibility_criteria' => $this->faker->eligibility_criteria,
            'syllabus' => $this->faker->syllabus,
            'exam_pattern' => $this->faker->exam_pattern,
            'cutoff' => $this->faker->cutoff,
            'admit_card' => $this->faker->admit_card,
            'apply_online' => $this->faker->apply_online,
            'category_id' => GovernmentJobCategory::first() ? GovernmentJobCategory::first()->id : null,
            'subcategory_id' => GovernmentJobCategory::first() ? GovernmentJobCategory::first()->id : null,
        ];
    }
}

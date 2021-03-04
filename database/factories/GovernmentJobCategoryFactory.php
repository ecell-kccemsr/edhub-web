<?php

namespace Database\Factories;

use App\Models\GovernmentJobCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class GovernmentJobCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GovernmentJobCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'image' => $this->faker->image
        ];
    }
}

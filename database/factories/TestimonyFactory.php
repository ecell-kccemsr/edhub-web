<?php

namespace Database\Factories;

use App\Models\Testimony;
use Illuminate\Database\Eloquent\Factories\Factory;

class TestimonyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Testimony::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'rating' => $this->faker->rating,
            'review' => $this->faker->review,
            'image' => $this->faker->image,
        ];
    }
}

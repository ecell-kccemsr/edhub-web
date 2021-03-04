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
            'name' => $this->faker->name,
            'category_id' => GovernmentJobCategory::first() ? GovernmentJobCategory::first()->id : null,
        ];
    }
}

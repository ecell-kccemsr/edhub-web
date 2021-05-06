<?php

namespace Database\Factories;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Model::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'commentable' => $this->faker->commentable,
            'comment' => $this->faker->comment,
            'is_approved' => $this->faker->is_approved,
            'user_id' => $this->faker->user_id,
        ];
    }
}

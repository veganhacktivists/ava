<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BadgeTask>
 */
class BadgeTaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => '(task) '.fake()->text(30),
            'description' => 'Badge description. '.fake()->sentence(),
            'completion_message' => 'Badge completion message. '.fake()->optional()->sentence(3),
            'icon_path' => fake()->imageUrl(64, 64),
            'num_votes' => fake()->numberBetween(0, 30),
            'permalink' => fake()->md5(),
        ];
    }
}

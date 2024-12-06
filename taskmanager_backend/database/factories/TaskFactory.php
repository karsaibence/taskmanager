<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake('hu_HU')->title(),
            'description' => fake('hu_HU')->sentence(),
            'end_date' => fake()->date(),
            'user_id' => User::all()->random()->user_id,
            'status' => fake('hu_HU')->randomElement(['tesztelés','folyamatban','lezárt']),
        ];
    }
}

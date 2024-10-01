<?php

namespace Database\Seeders;

use App\Models\Badge;
use App\Models\Idea;
use App\Models\TriviaAnswer;
use App\Models\TriviaQuestion;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        foreach ([
            [
                'title' => 'The Go-Getter',
                'description' => 'Answer all trivia questions',
                'icon_path' => '/sprites/badges/go-getter.svg',
                'completion_message' => 'Congrats!',
            ],
            [
                'title' => 'The Oracle',
                'description' => 'Answer all trivia questions correctly',
                'icon_path' => '/sprites/badges/oracle.svg',
                'completion_message' => 'Congrats!',
            ],
            [
                'title' => 'The Artist',
                'description' => 'Draw your first doodle!',
                'icon_path' => '/sprites/badges/artist.svg',
                'completion_message' => 'Congrats!',
            ],
            [
                'title' => 'The Subscriber',
                'description' => 'Subscribe to the newsletter',
                'icon_path' => '/sprites/badges/subscriber.svg',
                'completion_message' => 'Congrats!',
            ],
            [
                'title' => 'The Recruiter',
                'description' => 'Refer another user',
                'icon_path' => '/sprites/badges/recruiter.svg',
                'completion_message' => 'Congrats!',
            ],
            [
                'title' => 'The Innovator',
                'description' => 'Submit your first idea',
                'icon_path' => '/sprites/badges/innovator.svg',
                'completion_message' => 'Congrats!',
            ],
        ] as $badge) {
            Badge::create($badge);
        }

        $networker = Badge::create([
            'title' => 'The Networker',
            'description' => 'Meet all the team',
            'icon_path' => '/sprites/badges/networker.svg',
            'completion_message' => 'Congrats!',
        ]);

        $networker->tasks()->createMany([
            [
                'title' => 'Test',
                'description' => 'Desc',
                'icon_path' => '/sprites/badges/networker.svg',
                'completion_message' => 'congrats! You did task 1!',
                'permalink' => 'asd',
                'num_votes' => 3,
            ],
            [
                'title' => 'Test2',
                'description' => 'Desc',
                'icon_path' => '/sprites/badges/networker.svg',
                'completion_message' => 'congrats! You did task 2!',
                'permalink' => 'asd',
                'num_votes' => 3,
            ],
        ]);

        TriviaQuestion::factory(10)
            ->has(
                TriviaAnswer::factory()->state(['is_correct' => true]),
                'answers'
            )
            ->has(TriviaAnswer::factory(3), 'answers')
            ->create();

        User::factory(5)
            ->has(Idea::factory(3))
            ->create();
    }
}

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
           'name' => 'Alex',
           'email' => 'alex@gmail.com',
           'password' => Hash::make('password'),
        ]);

        Task::create([
            'time'=>'10:00',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'10:30',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'11:00',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'11:30',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'12:00',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'12:30',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'13:00',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'13:30',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'14:00',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'14:30',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'15:00',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'15:30',
            'user_id'=>1,
        ]);

        Task::create([
            'time'=>'16:00',
            'user_id'=>1,
        ]);
    }
}

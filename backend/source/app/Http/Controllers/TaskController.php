<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddTaskRequest;
use App\Http\Requests\NotifyRequest;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getTasksUser(User $user) {
        return response()->json([
            'user_id'=> $user->id,
            'user_name'=>$user->name,
            'tasks'=>$user->tasks
        ]);
    }

    public function addTask(Task $task, AddTaskRequest $request) {
        $task->description = $request->get('description');
        $task->save();
        $task->refresh();
        return response()->json([
            'task'=>$task,
        ]);
    }

    public function notify(Task $task, NotifyRequest $request) {
        $task->notify = $request->get('notify');
        $task->save();
        $task->refresh();
        return response()->json([
            'task'=>$task,
        ]);
    }
}

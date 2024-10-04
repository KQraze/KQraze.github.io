<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/users/{user}/tasks', [TaskController::class, 'getTasksUser']);
Route::post('/tasks/{task}/add', [TaskController::class, 'addTask']);
Route::post('/tasks/{task}/notify', [TaskController::class, 'notify']);

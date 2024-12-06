<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/tasks',[TaskController::class, 'index']);
Route::get('/users',[UserController::class, 'index']);
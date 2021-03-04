<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\NewsController;
use App\Http\Controllers\API\ExamCalendarController;
use App\Http\Controllers\API\GovernmentJobController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/current_affairs',[CurrentAffairController::class,'get']);

//Government Job
Route::get('/government_jobs',[GovernmentJobController::class,'get']);
Route::get('/government_jobs/categories',[GovernmentJobController::class,'category']);
Route::get('/government_jobs/sub_categories',[GovernmentJobController::class,'sub_category']);

//News
Route::get('/news',[NewsController::class,'get']);
Route::get('/news/categories',[NewsController::class,'category']);
Route::get('/news/sub_categories',[NewsController::class,'sub_category']);

//ExamCalendar
Route::get('/examcalendar',[ExamCalendarController::class,'get']);


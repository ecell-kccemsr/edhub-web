<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\NewsController;
use App\Http\Controllers\API\ExamCalendarController;
use App\Http\Controllers\API\GovernmentJobController;
use App\Http\Controllers\API\QuestionPaperController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\EmailVerificationController;


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

//Auth Controller
Route::post('/auth/signup',[AuthController::class,'signUp']);
Route::post('/auth/login',[AuthController::class,'login']);
Route::post('/auth/logout',[AuthController::class,'logout']);

//Email Verification
Route::get('/auth/verify-email',[EmailVerificationController::class,'verify']);

//Forgot Password
Route::post('/reset-link',[ForgotPasswordController::class,'resetLink']);
Route::get('/reset-password',[ForgotPasswordController::class,'verify']);
Route::post('/change-password',[ForgotPasswordController::class,'changePassword']);

//Government Job
Route::get('/government_jobs',[GovernmentJobController::class,'get']);
Route::get('/government_jobs/categories',[GovernmentJobController::class,'categories']);
Route::get('/government_jobs/sub_categories',[GovernmentJobController::class,'sub_categories']);
Route::get('/government_jobs/{government_job}',[GovernmentJobController::class,'show']);

//News
Route::get('/news',[NewsController::class,'get']);
Route::get('/news/categories',[NewsController::class,'categories']);
Route::get('/news/sub_categories',[NewsController::class,'sub_categories']);
Route::get('/news/{news}',[NewsController::class,'show']);

//ExamCalendar
Route::get('/examcalendar',[ExamCalendarController::class,'get']);
Route::get('/examcalendar/categories',[ExamCalendarController::class,'categories']);
Route::get('/examcalendar/{exam_calendars}',[ExamCalendarController::class,'show']);

//Question Paper
Route::get('/questionpapers',[QuestionPaperController::class,'get']);
Route::get('/questionpapers/categories',[QuestionPaperController::class,'categories']);
Route::get('/questionpapers/{question_paper}',[QuestionPaperController::class,'show']);


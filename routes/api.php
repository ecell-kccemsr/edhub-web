<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\NewsController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\API\SearchController;
use App\Http\Controllers\API\TestimonyController;
use App\Http\Controllers\API\ExamResultController;
use App\Http\Controllers\API\RequestCallController;
use App\Http\Controllers\API\ExamCalendarController;
use App\Http\Controllers\API\GovernmentJobController;
use App\Http\Controllers\API\QuestionPaperController;
use App\Http\Controllers\API\CourseProviderController;
use App\Http\Controllers\API\CourseWishlistController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\API\RegisterForFreeUpdatesController;
use App\Http\Controllers\API\TweetController;

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

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/auth/user', [AuthController::class,'user']);
    Route::post('/auth/update',[AuthController::class,'update']);
    Route::get('/wishlist',[CourseWishlistController::class,'get']);
    Route::delete('/wishlist',[CourseWishlistController::class,'delete']);
    Route::post('/wishlist',[CourseWishlistController::class,'add']);
    Route::post('/auth/resend-email',[AuthController::class,'resend_email']);
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
Route::get('/news/trending',[NewsController::class,'trending']);
Route::get('/news/categories',[NewsController::class,'categories']);
Route::get('/news/sub_categories',[NewsController::class,'sub_categories']);
Route::get('/news/{news}',[NewsController::class,'show']);
Route::get('/news/{news}/comments',[NewsController::class,'getComments']);
Route::group(['middleware' => 'auth:api'], function() {
  Route::post('/news/{news}/comments',[NewsController::class,'addComment']);
  Route::post('news/{news}/like/toggle',[NewsController::class,'toggleLike']);
});

//ExamCalendar
Route::get('/examcalendar',[ExamCalendarController::class,'get']);
Route::get('/examcalendar/categories',[ExamCalendarController::class,'categories']);
Route::get('/examcalendar/{exam_calendar}',[ExamCalendarController::class,'show']);

//Question Paper
Route::get('/questionpapers',[QuestionPaperController::class,'get']);
Route::get('/questionpapers/categories',[QuestionPaperController::class,'categories']);
Route::get('/questionpapers/sub_categories',[QuestionPaperController::class,'sub_categories']);
Route::get('/questionpapers/{question_paper}',[QuestionPaperController::class,'show']);

//ExamResult
Route::get('/examresults',[ExamResultController::class,'get']);

//RegisterForFreeUpdates
Route::post('/register_for_free_updates/add',[RegisterForFreeUpdatesController::class,'add']);

//Course
Route::get('/courses',[CourseController::class,'get']);
Route::get('/courses',[CourseController::class,'add']);
Route::get('/courses/categories',[CourseController::class,'categories']);
Route::get('/courses/{course}',[CourseController::class,'show']);
Route::get('/courses/{course}/curriculum',[CourseController::class,'curriculum']);
Route::get('/courses/{course}/reviews',[CourseController::class,'reviews']);

//CourseProvider
Route::get('/course-providers',[CourseProviderController::class,'get']);
Route::get('/course-providers/{courseprovider}',[CourseProviderController::class,'show']);

//Testimony
Route::get('/testimonies',[TestimonyController::class,'get']);
Route::get('/testimonies/{testimony}',[TestimonyController::class,'show']);

//Blog
Route::get('/blogs',[BlogController::class,'get']);
Route::get('/blogs/{blog}',[BlogController::class,'show']);
Route::get('/blogs/{blog}/comments',[BlogController::class,'getComments']);
Route::group(['middleware' => 'auth:api'], function() {
  Route::post('/blogs/{blog}/like/toggle',[BlogController::class,'toggleLike']);  
  Route::post('/blogs/{blog}/comments',[BlogController::class,'addComment']);
});

//Search 
Route::get('/search',[SearchController::class,'search']);

//Request a call
Route::post('/request_call/add',[RequestCallController::class,'add']);

//Tweet
Route::get('/tweets',[TweetController::class,'get']);
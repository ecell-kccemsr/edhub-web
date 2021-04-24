<?php

use App\Http\Controllers\API\SocialLoginController;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/login/{provider}/redirect', [SocialLoginController::class,'redirect']);
Route::get('/login/{provider}/callback', [SocialLoginController::class,'callback']);

Route::view('/', 'app');
Route::view('/login', 'app');
Route::view('/register', 'app');



#newroutes for news
Route::view('/news', 'app');
Route::view('/news/{news_slug}','app');

#newroutes for questionpaper
Route::view('/questionpaper', 'app');
Route::view('/questionpaper/next', 'app');


#newroutes for blog
Route::view('/blogs', 'app');
Route::view('/blog/{blog_slug}', 'app');


Route::view('/govermentjobs', 'app');
// Route::view('/govermentjobs/{category_slug}', 'app');
Route::view('/govermentjobs/next', 'app');



Route::view('/exam/calendar', 'app');
Route::view('/landingPage','app');
Route::view('/courseDetail/{course_slug}','app');
Route::view('/profile/basic','app');
Route::view('/profile/wishlist','app');
Route::view('/profile/my-courses','app');


Route::view('/notification','app');
Route::view('/compare','app');
Route::view('/cart','app');
Route::view('/checkout','app');
Route::view('/course-category','app');
Route::view('/guide','app');
Route::view('/degree','app');
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

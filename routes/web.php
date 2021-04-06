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
Route::view('/news', 'app');
Route::view('/news/{category_slug}', 'app');
Route::view('/news/{category_slug}/{subcategory_slug}', 'app');
Route::view('/news/{category_slug}/{subcategory_slug}/{news_slug}','app');

Route::view('/govermentjobs', 'app');
Route::view('/govermentjobs/{category_slug}', 'app');
Route::view('/govermentjobs/{category_slug}/{subcategory_slug}/{slug}', 'app');

Route::view('/questionpaper', 'app');
Route::view('/questionpaper/{category_slug}', 'app');

Route::view('/exam/calendar', 'app');
Route::view('/landingPage','app');
Route::view('/profile','app');
Route::view('/profile-1','app');
Route::view('/profile-2','app');


Route::view('/notification','app');
Route::view('/compare','app');
Route::view('/cart','app');
Route::view('/checkout','app');
Route::view('/courseDetail','app');
Route::view('/course-category','app');
Route::view('/guide','app');
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

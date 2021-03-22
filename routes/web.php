<?php

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

Route::view('/', 'app');
Route::view('/login', 'app');
Route::view('/register', 'app');
Route::view('/news', 'app');
Route::view('/news/{category_slug}', 'app');
Route::view('/news/{category_slug}/{subcategory_slug}', 'app');
Route::view('/news/{category_slug}/{subcategory_slug}/{news_slug}','app');

Route::view('/govermentjobs', 'app');
Route::view('/govermentjobs/{category_slug}', 'app');
Route::view('/govermentjobs/{category_slug}/{subcategory_slug}', 'app');

Route::view('/questionpaper', 'app');
Route::view('/questionpaper/{category_id}', 'app');


Route::view('/exam/calendar', 'app');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

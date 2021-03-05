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
Route::view('/news', 'app');
Route::view('/newscategory/view/{category_id}', 'app');
Route::view('/newssubcategory/view/{sub_category_id}', 'app');
Route::view('/govermentjobs', 'app');
Route::view('/bankjob', 'app');
Route::view('/bankjoblast', 'app');
Route::view('/questionpaper', 'app');
Route::view('/questionpaper2', 'app');





Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

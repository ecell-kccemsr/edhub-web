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
Route::view('/govermentjobs', 'app');
<<<<<<< HEAD
Route::view('/bankjob', 'app');
Route::view('/bankjoblast', 'app');
Route::view('/questionpaper', 'app');
Route::view('/questionpaper2', 'app');




=======
Route::view('/examcalendar', 'app');
>>>>>>> 3ee0bd8b16c77fb1aaa5866f8f087ae9b1a244a2

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

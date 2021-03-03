<?php

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


=======
>>>>>>> afef47a01e13f01b918c7fc9de66497176fb272e

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

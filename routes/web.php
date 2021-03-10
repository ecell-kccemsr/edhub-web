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
Route::view('/newscategory/view/{category_id}', 'app');
Route::view('/newssubcategory/view/{sub_category_id}', 'app');
Route::view('/newsdetails', 'app');

Route::view('/govermentjobs', 'app');
Route::view('/govermentjobs/view/{category_id}', 'app');
Route::view('/govermentjobs/view/category/{category_id}', 'app');
Route::view('/govermentjobs/view/sub/category/{subcategory_id}', 'app');
Route::view('/questionpaper', 'app');
Route::view('/questionpaper2', 'app');





Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

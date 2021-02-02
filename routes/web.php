<?php

use Illuminate\Support\Facades\Auth;
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

Route::get('/', function () {
    return view('welcome');
    // return view('layouts/app');
})->where('any', '.*')->middleware('auth');
// })->where('any', '.*')->middleware('auth');

Route::group(['namespace' => 'App\Http\Controllers\Auth'], function() {
    Route::get('login', 'LoginController@showLoginForm')->name('login');
    Route::post('login', 'LoginController@login')->name('login');
    Route::get('logout', 'LoginController@logout')->name('logout');
});

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// 11/10に追記コントローラーの修正が必要
// Route::get('/{item_posts}', 'App\Http\Controllers\ItemController@index');


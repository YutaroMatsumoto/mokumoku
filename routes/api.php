<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\GroupController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/user',function (Request $request) {
	
// 	$users = App\Models\User::all();
	
// 	return response()->json(['users' => $users]);ß

// });

// Route::get('/user/{user}', function(App\Models\User $user){

// 	return response()->json(['user' => $user]);

// });

Route::group(['middleware' => 'api'], function() {
	// グループ
	Route::get('get', 'App\Http\Controllers\GroupController@index');
	Route::post('add', 'App\Http\Controllers\GroupController@create');
	Route::post('update/{id}', 'App\Http\Controllers\GroupController@update');
	Route::get('show/{id}', 'App\Http\Controllers\GroupController@show');

	// 投稿
	Route::get('get-posts/{id}', 'App\Http\Controllers\PostController@index');
	Route::post('add-post', 'App\Http\Controllers\PostController@create');
	Route::get('show-post/{id}', 'App\Http\Controllers\PostController@show');
	Route::post('update-post/{id}', 'App\Http\Controllers\PostController@update');
	Route::post('delete-post/{id}', 'App\Http\Controllers\PostController@destroy');
});
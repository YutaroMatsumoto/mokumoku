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
	Route::get('get', 'App\Http\Controllers\GroupController@index');
	Route::post('add', 'App\Http\Controllers\GroupController@create');
	// Route::post('edit', 'App\Http\Controllers\GroupController@edit');
	Route::get('show/{id}', 'App\Http\Controllers\GroupController@show');
	Route::get('getposts/{id}', 'App\Http\Controllers\PostController@index');
});
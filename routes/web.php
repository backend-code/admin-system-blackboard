<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });


// Route::get('/home', 'HomeController@index')->name('home');

// Route::view('/', 'index');

// Route::get('/', function () {
//     return view('app');
// });
Route::view('/webview/{path?}', 'webview');
Route::view('/admin/{path?}', 'admin');
Route::view('/{path?}', 'app');
Route::group(['middleware' => ['web']], function () {
// Login Socialite
Route::get ('/auth/redirect/{provider}', 'Auth\SocialAuthController@redirectToProvider');

});
// Route::group(['middleware' => 'auth:api'], function () {
// });
Auth::routes();
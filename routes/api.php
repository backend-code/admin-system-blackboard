<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/verified-only', function(Request $request){

    dd('your are verified', $request->user()->name);
})->middleware('auth:api','verified');

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('register', 'Auth\RegisterController@register');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset');
Route::get('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Route::get('/email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');

Route::group(['middleware' => 'auth:api'], function () {
    
Route::get ('/callback/{provider}', 'Auth\SocialAuthController@handleProviderCallback');
});

// Route::group(['middleware' => 'auth:api'], function() {
    Route::get('v1/menu/category', 'UI\SubmenuController@index');
    Route::get('v1/menu/category/{id}', 'UI\SubmenuController@show');
    Route::post('v1/menu/category', 'UI\SubmenuController@create');
    Route::put('v1/menu/category/{id}', 'UI\SubmenuController@update');
    Route::delete('v1/menu/category/{id}', 'UI\SubmenuController@delete');

    Route::get('v1/category/list', 'UI\ListAllMenuController@index');
    Route::get('v1/category/list/{id}', 'UI\ListAllMenuController@show');
    Route::post('v1/category/list', 'UI\ListAllMenuController@create');
    Route::put('v1/category/list/{id}', 'UI\ListAllMenuController@update');
    Route::delete('v1/category/list/{id}', 'UI\ListAllMenuController@delete');
// });
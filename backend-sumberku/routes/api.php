<?php

use Illuminate\Http\Request;

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, PATCH, DELETE');

header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization, auth');
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'user', ], function () {

    // The registration and login requests doesn't come with tokens
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');

});

Route::resource('users','UserController');
Route::resource('promos','PromoController');
Route::post('promos/{id}','PromoController@updatePromo');
Route::resource('vouchers','VoucherController');
Route::post('vouchers/{id}','VoucherController@updateVoucher');
Route::resource('categories','CategoryController');
Route::resource('promodetails','PromoDetailController');
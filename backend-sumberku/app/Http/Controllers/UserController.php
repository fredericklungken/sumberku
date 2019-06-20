<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades;
use JWTAuth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::where('id',$id)->first();

        $validator = Validator::make($request->all(),
            [
                "username" => 'unique:users,username,'.$id.',id',
                "email" => 'unique:users,email,'.$id.',id',
                "phone" => 'unique:users,phone,'.$id.',id'
            ]
        );

        if($validator ->fails()){
            return $validator->errors();
        }
        $user->username = $request->username;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->gender = $request->gender;
        $user->date = $request->date;

        $user->save();
        dd($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::where('id',$id)->delete();
    }

    public function login(Request $request)
    {
        $credentials = null;
        $userLogin = null;
        if(is_numeric($request->user)){
//            $credentials = ['phone' => $request->user, 'password' => $request->password];
            $user = User::where('phone', $request->user)->get()->first();
        }
        elseif(filter_var($request->user,FILTER_VALIDATE_EMAIL)){
//            $credentials = ['email' => $request->user, 'password' => $request->password];
            $user = User::where('email',$request->user)->get()->first();
        }
        else{
//            $credentials  =  ['username' => $request->user, 'password'=> $request->passsword];
            $user = User::where('username',$request->user)->get()->first();
        }

        if($user && Hash::check($request->password,$user->password)){
//            $response = ['success' => true, 'data' => 'Record is exist'];
            $response = true;
            $user->updated_at = Carbon::now();
            $user->save();
        }
//        if(!$token  =User::where($credentials)){
//            $response = ['success' => false, 'data' => 'Record doesnt exist'];
//        }

        else{
            //   response = ['success' => false, 'data' => 'Record doesnt exist'];
            $response = false;
        }

        return response()->json([
            'token' => $response,
            'id' => $user->id,
            'name' => $user->name,
            'username' => $user->username,
            'email' => $user->email,
            'phone' => $user->phone,

        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                "username" => "required| unique:users,username",
                "email" => "required| unique:users,email",
                "phone" => "required| unique:users,phone"
            ]
        );

        if($validator ->fails()){
            return $validator->errors();
        }
        $payload = [
            'password' =>bcrypt($request->password),
            'email' => $request->email,
            'gender'=> $request->gender,
            'username' => $request->username,
            'phone' => $request->phone,
            'name' => $request->name,
            'date' => $request->date
//            'auth_token' => '',

        ];

        $user = new User($payload);
        $user->save();
        //    dd($payload);
//        $token = \Tymon\JWTAuth\Facades\JWTAuth::fromUser($user);
//
//        return $token;
    }
}

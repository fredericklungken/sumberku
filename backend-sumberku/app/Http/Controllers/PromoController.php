<?php

namespace App\Http\Controllers;

use App\Promo;
use Illuminate\Http\Request;

class PromoController extends Controller
{
    //php artisan storage: link
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Promo::all();
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
        $promo = new Promo();
        $promo->name = $request->name;
        if($request->has('image')) {
            $url = $request->image->storeAs('/public',$request->image->getClientOriginalName());
            $name = $request->image->getClientOriginalName();
            $promo->image = 'http://localhost:8000/storage/'.$name;
        }
        $promo->start = $request->start;
        $promo->end = $request->end;

        $promo->save();

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

    }

    public function updatePromo(Request $request, $id)
    {
        $promo = Promo::where('id',$id)->first();

        $promo->name = $request->name;
        if($request->has('image')) {
            $url = $request->image->storeAs('/public',$request->image->getClientOriginalName());
            $name = $request->image->getClientOriginalName();
            $promo->image = 'http://localhost:8000/storage/'.$name;
        }
        $promo->start = $request->start;
        $promo->end = $request->end;

        $promo->save();
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
        Promo::where('id',$id)->delete();
        return [
            "message" => "success"
        ];
    }
}

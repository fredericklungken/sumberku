<?php

namespace App\Http\Controllers;

use App\Voucher;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Voucher::all();
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
        //

        $validator = Validator::make($request->all(),
            [
                "code" => "required| unique:vouchers,code",
                "discount" => "required|numeric|between:0,1.00"
            ]
        );
        if($validator->fails()){
            return $validator->errors();
        }
        $voucher = new Voucher();
        $voucher->name = $request->name;
        $voucher->code = $request->code;
        $voucher->discount = $request->discount;
        if($request->has('image')) {
            $url = $request->image->storeAs('/public',$request->image->getClientOriginalName());
            $name = $request->image->getClientOriginalName();
            $voucher->image = 'http:    //localhost:8000/storage/'.$name;
        }
        $voucher->start = $request->start;
        $voucher->end = $request->end;

        $voucher->save();

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
        //
    }

    public function updateVoucher(Request $request,$id)
    {

        $validator = Validator::make($request->all(),
            [
                "code" => 'unique:vouchers,code,'.$id.',id',
                "discount" => "required|numeric|between:0,1.00"
            ]
        );
        if($validator->fails()){
            return $validator->errors();
        }

        $voucher = Voucher::where('id',$id)->first();
        $voucher->name = $request->name;
        $voucher->code = $request->code;
        $voucher->discount = $request->discount;
        if($request->has('image')) {
            $url = $request->image->storeAs('/public',$request->image->getClientOriginalName());
            $name = $request->image->getClientOriginalName();
            $voucher->image = 'http://localhost:8000/storage/'.$name;
        }
        $voucher->start = $request->start;
        $voucher->end = $request->end;

        $voucher->save();

    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $voucher = Voucher::where('id',$id)->delete();
        return [
            "message" => "success"
        ];
    }
}

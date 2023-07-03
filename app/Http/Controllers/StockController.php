<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;

class StockController extends Controller
{
    //

    public function store(Request $request) 
    {
        $request->validate([
            'stock_name' => 'required',
            'stock_code' => 'required',
            'buy_price' => 'required',
            'buy_quantity' => 'required',
            'buy_date' => 'required'
        ]);

        $stock = Stock::create([
            'stock_name' => $request->stock_name,
            'stock_code' => $request->stock_code,
            'buy_price' => $request->buy_price,
            'buy_quantity' => $request->buy_quantity,
            'buy_date' => $request->buy_date,
            'sell_price' => 0,
            'sell_quantity' => 0,
            'sell_date' => $request->buy_date,
        ]);

        event(new Registered($stock));
    }
}

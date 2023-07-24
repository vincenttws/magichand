<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Expr\Cast\Object_;

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
        ]);

        $buyInfo = array();
        for ($i = 0; $i < count($request->buy_price); $i++) {
            array_push($buyInfo, (Object) ["buy_price" => $request->buy_price[$i], "buy_quantity" => $request->buy_quantity[$i]]);
        }

        $stock = Stock::create([
            'stock_name' => $request->stock_name,
            'stock_code' => $request->stock_code,
            'buy_info' => json_encode($buyInfo)
        ]);

        event(new Registered($stock));

        return redirect('/portfolios');
    }

    public function retrieveAll() {
        $stocks = Stock::all();
        return Inertia::render('Portfolios', [
            'stocks' => $stocks
        ]);
    }

    public function edit(Request $request) {
        $stock = Stock::where('id', $request->id)->first();
        return Inertia::render('StockForm', [
            'id' => $request->id,
            'stock' => $stock,
        ]);
    }

    public function update(Request $request) {
        $request->validate([
            'stock_name' => 'required',
            'stock_code' => 'required',
            'buy_price' => 'required',
            'buy_quantity' => 'required',
        ]);

        $buyInfo = array();
        for ($i = 0; $i < count($request->buy_price); $i++) {
            array_push($buyInfo, (Object) ["buy_price" => $request->buy_price[$i], "buy_quantity" => $request->buy_quantity[$i]]);
        }

        Stock::where('id', $request->id)->first()->update([
            'stock_name' => $request->stock_name,
            'stock_code' => $request->stock_code,
            'buy_info' => json_encode($buyInfo)
        ]);

        return redirect('/portfolios');
    }

    public function delete(Request $request) {
        Stock::where('id', $request->id)->first()->delete();
        return redirect('/portfolios');
    }
}

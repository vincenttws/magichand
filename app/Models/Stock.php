<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'stock_code',
        'stock_name',
        'buy_date',
        'buy_quantity',
        'buy_price',
        'sell_date',
        'sell_quantity',
        'sell_price'
    ];
}

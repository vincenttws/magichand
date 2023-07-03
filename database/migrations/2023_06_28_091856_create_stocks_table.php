<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("stock_code");
            $table->string("stock_name");
            $table->date("buy_date");
            $table->integer("buy_quantity");
            $table->double("buy_price");
            $table->date("sell_date");
            $table->integer("sell_quantity");
            $table->double("sell_price");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // アイテム（ホーム画面に表示するジャンル）
        Schema::create('items', function (Blueprint $table) {
            $table->bigIncrements('id');
            // $table->unsignedBigInteger('genre_id')->comment('ジャンルid');
            $table->string('name')->comment('アイテム名');
            $table->string('name_en')->comment('アイテム名(英語)');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}

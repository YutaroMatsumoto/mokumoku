<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            [
                'name' => 'デスク',
                'name_en' => 'Desk'
            ],
            [
                'name' => 'イス',
                'name_en' => 'Chair'
            ],
            [
                'name' => 'パソコン',
                'name_en' => 'PC'
            ],
            [
                'name' => 'ライト',
                'name_en' => 'Light'
            ],
            [
                'name' => 'モニター',
                'name_en' => 'Monitor'
            ],
            [
                'name' => 'スタンド',
                'name_en' => 'Stand'
            ],
            [
                'name' => 'その他',
                'name_en' => 'Others'
            ]
        ]);
    }
}

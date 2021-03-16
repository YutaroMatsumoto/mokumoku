<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class GroupController extends Controller
{
    // use AuthenticatesUsers;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $groups = Group::all();
        // ログイン中のユーザー情報
        $user = Auth::user();
        logger('userとれてる？');
        logger($user);
        logger('userとれてる？');
        // if(Auth::check()) {
        if(Auth::user()) {
            logger('ログインしているよ');
            logger('ログインしているよ');
        } else {
            logger('ログインしていないよ');
            logger('ログインしていないよ');

        }

        return $groups;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $group = new Group;
        $group->user_id = 1;
        $group->name = $request->input('name');
        $group->detail = $request->input('detail');
        $group->save();

        // ここは、後ほどユーザーに紐づくグループを取得する処理に修正が必要
        $groups = Group::all();
        return $groups;
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $group = Group::find($id);
        return $group;
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
        $group = Group::find($id);

        $group->name = $request->input('name');
        $group->detail = $request->input('detail');
        $group->save();

        $updated_group = Group::with('posts')->find($id);

        return $updated_group;
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
    }
}

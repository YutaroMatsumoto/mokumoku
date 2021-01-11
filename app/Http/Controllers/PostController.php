<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        // 削除されていない投稿のみを取得する
        $group_posts = Group::with(['posts' => function ($query) {
            $query->where('delete', '=', 0);
        }])->find($id);

        return $group_posts;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user_id = 1;
        $today = date('Y-m-d');
        $post = new Post;
        $post->user_id = 1;
        $post->group_id = $request->input('group_id');
        $post->title = $request->input('title');
        $post->date = $today;
        $post->content = $request->input('content');

        $post->save();
        return;
        // $posts = post::all();
        // return $posts;
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
        // $post = Post::find($id);
        $post = new Post;
        $result = $post->select('id' ,'title', 'content')->where('id', '=', $id)->first();
        
        return $result;
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
        $post = Post::find($id);
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();
        
        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        logger('削除機能うごいているよ');
        logger('削除機能うごいているよ');
        $post = Post::find($id);
        $post->delete = 1;
        $post->save();

        return;
    }
}

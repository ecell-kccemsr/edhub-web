<?php

namespace App\Http\Controllers\API;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Http\Resources\CommentResource;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function get(Request $request)
    {
        $blogs = Blog::paginate($request->input('per_page',10));
        return BlogResource::collection($blogs);
    }

    public function show($blog)
    {
        $blog = Blog::where('id',$blog)->orWhere('slug',$blog)->firstOrFail();
        return new BlogResource($blog);
    }

    public function toggleLike($blog)
    {
        $blog = Blog::where('id',$blog)->orWhere('slug',$blog)->firstOrFail();
        Auth::user()->toggleLike($blog);
        return new BlogResource($blog);
    }

    public function getComments($blog, Request $request)
    {
        $blog = Blog::where('id',$blog)->orWhere('slug',$blog)->firstOrFail();
        return CommentResource::collection($blog->comments()->paginate($request->input('per_page',10)));
    }

    public function addComment($blog, Request $request)
    {
        $blog = Blog::where('id',$blog)->orWhere('slug',$blog)->firstOrFail();
        $blog->commentAsUser(Auth::user(), $request->input('comment', ''));
        return new BlogResource($blog);
    }
}

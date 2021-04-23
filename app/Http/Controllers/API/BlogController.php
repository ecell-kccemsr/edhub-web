<?php

namespace App\Http\Controllers\API;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;

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
}

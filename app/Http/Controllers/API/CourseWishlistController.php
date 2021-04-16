<?php

namespace App\Http\Controllers\API;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseWishlist;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CourseResource;
use App\Http\Resources\CourseResourceCollection;

class CourseWishlistController extends Controller
{
    public function add(Request $request)
    {
        $wishlist = new CourseWishlist();
        $wishlist->course_id = $request->input('course_id');
        $wishlist->user_id = Auth::user()->id;
        $wishlist->save();
        return new CourseResource($wishlist->course);
    }
    public function delete(Request $request)
    {
        $wishlist = CourseWishlist::where('course_id',$request->input('course_id'))->firstorFail();
        $wishlist->delete();
        return new CourseResource($wishlist->course);
    }
    public function get(Request $request)
    {
        $courses = Auth::user()->course_wishlist();
        return new CourseResourceCollection($courses->paginate($request->input('per_page',10)));
    }
}
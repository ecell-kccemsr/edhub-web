<?php

namespace App\Http\Controllers\API;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseCategoryResource;
use App\Http\Resources\CourseResource;
use App\Http\Resources\CourseResourceCollection;
use App\Http\Resources\CourseReviewResourceCollection;
use App\Http\Resources\CourseCurriculumResourceCollection;
use App\Models\CourseCategory;

class CourseController extends Controller
{
    public function get(Request $request)
    {
        $courses = Course::query();
        if($request->has('course_provider_id')) {
            $courses = $courses->where('course_provider_id',$request->input('course_provider_id'));
        }
        if($request->has('course_category_id')) {
            $courses = $courses->where('course_category_id',$request->input('course_category_id'));
        }
        if($request->has('course_sub_category_id')) {
            $courses = $courses->where('course_sub_category_id',$request->input('course_sub_category_id'));
        }
         if($request->has('price_min')) {
            $courses = $courses->where('price', '>=', $request->input('price_min'));
        }
        if($request->has('price_max')) {
            $courses = $courses->where('price', '<=', $request->input('price_max'));
        }
        if($request->has('rating')) {
            $courses = $courses->where('rating','>=', $request->input('rating'));
        }
        
        return new CourseResourceCollection($courses->paginate($request->input('per_page',10)));
    }

    public function show($course)
    {
        $course = Course::where('id',$course)->orWhere('slug',$course)->firstOrFail();
        return new CourseResource($course);
    }

    public function curriculum($course, Request $request)
    {
        $course = Course::where('id',$course)->orWhere('slug',$course)->firstOrFail();
        return new CourseCurriculumResourceCollection($course->course_curriculum()->paginate($request->input('per_page',10)));
    }
     
    public function reviews($course, Request $request)
    {
        $course = Course::where('id',$course)->orWhere('slug',$course)->firstOrFail();
        return new CourseReviewResourceCollection($course->course_reviews()->paginate($request->input('per_page',10)));
    }

    public function categories(Request $request)
    {
        $query = CourseCategory::paginate($request->input('per_page',10));
        return CourseCategoryResource::collection($query);
    }
}

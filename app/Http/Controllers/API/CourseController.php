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
use App\Http\Resources\CurriculumChapterResource;
use App\Models\CourseCategory;
use App\Models\CurriculumChapter;

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
        if($request->has('course_topic_id')) {
            $courses = $courses->where('course_topic_id',$request->input('course_topic_id'));
        }   
        if($request->has('difficulty_level')) {
            $courses = $courses->where('difficulty_level',$request->input('difficulty_level'));
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
        if($request->has('search')) {
            $courses = $courses->where('title','like','%' . $request->input('search') . '%');
        }
        if($request->has('trending')) {
            $courses = $courses->orderBy('rating', 'desc');
        }
        if($request->has('locale')){
            $courses = $courses->where('locale',$request->input('locale'));
        }
        if($request->has('certification')){
            $courses = $courses->where('certification',$request->input('certification'));
        }
        if($request->has('discount'))
        {
            $discount_price = ($courses->price*$request->input('discount'))/100;
            $courses = $courses->where('discount_price',$discount_price);
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
        return CurriculumChapterResource::collection($course->course_chapters()->paginate($request->input('per_page',10)));
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

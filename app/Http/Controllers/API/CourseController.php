<?php

namespace App\Http\Controllers\API;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Http\Resources\CourseResourceCollection;
use App\Http\Resources\CourseReviewResourceCollection;
use App\Http\Resources\CourseCurriculumResourceCollection;

class CourseController extends Controller
{
    public function get(Request $request)
    {
        $courses = Course::paginate($request->input('per_page',10));
        return new CourseResourceCollection($courses);
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
}

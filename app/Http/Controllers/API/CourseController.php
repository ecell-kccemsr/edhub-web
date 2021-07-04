<?php

namespace App\Http\Controllers\API;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Models\CourseProvider;
use App\Models\CourseSubCategory;
use App\Models\CurriculumChapter;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Http\Resources\CourseCategoryResource;
use TeamTNT\TNTSearch\Classifier\TNTClassifier;
use App\Http\Resources\CourseResourceCollection;
use App\Http\Resources\CurriculumChapterResource;
use App\Http\Resources\CourseReviewResourceCollection;
use App\Http\Resources\CourseCurriculumResourceCollection;

class CourseController extends Controller
{
    public function get(Request $request)
    {
        $courses = Course::query();
        if ($request->has('course_provider_id')) {
            $courses = $courses->where('course_provider_id', $request->input('course_provider_id'));
        }
        if ($request->has('course_category_id')) {
            $courses = $courses->where('course_category_id', $request->input('course_category_id'));
        }
        if ($request->has('course_sub_category_id')) {
            $courses = $courses->where('course_sub_category_id', $request->input('course_sub_category_id'));
        }
        if ($request->has('course_topic_id')) {
            $courses = $courses->where('course_topic_id', $request->input('course_topic_id'));
        }
        if ($request->has('difficulty_level')) {
            $courses = $courses->where('difficulty_level', $request->input('difficulty_level'));
        }
        if ($request->has('price_min')) {
            $courses = $courses->where('price', '>=', $request->input('price_min'));
        }
        if ($request->has('price_max')) {
            $courses = $courses->where('price', '<=', $request->input('price_max'));
        }
        if ($request->has('rating')) {
            $courses = $courses->where('rating', '>=', $request->input('rating'));
        }
        if ($request->has('search')) {
            $courses = $courses->where('title', 'like', '%' . $request->input('search') . '%');
        }
        if ($request->has('trending')) {
            $courses = $courses->orderBy('rating', 'desc');
        }
        if ($request->has('locale')) {
            $courses = $courses->where('locale', $request->input('locale'));
        }
        if ($request->has('certification')) {
            $courses = $courses->where('certification', $request->input('certification'));
        }
        if ($request->has('discount_percentage')) {
            $courses = $courses->where('discount_percentage', '>=', $request->input('discount_percentage'));
        }
        if ($request->has('sugessted')) {
            $courses = $courses->inRandomOrder();
        }
        return new CourseResourceCollection($courses->paginate($request->input('per_page', 10)));
    }

    public function add(Request $request)
    {
        $course = Course::where('cid', $request->input('cid'))->first();
        if ($course == null) {
            $course = new Course();
        }
        $course->title = $request->input('title');
        $course->cid = $request->input('cid');
        $course->subtitle = $request->input('subtitle');
        $course->image = $request->input('image');
        $course->url = $request->input('url');
        $course->description = $request->input('description');
        $course->price = $request->input('price');
        $course->discount_price = $request->input('discount_price');
        $course->certification = true;
        $course->rating = '0';
        $course->generateSlug();
        $course_provider = CourseProvider::where('name', $request->input('course_provider'))->first();
        $course->course_provider_id = $course_provider->id;

        // Train Model
        $classifier = new TNTClassifier();
        foreach (CourseSubCategory::all() as $sub_category) {
            $classifier->learn($sub_category->name, $sub_category->id);
            $tags = explode(',', $sub_category->tags);
            foreach ($tags as $tag) {
                $classifier->learn($tag, $sub_category->id);
            }
        }

        // Predict Topic
        $guess = $classifier->predict($course->title);
        if (isset($guess['label'])) {
            $sub_category = CourseSubCategory::find($guess['label']);
            $course->course_sub_category_id = $sub_category->id;
            $course->course_category_id = $sub_category->course_category_id;
        }
        $course->save();
        return new CourseResource($course);
    }

    public function show($course)
    {
        $course = Course::where('id', $course)->orWhere('slug', $course)->firstOrFail();
        $course->increment('total_hits',1);
        return new CourseResource($course);
    }

    public function curriculum($course, Request $request)
    {
        $course = Course::where('id', $course)->orWhere('slug', $course)->firstOrFail();
        return CurriculumChapterResource::collection($course->course_chapters()->paginate($request->input('per_page', 10)));
    }

    public function reviews($course, Request $request)
    {
        $course = Course::where('id', $course)->orWhere('slug', $course)->firstOrFail();
        return new CourseReviewResourceCollection($course->course_reviews()->paginate($request->input('per_page', 10)));
    }

    public function categories(Request $request)
    {
        $query = CourseCategory::paginate($request->input('per_page', 10));
        return CourseCategoryResource::collection($query);
    }
}

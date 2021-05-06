<?php

namespace App\Http\Controllers\API;

use App\Models\Blog;
use App\Models\News;
use App\Models\Course;
use App\Models\ExamCalendar;
use Illuminate\Http\Request;
use App\Models\GovernmentJob;
use App\Models\QuestionPaper;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseProviderResource;
use App\Http\Resources\GovernmentJobCategoryResource;
use App\Http\Resources\QuestionPaperCategoryResource;
use App\Http\Resources\GovernmentJobSubCategoryResource;
use App\Http\Resources\QuestionPaperSubCategoryResource;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $data = [];
        $news = News::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($news as $n) {
            $sub_data['title'] = $n->title;
            $sub_data['slug'] = $n->slug;
            $sub_data['type'] = 'news';
            $sub_data['url'] = route('news.show',$n->slug);
            array_push($data, $sub_data);
        }
        $question_paper = QuestionPaper::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($question_paper as $qp) {
            $category = new QuestionPaperCategoryResource($qp->category);
            $sub_category = new QuestionPaperSubCategoryResource($qp->sub_category);
            $sub_data['title'] = $qp->title;
            $sub_data['slug'] = $qp->slug;
            $sub_data['type'] = 'question_paper';
            $sub_data['url'] = route('question_paper.show',[$category->slug,$sub_category->slug]);
            array_push($data, $sub_data);
        }
        $government_job = GovernmentJob::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($government_job as $g) {
            $category = new GovernmentJobCategoryResource($g->category);
            $sub_category = new GovernmentJobSubCategoryResource($g->sub_category);
            $sub_data['title'] = $g->title;
            $sub_data['slug'] = $g->slug;
            $sub_data['type'] = 'government_job';
            $sub_data['url'] = route('government_job.show',[$category->slug,$sub_category->slug,$g->slug]);
            array_push($data, $sub_data);
        }
        $blog = Blog::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($blog as $b) {
            $sub_data['title'] = $b->title;
            $sub_data['slug'] = $b->slug;
            $sub_data['type'] = 'blog';
            $sub_data['url'] = route('blog.show',$b->slug);
            array_push($data, $sub_data);
        }
        $exam_calendar = ExamCalendar::where('name', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($exam_calendar as $e) {
            $sub_data['title'] = $e->name;
            $sub_data['slug'] = $e->slug;
            $sub_data['type'] = 'exam_calendar';
            $sub_data['url'] = route('exam_calendar.show');
            array_push($data, $sub_data);
        }
        $course = Course::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($course as $c) {
            $sub_data['title'] = $c->title;
            $sub_data['slug'] = $c->slug;
            $sub_data['provider'] = new CourseProviderResource($c->course_provider);
            $sub_data['type'] = 'course';
            $sub_data['url'] = route('course.show',$c->slug);
            array_push($data, $sub_data);
        }

        return ($data);
    }
}

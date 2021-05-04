<?php

namespace App\Http\Controllers\API;

use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Course;
use App\Models\ExamCalendar;
use App\Models\GovernmentJob;
use App\Models\QuestionPaper;

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
            array_push($data, $sub_data);
        }
        $question_paper = QuestionPaper::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($question_paper as $qp) {
            $sub_data['title'] = $qp->title;
            $sub_data['slug'] = $qp->slug;
            $sub_data['type'] = 'question_paper';
            array_push($data, $sub_data);
        }
        $government_job = GovernmentJob::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($government_job as $g) {
            $sub_data['title'] = $g->title;
            $sub_data['slug'] = $g->slug;
            $sub_data['type'] = 'government_job';
            array_push($data, $sub_data);
        }
        $blog = Blog::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($blog as $b) {
            $sub_data['title'] = $b->title;
            $sub_data['slug'] = $b->slug;
            $sub_data['type'] = 'blog';
            array_push($data, $sub_data);
        }
        $exam_calendar = ExamCalendar::where('name', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($exam_calendar as $e) {
            $sub_data['title'] = $e->name;
            $sub_data['slug'] = $e->slug;
            $sub_data['type'] = 'exam_calendar';
            array_push($data, $sub_data);
        }
        $course = Course::where('title', 'like', '%' . $request->input('search') . '%')->get();
        foreach ($course as $c) {
            $sub_data['title'] = $c->title;
            $sub_data['slug'] = $c->slug;
            $sub_data['provider'] = $c->course_provider()->image;
            $sub_data['type'] = 'course';
            array_push($data, $sub_data);
        }

        return ($data);
    }
}

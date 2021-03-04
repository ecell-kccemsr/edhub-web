<?php

namespace App\Http\Controllers\API;

use App\Models\ExamCalendar;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ExamCalendarCategory;
use App\Http\Resources\ExamCalendarResourceCollection;
use App\Http\Resources\ExamCalendarCategoryResourceCollection;

class ExamCalendarController extends Controller
{
    public function get(Request $request)
    {
        $exam_calendars = ExamCalendar::query();
        if($request->has('category_id'))
        {
            $exam_calendars = $exam_calendars->where('category_id',$request->input('category_id'));
        }
        $exam_calendars = ExamCalendar::paginate($request->input('per_page', 10));
        return new ExamCalendarResourceCollection($exam_calendars);
    }

    public function categories(Request $request)
    {
        $exam_calendars_categories = ExamCalendarCategory::paginate($request->input('per_page', 10));
        return new ExamCalendarCategoryResourceCollection($exam_calendars_categories);
    }

}

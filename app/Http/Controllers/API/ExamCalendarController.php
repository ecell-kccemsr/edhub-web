<?php

namespace App\Http\Controllers\API;

use App\Models\ExamCalendar;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ExamCalendarResourceCollection;

class ExamCalendarController extends Controller
{
    public function get(Request $request)
    {
        $exam_calendars = ExamCalendar::paginate($request->input('per_page', 10));
        return new ExamCalendarResourceCollection($exam_calendars);
    }
}

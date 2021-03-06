<?php

namespace App\Http\Controllers\API;

use App\Models\ExamCalendar;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ExamCalendarCategory;
use App\Http\Resources\ExamCalendarResource;
use App\Http\Resources\ExamCalendarResourceCollection;
use App\Http\Resources\ExamCalendarCategoryResourceCollection;

/**
 * @group Exam Calendar management
 *
 * APIs for managing Exam Calendar
 */

class ExamCalendarController extends Controller
{
     /**
     * Get All Exams Calendar
     *
     * This endpoint allows you to fetch all Exams Calendar.
     * 
     * @queryParam category_id integer Field to fetch exam calendar to particular category_id.
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change exam calendar per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\ExamCalendarResourceCollection
     * @apiResourceModel App\Models\ExamCalendar
     * 
     */
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

     /**
     * Get All Categories.
     *
     * This endpoint allows you to fetch all Exams Calendar Categories.
     * 
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change exam calendar categories per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\ExamCalendarCategoryResourceCollection
     * @apiResourceModel App\Models\ExamCalendarCategory
     * 
     */
    public function categories(Request $request)
    {
        $exam_calendars_categories = ExamCalendarCategory::paginate($request->input('per_page', 10));
        return new ExamCalendarCategoryResourceCollection($exam_calendars_categories);
    }

    /**
     * Retrieve a Exam Calendar
     *
     * This endpoint allows you to fetch a Exam Calendar.
     *      
     * @urlParam exam_calendars integer required The ID of the Exam Calendar.
     * 
     * @apiResource App\Http\Resources\ExamCalendarResource
     * @apiResourceModel App\Models\ExamCalendar
     * 
     */
    public function show(ExamCalendar $exam_calendar)
    {
        return new ExamCalendarResource($exam_calendar);
    }

}

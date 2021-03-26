<?php

namespace App\Http\Controllers\API;

use App\Models\ExamResult;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ExamResultResourceCollection;

class ExamResultController extends Controller
{
    /**
     * Get All Exam Result
     *
     * This endpoint allows you to fetch all Exam Result.
     * 
     * @apiResourceCollection App\Http\Resources\ExamResultResourceCollection
     * @apiResourceModel App\Models\ExamResult
     * 
     */
    public function get()
    {
        return new ExamResultResourceCollection(ExamResult::all());
    }
}

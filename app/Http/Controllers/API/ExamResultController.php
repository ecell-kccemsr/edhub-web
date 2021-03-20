<?php

namespace App\Http\Controllers\API;

use App\Models\ExamResult;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ExamResultResourceCollection;

class ExamResultController extends Controller
{
    public function get()
    {
        return new ExamResultResourceCollection(ExamResult::all());
    }
}

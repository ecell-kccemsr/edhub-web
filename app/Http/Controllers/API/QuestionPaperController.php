<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\QuestionPaper;
use App\Http\Controllers\Controller;
use App\Models\QuestionPaperCategory;
use App\Http\Resources\QuestionPaperResourceCollection;
use App\Http\Resources\QuestionPaperCategoryResourceCollection;

class QuestionPaperController extends Controller
{
    public function get(Request $request)
    {
        $question_papers = QuestionPaper::query();
        if($request->has('category_id'))
        {
            $question_papers = $question_papers->where('category_id',$request->input('category_id'));
        }
        $question_papers = $question_papers->paginate($request->input('per_page', 10));
        return new QuestionPaperResourceCollection($question_papers);
    }

    public function categories(Request $request)
    {
        $question_paper_categories = QuestionPaperCategory::paginate($request->input('per_page', 10));
        return new QuestionPaperCategoryResourceCollection($question_paper_categories);
    }
}

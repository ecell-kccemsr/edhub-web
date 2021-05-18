<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\QuestionPaper;
use App\Http\Controllers\Controller;
use App\Models\QuestionPaperCategory;

use Illuminate\Database\Eloquent\Builder;
use App\Models\QuestionPaperSubCategory;
use App\Http\Resources\QuestionPaperResource;
use App\Http\Resources\QuestionPaperResourceCollection;
use App\Http\Resources\QuestionPaperSubCategoryResource;
use App\Http\Resources\QuestionPaperCategoryResourceCollection;

/**
 * @group Question Paper management
 *
 * APIs for managing Question Paper
 */
class QuestionPaperController extends Controller
{
     /**
     * Get All the Question Papers
     *
     * This endpoint allows you to fetch all the Question Papers.
     * 
     * @queryParam category_id integer Field to fetch Question Paper to particular category_id.
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change Question Paper per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\QuestionPaperResourceCollection
     * @apiResourceModel App\Models\QuestionPaper
     * 
     */
    public function get(Request $request)
    {
        $question_papers = QuestionPaper::query();
        if($request->has('category_id'))
        {
            $question_papers = $question_papers->where('category_id',$request->input('category_id'));
        }
        if($request->has('subcategory_id'))
        {
            $question_papers = $question_papers->where('sub_category_id',$request->input('subcategory_id'));
        }
        if($request->has('year'))
        {
            $question_papers = $question_papers->where('year',$request->input('year'));
        }
        if($request->has('subcategory_slug'))
        {
            $question_papers = $question_papers->whereHas('sub_category', function (Builder $query) use($request)
            {    
                $query->where('slug', $request->input('subcategory_slug'));
            });
        }
        $question_papers = $question_papers->paginate($request->input('per_page', 10));
        return new QuestionPaperResourceCollection($question_papers);
    }

     /**
     * Get All Categories.
     *
     * This endpoint allows you to fetch all Question Paper Categories.
     * 
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change Question Paper categories per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\QuestionPaperCategoryResourceCollection
     * @apiResourceModel App\Models\QuestionPaperCategory
     * 
     */
    public function categories(Request $request)
    {
        $question_paper_categories = QuestionPaperCategory::paginate($request->input('per_page', 10));
        return new QuestionPaperCategoryResourceCollection($question_paper_categories);
    }

    public function sub_categories(Request $request)
    {
        $question_paper_subcategories = QuestionPaperSubCategory::query();
        if($request->has('category_id'))
        {
            $question_paper_subcategories = $question_paper_subcategories->where('category_id',$request->input('category_id'));
        }
        $question_paper_subcategories = $question_paper_subcategories->paginate($request->input('per_page', 10));
        return QuestionPaperSubCategoryResource::collection($question_paper_subcategories);
    }

    /**
     * Retrieve a Question Paper
     *
     * This endpoint allows you to fetch a Question Paper.
     *      
     * @urlParam question_paper integer required The ID of the Question Paper.
     * 
     * @apiResource App\Http\Resources\QuestionPaperResource
     * @apiResourceModel App\Models\QuestionPaper
     * 
     */
    public function show($question_paper)
    {
        $question_paper = QuestionPaper::where('id',$question_paper)->orWhere('slug',$question_paper)->firstOrFail();
        return new QuestionPaperResource($question_paper);
    }
}
<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\GovernmentJob;
use App\Http\Controllers\Controller;
use App\Models\GovernmentJobCategory;
use App\Models\GovernmentJobSubCategory;
use App\Http\Resources\GovernmentJobResourceCollection;
use App\Http\Resources\GovernmentJobCategoryResourceCollection;
use App\Http\Resources\GovernmentJobSubCategoryResourceCollection;

class GovernmentJobController extends Controller
{
    public function get(Request $request)
    {
        $government_jobs = GovernmentJob::query();
        if($request->has('category_id'))
        {
            $government_jobs = $government_jobs->where('category_id',$request->input('category_id'));
        }
        if($request->has('subcategory_id'))
        {
            $government_jobs = $government_jobs->where('subcategory_id',$request->input('subcategory_id'));
        }
        $government_jobs = $government_jobs->paginate($request->input('per_page', 10));
        return new GovernmentJobResourceCollection($government_jobs);
    }

    public function category(Request $request)
    {
        $government_job_categories = GovernmentJobCategory::paginate($request->input('per_page', 10));
        return new GovernmentJobCategoryResourceCollection($government_job_categories);
    }

    public function sub_category(Request $request)
    {
        $government_job_subcategories = GovernmentJobSubCategory::query();
        if($request->has('category_id'))
        {
            $government_job_subcategories = $government_job_subcategories->where('category_id',$request->input('category_id'));
        }
        $government_job_subcategories = $government_job_subcategories->paginate($request->input('per_page', 10));
        return new GovernmentJobSubCategoryResourceCollection($government_job_subcategories);
    }
}

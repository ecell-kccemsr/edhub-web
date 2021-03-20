<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\GovernmentJob;
use App\Http\Controllers\Controller;
use App\Models\GovernmentJobCategory;
use App\Models\GovernmentJobSubCategory;
use App\Http\Resources\GovernmentJobResource;
use App\Http\Resources\GovernmentJobResourceCollection;
use App\Http\Resources\GovernmentJobCategoryResourceCollection;
use App\Http\Resources\GovernmentJobSubCategoryResourceCollection;

/**
 * @group Government Job management
 *
 * APIs for managing Government Job
 */
class GovernmentJobController extends Controller
{
     /**
     * Get All Government Jobs
     *
     * This endpoint allows you to fetch all Government Jobs.
     * 
     * @queryParam category_id integer Field to fetch government job to particular category_id.
     * @queryParam subcategory_id integer Field to fetch government job to particular subcategory_id.
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change government job per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\GovernmentJobResourceCollection
     * @apiResourceModel App\Models\GovernmentJob
     * 
     */
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
        if($request->has('age_limit'))
        {
            $government_jobs = $government_jobs->where('age_limit','<=',$request->input('age_limit'));
        }
        $government_jobs = $government_jobs->paginate($request->input('per_page', 10));
        return new GovernmentJobResourceCollection($government_jobs);
    }

     /**
     * Get All Categories.
     *
     * This endpoint allows you to fetch all Government Job Categories.
     * 
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change government job categories per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\GovernmentJobCategoryResourceCollection
     * @apiResourceModel App\Models\GovernmentJobCategory
     * 
     */
    public function categories(Request $request)
    {
        $government_job_categories = GovernmentJobCategory::paginate($request->input('per_page', 10));
        return new GovernmentJobCategoryResourceCollection($government_job_categories);
    }

     /**
     * Get All Sub Categories.
     *
     * This endpoint allows you to fetch all Government Job Sub Categories.
     * 
     * @queryParam category_id integer Field to fetch government job subcategories to particular category_id.
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change government job subcategories per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\GovernmentJobSubCategoryResourceCollection
     * @apiResourceModel App\Models\GovernmentJobSubCategory
     * 
     */
    public function sub_categories(Request $request)
    {
        $government_job_subcategories = GovernmentJobSubCategory::query();
        if($request->has('category_id'))
        {
            $government_job_subcategories = $government_job_subcategories->where('category_id',$request->input('category_id'));
        }
        $government_job_subcategories = $government_job_subcategories->paginate($request->input('per_page', 10));
        return new GovernmentJobSubCategoryResourceCollection($government_job_subcategories);
    }

    /**
     * Retrieve a Government Jobs
     *
     * This endpoint allows you to fetch a Government Jobs.
     *      
     * @urlParam government_job integer required The ID of the Government Jobs.
     * 
     * @apiResource App\Http\Resources\GovernmentJobResource
     * @apiResourceModel App\Models\GovernmentJob
     * 
     */
    public function show($government_job)
    {
        $government_job = GovernmentJob::where('id',$government_job)->orWhere('slug',$government_job)->firstOrFail();
        return new GovernmentJobResource($government_job);
    }
}

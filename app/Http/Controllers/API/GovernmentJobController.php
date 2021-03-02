<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\GovernmentJob;
use App\Http\Controllers\Controller;
use App\Http\Resources\GovernmentJobResourceCollection;

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
        return new GovernmentJobResourceCollection($government_jobs->get());
    }
}

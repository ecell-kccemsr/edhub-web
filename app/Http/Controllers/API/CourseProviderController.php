<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\CourseProvider;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseProviderResource;
use App\Http\Resources\CourseProviderResourceCollection;

class CourseProviderController extends Controller
{
    public function get(Request $request)
    {
        $courseprovider = CourseProvider::paginate($request->input('per_page',10));
        return new CourseProviderResourceCollection($courseprovider);

    }

    public function show($courseprovider)
    {
        $courseprovider = CourseProvider::where('id',$courseprovider)->orWhere('slug',$courseprovider)->firstOrFail();
        return new CourseProviderResource($courseprovider);
    }
}

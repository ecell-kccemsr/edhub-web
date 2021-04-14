<?php

namespace App\Http\Controllers\API;

use App\Models\Testimony;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonyResource;
use App\Http\Resources\TestimonyResourceCollection;

class TestimonyController extends Controller
{
    public function get(Request $request)
    {
        $testimony = Testimony::paginate($request->input('per_page',10));
        return new TestimonyResourceCollection($testimony);

    }

    public function show($testimony)
    {
        $testimony = Testimony::where('id',$testimony)->orWhere('slug',$testimony)->firstOrFail();
        return new TestimonyResource($testimony);
    }
}

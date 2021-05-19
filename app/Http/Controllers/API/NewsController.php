<?php

namespace App\Http\Controllers\API;

use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use App\Models\NewsSubCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CommentResource;
use App\Http\Resources\NewsResourceCollection;
use App\Http\Resources\NewsCategoryResourceCollection;
use App\Http\Resources\NewsSubCategoryResourceCollection;

/**
 * @group News management
 *
 * APIs for managing News
 */
class NewsController extends Controller
{
     /**
     * Get All the News
     *
     * This endpoint allows you to fetch all the News.
     * 
     * @queryParam category_id integer Field to fetch news to particular category_id.
     * @queryParam subcategory_id integer Field to fetch news to particular subcategory_id.
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change news per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\NewsResourceCollection
     * @apiResourceModel App\Models\News
     * 
     */
    public function get(Request $request)
    {
        $news = News::query();
        if($request->has('category_id'))
        {
            $news = $news->where('category_id',$request->input('category_id'));
        }
        if($request->has('subcategory_id'))
        {
            $news = $news->where('subcategory_id',$request->input('subcategory_id'));
        }
        $news = $news->orderBy('created_at','desc')->paginate($request->input('per_page', 10));
        return new NewsResourceCollection($news);
    }

     /**
     * Get All Categories.
     *
     * This endpoint allows you to fetch all News Categories.
     * 
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change news categories per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\NewsCategoryResourceCollection
     * @apiResourceModel App\Models\NewsCategory
     * 
     */
    public function categories(Request $request)
    {
        $news_categories = NewsCategory::paginate($request->input('per_page', 10));
        return new NewsCategoryResourceCollection($news_categories);
    }

     /**
     * Get All Sub Categories.
     *
     * This endpoint allows you to fetch all News Sub Categories.
     * 
     * @queryParam category_id integer Field to fetch news subcategories to particular category_id.
     * @queryParam page integer Field to change page. Defaults to 1.
     * @queryParam per_page integer Field to change news subcategories per page. Defaults to 10.
     * 
     * @apiResourceCollection App\Http\Resources\NewsSubCategoryResourceCollection
     * @apiResourceModel App\Models\NewsSubCategory
     * 
     */
    public function sub_categories(Request $request)
    {
        $news_subcategories = NewsSubCategory::query();
        if($request->has('category_id'))
        {
            $news_subcategories = $news_subcategories->where('category_id',$request->input('category_id'));
        }
        $news_subcategories = $news_subcategories->paginate($request->input('per_page', 10));
        return new NewsSubCategoryResourceCollection($news_subcategories);
    }

    /**
     * Retrieve a News
     *
     * This endpoint allows you to fetch a News.
     *      
     * @urlParam news integer required The ID of the News.
     * 
     * @apiResource App\Http\Resources\NewsResource
     * @apiResourceModel App\Models\News
     * 
     */
    public function show($news)
    {
        $news = News::where('id',$news)->orWhere('slug',$news)->firstOrFail();
        $news->increment('total_views',1);
        return new NewsResource($news);
    }

    public function trending()
    {
        $news = News::where("created_at", ">=", date("Y-m-d H:i:s", strtotime('-24 hours', time())))->orderBy('total_views','desc')->limit(10)->get();
        return new NewsResourceCollection($news);
    }

    public function getComments($news, Request $request)
    {
        $news = News::where('id',$news)->orWhere('slug',$news)->firstOrFail();
        return CommentResource::collection($news->comments()->paginate($request->input('per_page',10)));
    }

    public function addComment($news, Request $request)
    {
        $news = News::where('id',$news)->orWhere('slug',$news)->firstOrFail();
        $news->commentAsUser(Auth::user(), $request->input('comment', ''));
        return new NewsResource($news);
    }

    public function toggleLike($news)
    {
        $news = News::where('id',$news)->orWhere('slug',$news)->firstOrFail();
        Auth::user()->toggleLike($news);
        return new NewsResource($news);
    }
}

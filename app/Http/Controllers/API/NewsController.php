<?php

namespace App\Http\Controllers\API;

use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use App\Models\NewsSubCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
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
        $news = $news->paginate($request->input('per_page', 10));
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
    public function show(News $news)
    {
        return new NewsResource($news);
    }
}

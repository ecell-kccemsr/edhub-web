<?php

namespace App\Http\Controllers\API;

use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use App\Models\NewsSubCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResourceCollection;
use App\Http\Resources\NewsCategoryResourceCollection;
use App\Http\Resources\NewsSubCategoryResourceCollection;

class NewsController extends Controller
{
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

    public function category(Request $request)
    {
        $news_categories = NewsCategory::paginate($request->input('per_page', 10));
        return new NewsCategoryResourceCollection($news_categories);
    }

    public function sub_category(Request $request)
    {
        $news_subcategories = NewsSubCategory::query();
        if($request->has('category_id'))
        {
            $news_subcategories = $news_subcategories->where('category_id',$request->input('category_id'));
        }
        $news_subcategories = $news_subcategories->paginate($request->input('per_page', 10));
        return new NewsSubCategoryResourceCollection($news_subcategories);
    }
}

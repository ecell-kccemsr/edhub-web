# News management

APIs for managing News

## Get All the News


This endpoint allows you to fetch all the News.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/news?category_id=8&subcategory_id=9&page=8&per_page=17" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/news"
);

let params = {
    "category_id": "8",
    "subcategory_id": "9",
    "page": "8",
    "per_page": "17",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "data": [
        {
            "id": null,
            "title": null,
            "description": null,
            "details": null,
            "image": "",
            "category": null,
            "subcategory": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null,
            "slug": null,
            "seo_keywords": null,
            "seo_description": null
        },
        {
            "id": null,
            "title": null,
            "description": null,
            "details": null,
            "image": "",
            "category": null,
            "subcategory": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null,
            "slug": null,
            "seo_keywords": null,
            "seo_description": null
        }
    ]
}
```
<div id="execution-results-GETapi-news" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-news"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-news"></code></pre>
</div>
<div id="execution-error-GETapi-news" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-news"></code></pre>
</div>
<form id="form-GETapi-news" data-method="GET" data-path="api/news" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-news', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-news" onclick="tryItOut('GETapi-news');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-news" onclick="cancelTryOut('GETapi-news');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-news" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/news</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>category_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="category_id" data-endpoint="GETapi-news" data-component="query"  hidden>
<br>
Field to fetch news to particular category_id.</p>
<p>
<b><code>subcategory_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="subcategory_id" data-endpoint="GETapi-news" data-component="query"  hidden>
<br>
Field to fetch news to particular subcategory_id.</p>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-news" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-news" data-component="query"  hidden>
<br>
Field to change news per page. Defaults to 10.</p>
</form>


## api/news/trending




> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/news/trending" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/news/trending"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "data": []
}
```
<div id="execution-results-GETapi-news-trending" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-news-trending"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-news-trending"></code></pre>
</div>
<div id="execution-error-GETapi-news-trending" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-news-trending"></code></pre>
</div>
<form id="form-GETapi-news-trending" data-method="GET" data-path="api/news/trending" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-news-trending', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-news-trending" onclick="tryItOut('GETapi-news-trending');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-news-trending" onclick="cancelTryOut('GETapi-news-trending');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-news-trending" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/news/trending</code></b>
</p>
</form>


## Get All Categories.


This endpoint allows you to fetch all News Categories.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/news/categories?page=13&per_page=1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/news/categories"
);

let params = {
    "page": "13",
    "per_page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 9,
            "name": "Franz Parisian DDS",
            "created_at": "2021-03-26T12:26:38.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:38.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "franz-parisian-dds",
            "seo_keywords": null,
            "seo_description": null
        },
        {
            "id": 10,
            "name": "Thalia Fritsch",
            "created_at": "2021-03-26T12:26:38.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:38.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "thalia-fritsch",
            "seo_keywords": null,
            "seo_description": null
        }
    ]
}
```
<div id="execution-results-GETapi-news-categories" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-news-categories"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-news-categories"></code></pre>
</div>
<div id="execution-error-GETapi-news-categories" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-news-categories"></code></pre>
</div>
<form id="form-GETapi-news-categories" data-method="GET" data-path="api/news/categories" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-news-categories', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-news-categories" onclick="tryItOut('GETapi-news-categories');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-news-categories" onclick="cancelTryOut('GETapi-news-categories');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-news-categories" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/news/categories</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-news-categories" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-news-categories" data-component="query"  hidden>
<br>
Field to change news categories per page. Defaults to 10.</p>
</form>


## Get All Sub Categories.


This endpoint allows you to fetch all News Sub Categories.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/news/sub_categories?category_id=15&page=18&per_page=15" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/news/sub_categories"
);

let params = {
    "category_id": "15",
    "page": "18",
    "per_page": "15",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 7,
            "name": "Mariane Ebert",
            "category": {
                "id": 1,
                "name": "Business",
                "created_at": "2021-03-10T13:40:53.000000Z",
                "created_at_formated": "2 weeks ago",
                "updated_at": "2021-03-10T13:41:25.000000Z",
                "updated_at_formated": "2 weeks ago",
                "slug": "business",
                "seo_keywords": null,
                "seo_description": null
            },
            "created_at": "2021-03-26T12:26:38.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:38.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "mariane-ebert",
            "seo_keywords": null,
            "seo_description": null
        },
        {
            "id": 8,
            "name": "Angelita Rosenbaum",
            "category": {
                "id": 1,
                "name": "Business",
                "created_at": "2021-03-10T13:40:53.000000Z",
                "created_at_formated": "2 weeks ago",
                "updated_at": "2021-03-10T13:41:25.000000Z",
                "updated_at_formated": "2 weeks ago",
                "slug": "business",
                "seo_keywords": null,
                "seo_description": null
            },
            "created_at": "2021-03-26T12:26:38.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:38.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "angelita-rosenbaum",
            "seo_keywords": null,
            "seo_description": null
        }
    ]
}
```
<div id="execution-results-GETapi-news-sub_categories" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-news-sub_categories"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-news-sub_categories"></code></pre>
</div>
<div id="execution-error-GETapi-news-sub_categories" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-news-sub_categories"></code></pre>
</div>
<form id="form-GETapi-news-sub_categories" data-method="GET" data-path="api/news/sub_categories" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-news-sub_categories', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-news-sub_categories" onclick="tryItOut('GETapi-news-sub_categories');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-news-sub_categories" onclick="cancelTryOut('GETapi-news-sub_categories');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-news-sub_categories" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/news/sub_categories</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>category_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="category_id" data-endpoint="GETapi-news-sub_categories" data-component="query"  hidden>
<br>
Field to fetch news subcategories to particular category_id.</p>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-news-sub_categories" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-news-sub_categories" data-component="query"  hidden>
<br>
Field to change news subcategories per page. Defaults to 10.</p>
</form>


## Retrieve a News


This endpoint allows you to fetch a News.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/news/9" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/news/9"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "data": {
        "id": null,
        "title": null,
        "description": null,
        "details": null,
        "image": "",
        "category": null,
        "subcategory": null,
        "created_at": null,
        "created_at_formated": null,
        "updated_at": null,
        "updated_at_formated": null,
        "slug": null,
        "seo_keywords": null,
        "seo_description": null
    }
}
```
<div id="execution-results-GETapi-news--news-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-news--news-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-news--news-"></code></pre>
</div>
<div id="execution-error-GETapi-news--news-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-news--news-"></code></pre>
</div>
<form id="form-GETapi-news--news-" data-method="GET" data-path="api/news/{news}" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-news--news-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-news--news-" onclick="tryItOut('GETapi-news--news-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-news--news-" onclick="cancelTryOut('GETapi-news--news-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-news--news-" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/news/{news}</code></b>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>news</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="news" data-endpoint="GETapi-news--news-" data-component="url" required  hidden>
<br>
The ID of the News.</p>
</form>




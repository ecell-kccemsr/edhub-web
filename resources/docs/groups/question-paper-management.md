# Question Paper management

APIs for managing Question Paper

## Get All the Question Papers


This endpoint allows you to fetch all the Question Papers.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/questionpapers?category_id=13&page=10&per_page=7" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers"
);

let params = {
    "category_id": "13",
    "page": "10",
    "per_page": "7",
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
            "year": null,
            "category": null,
            "url": null,
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
            "year": null,
            "category": null,
            "url": null,
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
<div id="execution-results-GETapi-questionpapers" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-questionpapers"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-questionpapers"></code></pre>
</div>
<div id="execution-error-GETapi-questionpapers" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-questionpapers"></code></pre>
</div>
<form id="form-GETapi-questionpapers" data-method="GET" data-path="api/questionpapers" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-questionpapers', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-questionpapers" onclick="tryItOut('GETapi-questionpapers');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-questionpapers" onclick="cancelTryOut('GETapi-questionpapers');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-questionpapers" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/questionpapers</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>category_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="category_id" data-endpoint="GETapi-questionpapers" data-component="query"  hidden>
<br>
Field to fetch Question Paper to particular category_id.</p>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-questionpapers" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-questionpapers" data-component="query"  hidden>
<br>
Field to change Question Paper per page. Defaults to 10.</p>
</form>


## Get All Categories.


This endpoint allows you to fetch all Question Paper Categories.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/questionpapers/categories?page=5&per_page=18" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers/categories"
);

let params = {
    "page": "5",
    "per_page": "18",
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
            "name": null,
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
            "name": null,
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
<div id="execution-results-GETapi-questionpapers-categories" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-questionpapers-categories"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-questionpapers-categories"></code></pre>
</div>
<div id="execution-error-GETapi-questionpapers-categories" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-questionpapers-categories"></code></pre>
</div>
<form id="form-GETapi-questionpapers-categories" data-method="GET" data-path="api/questionpapers/categories" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-questionpapers-categories', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-questionpapers-categories" onclick="tryItOut('GETapi-questionpapers-categories');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-questionpapers-categories" onclick="cancelTryOut('GETapi-questionpapers-categories');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-questionpapers-categories" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/questionpapers/categories</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-questionpapers-categories" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-questionpapers-categories" data-component="query"  hidden>
<br>
Field to change Question Paper categories per page. Defaults to 10.</p>
</form>


## Retrieve a Question Paper


This endpoint allows you to fetch a Question Paper.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/questionpapers/5" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers/5"
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
        "year": null,
        "category": null,
        "url": null,
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
<div id="execution-results-GETapi-questionpapers--question_paper-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-questionpapers--question_paper-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-questionpapers--question_paper-"></code></pre>
</div>
<div id="execution-error-GETapi-questionpapers--question_paper-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-questionpapers--question_paper-"></code></pre>
</div>
<form id="form-GETapi-questionpapers--question_paper-" data-method="GET" data-path="api/questionpapers/{question_paper}" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-questionpapers--question_paper-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-questionpapers--question_paper-" onclick="tryItOut('GETapi-questionpapers--question_paper-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-questionpapers--question_paper-" onclick="cancelTryOut('GETapi-questionpapers--question_paper-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-questionpapers--question_paper-" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/questionpapers/{question_paper}</code></b>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>question_paper</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="question_paper" data-endpoint="GETapi-questionpapers--question_paper-" data-component="url" required  hidden>
<br>
The ID of the Question Paper.</p>
</form>




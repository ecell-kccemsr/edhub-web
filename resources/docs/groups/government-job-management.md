# Government Job management

APIs for managing Government Job

## Get All Government Jobs


This endpoint allows you to fetch all Government Jobs.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs?category_id=16&subcategory_id=18&page=3&per_page=18" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs"
);

let params = {
    "category_id": "16",
    "subcategory_id": "18",
    "page": "3",
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
            "title": null,
            "description": null,
            "job_positions": null,
            "eligibility_criteria": null,
            "syllabus": null,
            "exam_pattern": null,
            "cutoff": null,
            "apply_online": null,
            "admit_card": null,
            "category": null,
            "subcategory": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        },
        {
            "id": null,
            "title": null,
            "description": null,
            "job_positions": null,
            "eligibility_criteria": null,
            "syllabus": null,
            "exam_pattern": null,
            "cutoff": null,
            "apply_online": null,
            "admit_card": null,
            "category": null,
            "subcategory": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        }
    ]
}
```
<div id="execution-results-GETapi-government_jobs" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-government_jobs"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-government_jobs"></code></pre>
</div>
<div id="execution-error-GETapi-government_jobs" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-government_jobs"></code></pre>
</div>
<form id="form-GETapi-government_jobs" data-method="GET" data-path="api/government_jobs" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-government_jobs', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-government_jobs" onclick="tryItOut('GETapi-government_jobs');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-government_jobs" onclick="cancelTryOut('GETapi-government_jobs');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-government_jobs" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/government_jobs</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>category_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="category_id" data-endpoint="GETapi-government_jobs" data-component="query"  hidden>
<br>
Field to fetch government job to particular category_id.</p>
<p>
<b><code>subcategory_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="subcategory_id" data-endpoint="GETapi-government_jobs" data-component="query"  hidden>
<br>
Field to fetch government job to particular subcategory_id.</p>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-government_jobs" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-government_jobs" data-component="query"  hidden>
<br>
Field to change government job per page. Defaults to 10.</p>
</form>


## Get All Categories.


This endpoint allows you to fetch all Government Job Categories.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs/categories?page=18&per_page=1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/categories"
);

let params = {
    "page": "18",
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
            "id": 11,
            "name": "Prof. Dejon Hintz",
            "image": "http:\/\/127.0.0.1:8000\/storage\/C:\/Users\/Admin\/AppData\/Local\/Temp\/f8e2e9589e2bd63e3076e22c5d494335.png",
            "created_at": "2021-03-04T14:55:20.000000Z",
            "created_at_formated": "2 seconds ago",
            "updated_at": "2021-03-04T14:55:20.000000Z",
            "updated_at_formated": "2 seconds ago"
        },
        {
            "id": 12,
            "name": "Prof. Vida Stroman",
            "image": "http:\/\/127.0.0.1:8000\/storage\/C:\/Users\/Admin\/AppData\/Local\/Temp\/cde31613da24c37bfe3c14fd3d5029e6.png",
            "created_at": "2021-03-04T14:55:22.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-04T14:55:22.000000Z",
            "updated_at_formated": "1 second ago"
        }
    ]
}
```
<div id="execution-results-GETapi-government_jobs-categories" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-government_jobs-categories"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-government_jobs-categories"></code></pre>
</div>
<div id="execution-error-GETapi-government_jobs-categories" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-government_jobs-categories"></code></pre>
</div>
<form id="form-GETapi-government_jobs-categories" data-method="GET" data-path="api/government_jobs/categories" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-government_jobs-categories', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-government_jobs-categories" onclick="tryItOut('GETapi-government_jobs-categories');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-government_jobs-categories" onclick="cancelTryOut('GETapi-government_jobs-categories');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-government_jobs-categories" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/government_jobs/categories</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-government_jobs-categories" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-government_jobs-categories" data-component="query"  hidden>
<br>
Field to change government job categories per page. Defaults to 10.</p>
</form>


## Get All Sub Categories.


This endpoint allows you to fetch all Government Job Sub Categories.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs/sub_categories?category_id=15&page=5&per_page=4" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/sub_categories"
);

let params = {
    "category_id": "15",
    "page": "5",
    "per_page": "4",
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
            "name": "Melisa Wiegand",
            "category": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        },
        {
            "id": null,
            "name": "Elyssa Armstrong",
            "category": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        }
    ]
}
```
<div id="execution-results-GETapi-government_jobs-sub_categories" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-government_jobs-sub_categories"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-government_jobs-sub_categories"></code></pre>
</div>
<div id="execution-error-GETapi-government_jobs-sub_categories" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-government_jobs-sub_categories"></code></pre>
</div>
<form id="form-GETapi-government_jobs-sub_categories" data-method="GET" data-path="api/government_jobs/sub_categories" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-government_jobs-sub_categories', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-government_jobs-sub_categories" onclick="tryItOut('GETapi-government_jobs-sub_categories');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-government_jobs-sub_categories" onclick="cancelTryOut('GETapi-government_jobs-sub_categories');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-government_jobs-sub_categories" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/government_jobs/sub_categories</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>category_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="category_id" data-endpoint="GETapi-government_jobs-sub_categories" data-component="query"  hidden>
<br>
Field to fetch government job subcategories to particular category_id.</p>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-government_jobs-sub_categories" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-government_jobs-sub_categories" data-component="query"  hidden>
<br>
Field to change government job subcategories per page. Defaults to 10.</p>
</form>




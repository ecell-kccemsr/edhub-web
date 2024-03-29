# Government Job management

APIs for managing Government Job

## Get All Government Jobs


This endpoint allows you to fetch all Government Jobs.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs?category_id=13&subcategory_id=17&page=3&per_page=11" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs"
);

let params = {
    "category_id": "13",
    "subcategory_id": "17",
    "page": "3",
    "per_page": "11",
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
            "salary_and_job_positions": null,
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
            "updated_at_formated": null,
            "slug": null,
            "seo_keywords": null,
            "seo_description": null,
            "age_limit": null
        },
        {
            "id": null,
            "title": null,
            "description": null,
            "salary_and_job_positions": null,
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
            "updated_at_formated": null,
            "slug": null,
            "seo_keywords": null,
            "seo_description": null,
            "age_limit": null
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
    -G "http://127.0.0.1:8000/api/government_jobs/categories?page=4&per_page=20" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/categories"
);

let params = {
    "page": "4",
    "per_page": "20",
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
            "id": 2,
            "name": "Preston Nader",
            "image": "http:\/\/127.0.0.1:8000\/storage\/C:\/Users\/Admin\/AppData\/Local\/Temp\/ba11f0c24e28258698c7efaf799f42d2.png",
            "created_at": "2021-03-26T12:26:36.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:36.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "preston-nader",
            "seo_keywords": null,
            "seo_description": null
        },
        {
            "id": 3,
            "name": "Dameon McKenzie",
            "image": "http:\/\/127.0.0.1:8000\/storage\/C:\/Users\/Admin\/AppData\/Local\/Temp\/4f0a860d7e5ad6c7858a9848287d6c9b.png",
            "created_at": "2021-03-26T12:26:37.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:37.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "dameon-mckenzie",
            "seo_keywords": null,
            "seo_description": null
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
    -G "http://127.0.0.1:8000/api/government_jobs/sub_categories?category_id=17&page=12&per_page=5" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/sub_categories"
);

let params = {
    "category_id": "17",
    "page": "12",
    "per_page": "5",
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
            "id": 2,
            "name": "Gay Gaylord",
            "category": {
                "id": 1,
                "name": "Bank Jobs",
                "image": "http:\/\/127.0.0.1:8000\/storage\/government-job-categories\/March2021\/Rx9pAmWNPz8bdfWUChbr.png",
                "created_at": "2021-03-10T13:13:32.000000Z",
                "created_at_formated": "2 weeks ago",
                "updated_at": "2021-03-10T13:13:32.000000Z",
                "updated_at_formated": "2 weeks ago",
                "slug": "bank-jobs",
                "seo_keywords": null,
                "seo_description": null
            },
            "created_at": "2021-03-26T12:26:37.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:37.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "gay-gaylord",
            "seo_keywords": null,
            "seo_description": null
        },
        {
            "id": 3,
            "name": "Bernice O'Hara Jr.",
            "category": {
                "id": 1,
                "name": "Bank Jobs",
                "image": "http:\/\/127.0.0.1:8000\/storage\/government-job-categories\/March2021\/Rx9pAmWNPz8bdfWUChbr.png",
                "created_at": "2021-03-10T13:13:32.000000Z",
                "created_at_formated": "2 weeks ago",
                "updated_at": "2021-03-10T13:13:32.000000Z",
                "updated_at_formated": "2 weeks ago",
                "slug": "bank-jobs",
                "seo_keywords": null,
                "seo_description": null
            },
            "created_at": "2021-03-26T12:26:37.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-26T12:26:37.000000Z",
            "updated_at_formated": "1 second ago",
            "slug": "bernice-ohara-jr",
            "seo_keywords": null,
            "seo_description": null
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


## Retrieve a Government Jobs


This endpoint allows you to fetch a Government Jobs.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs/15" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/15"
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
        "salary_and_job_positions": null,
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
        "updated_at_formated": null,
        "slug": null,
        "seo_keywords": null,
        "seo_description": null,
        "age_limit": null
    }
}
```
<div id="execution-results-GETapi-government_jobs--government_job-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-government_jobs--government_job-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-government_jobs--government_job-"></code></pre>
</div>
<div id="execution-error-GETapi-government_jobs--government_job-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-government_jobs--government_job-"></code></pre>
</div>
<form id="form-GETapi-government_jobs--government_job-" data-method="GET" data-path="api/government_jobs/{government_job}" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-government_jobs--government_job-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-government_jobs--government_job-" onclick="tryItOut('GETapi-government_jobs--government_job-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-government_jobs--government_job-" onclick="cancelTryOut('GETapi-government_jobs--government_job-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-government_jobs--government_job-" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/government_jobs/{government_job}</code></b>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>government_job</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="government_job" data-endpoint="GETapi-government_jobs--government_job-" data-component="url" required  hidden>
<br>
The ID of the Government Jobs.</p>
</form>




# Exam Calendar management

APIs for managing Exam Calendar

## Get All Exams Calendar


This endpoint allows you to fetch all Exams Calendar.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar?category_id=15&page=8&per_page=17" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar"
);

let params = {
    "category_id": "15",
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
            "name": null,
            "date": null,
            "image": "",
            "official": null,
            "category": null,
            "url": null,
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
            "name": null,
            "date": null,
            "image": "",
            "official": null,
            "category": null,
            "url": null,
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
<div id="execution-results-GETapi-examcalendar" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-examcalendar"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-examcalendar"></code></pre>
</div>
<div id="execution-error-GETapi-examcalendar" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-examcalendar"></code></pre>
</div>
<form id="form-GETapi-examcalendar" data-method="GET" data-path="api/examcalendar" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-examcalendar', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-examcalendar" onclick="tryItOut('GETapi-examcalendar');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-examcalendar" onclick="cancelTryOut('GETapi-examcalendar');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-examcalendar" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/examcalendar</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>category_id</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="category_id" data-endpoint="GETapi-examcalendar" data-component="query"  hidden>
<br>
Field to fetch exam calendar to particular category_id.</p>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-examcalendar" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-examcalendar" data-component="query"  hidden>
<br>
Field to change exam calendar per page. Defaults to 10.</p>
</form>


## Get All Categories.


This endpoint allows you to fetch all Exams Calendar Categories.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar/categories?page=19&per_page=12" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/categories"
);

let params = {
    "page": "19",
    "per_page": "12",
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
            "id": 3,
            "name": "Jerry Bode",
            "slug": "jerry-bode",
            "seo_keywords": null,
            "seo_description": null
        },
        {
            "id": 4,
            "name": "Crystel Pagac",
            "slug": "crystel-pagac",
            "seo_keywords": null,
            "seo_description": null
        }
    ]
}
```
<div id="execution-results-GETapi-examcalendar-categories" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-examcalendar-categories"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-examcalendar-categories"></code></pre>
</div>
<div id="execution-error-GETapi-examcalendar-categories" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-examcalendar-categories"></code></pre>
</div>
<form id="form-GETapi-examcalendar-categories" data-method="GET" data-path="api/examcalendar/categories" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-examcalendar-categories', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-examcalendar-categories" onclick="tryItOut('GETapi-examcalendar-categories');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-examcalendar-categories" onclick="cancelTryOut('GETapi-examcalendar-categories');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-examcalendar-categories" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/examcalendar/categories</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="page" data-endpoint="GETapi-examcalendar-categories" data-component="query"  hidden>
<br>
Field to change page. Defaults to 1.</p>
<p>
<b><code>per_page</code></b>&nbsp;&nbsp;<small>integer</small>     <i>optional</i> &nbsp;
<input type="number" name="per_page" data-endpoint="GETapi-examcalendar-categories" data-component="query"  hidden>
<br>
Field to change exam calendar categories per page. Defaults to 10.</p>
</form>


## Retrieve a Exam Calendar


This endpoint allows you to fetch a Exam Calendar.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar/magni" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/magni"
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
        "name": null,
        "date": null,
        "image": "",
        "official": null,
        "category": null,
        "url": null,
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
<div id="execution-results-GETapi-examcalendar--exam_calendar-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-examcalendar--exam_calendar-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-examcalendar--exam_calendar-"></code></pre>
</div>
<div id="execution-error-GETapi-examcalendar--exam_calendar-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-examcalendar--exam_calendar-"></code></pre>
</div>
<form id="form-GETapi-examcalendar--exam_calendar-" data-method="GET" data-path="api/examcalendar/{exam_calendar}" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-examcalendar--exam_calendar-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-examcalendar--exam_calendar-" onclick="tryItOut('GETapi-examcalendar--exam_calendar-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-examcalendar--exam_calendar-" onclick="cancelTryOut('GETapi-examcalendar--exam_calendar-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-examcalendar--exam_calendar-" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/examcalendar/{exam_calendar}</code></b>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>exam_calendar</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="exam_calendar" data-endpoint="GETapi-examcalendar--exam_calendar-" data-component="url" required  hidden>
<br>
</p>
<p>
<b><code>exam_calendars</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="exam_calendars" data-endpoint="GETapi-examcalendar--exam_calendar-" data-component="url" required  hidden>
<br>
The ID of the Exam Calendar.</p>
</form>




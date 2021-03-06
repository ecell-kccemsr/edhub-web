# Exam Calendar management

APIs for managing Exam Calendar

## Get All Exams Calendar


This endpoint allows you to fetch all Exams Calendar.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar?category_id=18&page=16&per_page=10" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar"
);

let params = {
    "category_id": "18",
    "page": "16",
    "per_page": "10",
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
            "name": "IBPS PO MAINS 2021",
            "date": "2021-02-04",
            "image": "http:\/\/127.0.0.1:8000\/storage\/exam-calendars\/March2021\/Jv3TZB5ZIcHOoSmuonE1.PNG",
            "official": true,
            "category": {
                "id": 1,
                "name": "Government Exams"
            },
            "url": "examcalendar",
            "created_at": "2021-03-04T13:00:01.000000Z",
            "created_at_formated": "2 days ago",
            "updated_at": "2021-03-04T13:00:01.000000Z",
            "updated_at_formated": "2 days ago"
        },
        {
            "name": "IBPS PO MAINS 2021",
            "date": "2021-02-04",
            "image": "http:\/\/127.0.0.1:8000\/storage\/exam-calendars\/March2021\/Jv3TZB5ZIcHOoSmuonE1.PNG",
            "official": true,
            "category": {
                "id": 1,
                "name": "Government Exams"
            },
            "url": "examcalendar",
            "created_at": "2021-03-04T13:00:01.000000Z",
            "created_at_formated": "2 days ago",
            "updated_at": "2021-03-04T13:00:01.000000Z",
            "updated_at_formated": "2 days ago"
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
    -G "http://127.0.0.1:8000/api/examcalendar/categories?page=6&per_page=4" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/categories"
);

let params = {
    "page": "6",
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
            "id": 23,
            "name": "Jefferey Wunsch"
        },
        {
            "id": 24,
            "name": "Mrs. Mariela Stamm Sr."
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
    -G "http://127.0.0.1:8000/api/examcalendar/7" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/7"
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
        "name": "IBPS PO MAINS 2021",
        "date": "2021-02-04",
        "image": "http:\/\/127.0.0.1:8000\/storage\/exam-calendars\/March2021\/Jv3TZB5ZIcHOoSmuonE1.PNG",
        "official": true,
        "category": {
            "id": 1,
            "name": "Government Exams"
        },
        "url": "examcalendar",
        "created_at": "2021-03-04T13:00:01.000000Z",
        "created_at_formated": "2 days ago",
        "updated_at": "2021-03-04T13:00:01.000000Z",
        "updated_at_formated": "2 days ago"
    }
}
```
<div id="execution-results-GETapi-examcalendar--exam_calendars-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-examcalendar--exam_calendars-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-examcalendar--exam_calendars-"></code></pre>
</div>
<div id="execution-error-GETapi-examcalendar--exam_calendars-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-examcalendar--exam_calendars-"></code></pre>
</div>
<form id="form-GETapi-examcalendar--exam_calendars-" data-method="GET" data-path="api/examcalendar/{exam_calendars}" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-examcalendar--exam_calendars-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-examcalendar--exam_calendars-" onclick="tryItOut('GETapi-examcalendar--exam_calendars-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-examcalendar--exam_calendars-" onclick="cancelTryOut('GETapi-examcalendar--exam_calendars-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-examcalendar--exam_calendars-" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/examcalendar/{exam_calendars}</code></b>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>exam_calendars</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="exam_calendars" data-endpoint="GETapi-examcalendar--exam_calendars-" data-component="url" required  hidden>
<br>
The ID of the Exam Calendar.</p>
</form>




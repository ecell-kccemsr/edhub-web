<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Eduhub Documentation</title>

    <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset("vendor/scribe/css/style.css") }}" media="screen" />
        <link rel="stylesheet" href="{{ asset("vendor/scribe/css/print.css") }}" media="print" />
        <script src="{{ asset("vendor/scribe/js/all.js") }}"></script>

        <link rel="stylesheet" href="{{ asset("vendor/scribe/css/highlight-darcula.css") }}" media="" />
        <script src="{{ asset("vendor/scribe/js/highlight.pack.js") }}"></script>
    <script>hljs.initHighlightingOnLoad();</script>

</head>

<body class="" data-languages="[&quot;bash&quot;,&quot;javascript&quot;]">
<a href="#" id="nav-button">
      <span>
        NAV
            <img src="{{ asset("vendor/scribe/images/navbar.png") }}" alt="-image" class=""/>
      </span>
</a>
<div class="tocify-wrapper">
                <div class="lang-selector">
                            <a href="#" data-language-name="bash">bash</a>
                            <a href="#" data-language-name="javascript">javascript</a>
                    </div>
        <div class="search">
        <input type="text" class="search" id="input-search" placeholder="Search">
    </div>
    <ul class="search-results"></ul>

    <ul id="toc">
    </ul>

            <ul class="toc-footer" id="toc-footer">
                            <li><a href="{{ route("scribe.postman") }}">View Postman collection</a></li>
                            <li><a href="{{ route("scribe.openapi") }}">View OpenAPI (Swagger) spec</a></li>
                            <li><a href='http://github.com/knuckleswtf/scribe'>Documentation powered by Scribe ✍</a></li>
                    </ul>
            <ul class="toc-footer" id="last-updated">
            <li>Last updated: March 6 2021</li>
        </ul>
</div>
<div class="page-wrapper">
    <div class="dark-box"></div>
    <div class="content">
        <h1>Introduction</h1>
<p>This documentation aims to provide all the information you need to work with our API.</p>
<aside>As you scroll, you'll see code examples for working with the API in different programming languages in the dark area to the right (or as part of the content on mobile).
You can switch the language used with the tabs at the top right (or from the nav menu at the top left on mobile).</aside>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>
<script>
    var baseUrl = "http://127.0.0.1:8000";
</script>
<script src="{{ asset("vendor/scribe/js/tryitout-2.5.3.js") }}"></script>
<blockquote>
<p>Base URL</p>
</blockquote>
<pre><code class="language-yaml">http://127.0.0.1:8000</code></pre><h1>Authenticating requests</h1>
<p>This API is not authenticated.</p><h1>Endpoints</h1>
<h2>api/user</h2>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (401):</p>
</blockquote>
<pre><code class="language-json">{
    "message": "Unauthenticated."
}</code></pre>
<div id="execution-results-GETapi-user" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-user"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-user"></code></pre>
</div>
<div id="execution-error-GETapi-user" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-user"></code></pre>
</div>
<form id="form-GETapi-user" data-method="GET" data-path="api/user" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-user', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-user" onclick="tryItOut('GETapi-user');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-user" onclick="cancelTryOut('GETapi-user');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-user" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/user</code></b>
</p>
</form><h1>Exam Calendar management</h1>
<p>APIs for managing Exam Calendar</p>
<h2>Get All Exams Calendar</h2>
<p>This endpoint allows you to fetch all Exams Calendar.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar?category_id=18&amp;page=16&amp;per_page=10" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar"
);

let params = {
    "category_id": "18",
    "page": "16",
    "per_page": "10",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
}</code></pre>
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
<h2>Get All Categories.</h2>
<p>This endpoint allows you to fetch all Exams Calendar Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar/categories?page=6&amp;per_page=4" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/categories"
);

let params = {
    "page": "6",
    "per_page": "4",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
}</code></pre>
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
<h2>Retrieve a Exam Calendar</h2>
<p>This endpoint allows you to fetch a Exam Calendar.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar/7" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/7"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
}</code></pre>
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
</form><h1>Government Job management</h1>
<p>APIs for managing Government Job</p>
<h2>Get All Government Jobs</h2>
<p>This endpoint allows you to fetch all Government Jobs.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs?category_id=16&amp;subcategory_id=9&amp;page=13&amp;per_page=9" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs"
);

let params = {
    "category_id": "16",
    "subcategory_id": "9",
    "page": "13",
    "per_page": "9",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
}</code></pre>
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
<h2>Get All Categories.</h2>
<p>This endpoint allows you to fetch all Government Job Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs/categories?page=12&amp;per_page=11" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/categories"
);

let params = {
    "page": "12",
    "per_page": "11",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
    "data": [
        {
            "id": 15,
            "name": "Callie Kunze",
            "image": "http:\/\/127.0.0.1:8000\/storage\/C:\/Users\/Admin\/AppData\/Local\/Temp\/fcfab62bdd39336e1d8c531f0f2a95f7.png",
            "created_at": "2021-03-06T16:01:14.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-06T16:01:14.000000Z",
            "updated_at_formated": "1 second ago"
        },
        {
            "id": 16,
            "name": "Geo Daugherty",
            "image": "http:\/\/127.0.0.1:8000\/storage\/C:\/Users\/Admin\/AppData\/Local\/Temp\/18ff10444129de49a7b21af205cf921f.png",
            "created_at": "2021-03-06T16:01:15.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-06T16:01:15.000000Z",
            "updated_at_formated": "1 second ago"
        }
    ]
}</code></pre>
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
<h2>Get All Sub Categories.</h2>
<p>This endpoint allows you to fetch all Government Job Sub Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs/sub_categories?category_id=13&amp;page=16&amp;per_page=7" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/sub_categories"
);

let params = {
    "category_id": "13",
    "page": "16",
    "per_page": "7",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
    "data": [
        {
            "id": null,
            "name": "Dr. Iva Stracke DVM",
            "category": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        },
        {
            "id": null,
            "name": "Gregg Doyle",
            "category": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        }
    ]
}</code></pre>
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
<h2>Retrieve a Government Jobs</h2>
<p>This endpoint allows you to fetch a Government Jobs.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs/13" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/13"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
    "data": {
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
}</code></pre>
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
</form><h1>News management</h1>
<p>APIs for managing News</p>
<h2>Get All the News</h2>
<p>This endpoint allows you to fetch all the News.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/news?category_id=15&amp;subcategory_id=4&amp;page=20&amp;per_page=15" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news"
);

let params = {
    "category_id": "15",
    "subcategory_id": "4",
    "page": "20",
    "per_page": "15",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
            "updated_at_formated": null
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
            "updated_at_formated": null
        }
    ]
}</code></pre>
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
<h2>Get All Categories.</h2>
<p>This endpoint allows you to fetch all News Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/news/categories?page=15&amp;per_page=13" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/categories"
);

let params = {
    "page": "15",
    "per_page": "13",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
    "data": [
        {
            "id": 11,
            "name": "Brennon Koss",
            "created_at": "2021-03-06T16:01:16.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-06T16:01:16.000000Z",
            "updated_at_formated": "1 second ago"
        },
        {
            "id": 12,
            "name": "Domenick Davis",
            "created_at": "2021-03-06T16:01:16.000000Z",
            "created_at_formated": "1 second ago",
            "updated_at": "2021-03-06T16:01:16.000000Z",
            "updated_at_formated": "1 second ago"
        }
    ]
}</code></pre>
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
<h2>Get All Sub Categories.</h2>
<p>This endpoint allows you to fetch all News Sub Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/news/sub_categories?category_id=19&amp;page=1&amp;per_page=19" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/sub_categories"
);

let params = {
    "category_id": "19",
    "page": "1",
    "per_page": "19",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
    "data": [
        {
            "id": null,
            "name": "Mr. Timothy Daugherty",
            "category": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        },
        {
            "id": null,
            "name": "Mrs. Catalina Swaniawski",
            "category": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        }
    ]
}</code></pre>
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
<h2>Retrieve a News</h2>
<p>This endpoint allows you to fetch a News.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/news/10" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/10"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
        "updated_at_formated": null
    }
}</code></pre>
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
</form><h1>Question Paper management</h1>
<p>APIs for managing Question Paper</p>
<h2>Get All the Question Papers</h2>
<p>This endpoint allows you to fetch all the Question Papers.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/questionpapers?category_id=2&amp;page=14&amp;per_page=20" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers"
);

let params = {
    "category_id": "2",
    "page": "14",
    "per_page": "20",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
            "updated_at_formated": null
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
            "updated_at_formated": null
        }
    ]
}</code></pre>
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
<h2>Get All Categories.</h2>
<p>This endpoint allows you to fetch all Question Paper Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/questionpapers/categories?page=6&amp;per_page=8" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers/categories"
);

let params = {
    "page": "6",
    "per_page": "8",
};
Object.keys(params)
    .forEach(key =&gt; url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
    "data": [
        {
            "id": null,
            "name": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        },
        {
            "id": null,
            "name": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        }
    ]
}</code></pre>
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
<h2>Retrieve a Question Paper</h2>
<p>This endpoint allows you to fetch a Question Paper.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/questionpapers/6" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers/6"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">{
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
        "updated_at_formated": null
    }
}</code></pre>
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
    </div>
    <div class="dark-box">
                    <div class="lang-selector">
                                    <a href="#" data-language-name="bash">bash</a>
                                    <a href="#" data-language-name="javascript">javascript</a>
                            </div>
            </div>
</div>
<script>
    $(function () {
        var languages = ["bash","javascript"];
        setupLanguages(languages);
    });
</script>
</body>
</html>
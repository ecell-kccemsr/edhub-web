# Endpoints


## api/user




> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/user"
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


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```
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
</form>


## api/reset-link




> Example request:

```bash
curl -X POST \
    "http://127.0.0.1:8000/api/reset-link" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/reset-link"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers,
}).then(response => response.json());
```


<div id="execution-results-POSTapi-reset-link" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-reset-link"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-reset-link"></code></pre>
</div>
<div id="execution-error-POSTapi-reset-link" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-reset-link"></code></pre>
</div>
<form id="form-POSTapi-reset-link" data-method="POST" data-path="api/reset-link" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-reset-link', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-reset-link" onclick="tryItOut('POSTapi-reset-link');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-reset-link" onclick="cancelTryOut('POSTapi-reset-link');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-reset-link" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/reset-link</code></b>
</p>
</form>


## api/reset-password




> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/reset-password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/reset-password"
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
    "message": "Wrong token passed"
}
```
<div id="execution-results-GETapi-reset-password" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-reset-password"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-reset-password"></code></pre>
</div>
<div id="execution-error-GETapi-reset-password" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-reset-password"></code></pre>
</div>
<form id="form-GETapi-reset-password" data-method="GET" data-path="api/reset-password" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-reset-password', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-reset-password" onclick="tryItOut('GETapi-reset-password');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-reset-password" onclick="cancelTryOut('GETapi-reset-password');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-reset-password" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/reset-password</code></b>
</p>
</form>


## api/change-password




> Example request:

```bash
curl -X POST \
    "http://127.0.0.1:8000/api/change-password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"new_password":{}}'

```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/change-password"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "new_password": {}
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


<div id="execution-results-POSTapi-change-password" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-change-password"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-change-password"></code></pre>
</div>
<div id="execution-error-POSTapi-change-password" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-change-password"></code></pre>
</div>
<form id="form-POSTapi-change-password" data-method="POST" data-path="api/change-password" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-change-password', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-change-password" onclick="tryItOut('POSTapi-change-password');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-change-password" onclick="cancelTryOut('POSTapi-change-password');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-change-password" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/change-password</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>new_password</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
<input type="text" name="new_password" data-endpoint="POSTapi-change-password" data-component="body"  hidden>
<br>
</p>

</form>


## Get All Exam Result


This endpoint allows you to fetch all Exam Result.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/examresults" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/examresults"
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
    "data": [
        {
            "id": null,
            "name": null,
            "description": null,
            "url": null,
            "seo_keywords": null,
            "seo_description": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        },
        {
            "id": null,
            "name": null,
            "description": null,
            "url": null,
            "seo_keywords": null,
            "seo_description": null,
            "created_at": null,
            "created_at_formated": null,
            "updated_at": null,
            "updated_at_formated": null
        }
    ]
}
```
<div id="execution-results-GETapi-examresults" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-examresults"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-examresults"></code></pre>
</div>
<div id="execution-error-GETapi-examresults" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-examresults"></code></pre>
</div>
<form id="form-GETapi-examresults" data-method="GET" data-path="api/examresults" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-examresults', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-examresults" onclick="tryItOut('GETapi-examresults');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-examresults" onclick="cancelTryOut('GETapi-examresults');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-examresults" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/examresults</code></b>
</p>
</form>


## Add a Category


This endpoint allows you to add a category.

> Example request:

```bash
curl -X POST \
    "http://127.0.0.1:8000/api/register_for_free_updates/add" \
    -H "Content-Type: multipart/form-data" \
    -H "Accept: application/json" \
    -F "name=et" \
    -F "email=@C:\Users\Admin\AppData\Local\Temp\php9A27.tmp"     -F "mobile_no=@C:\Users\Admin\AppData\Local\Temp\php9A85.tmp" 
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/register_for_free_updates/add"
);

let headers = {
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
};

const body = new FormData();
body.append('name', 'et');
body.append('email', document.querySelector('input[name="email"]').files[0]);
body.append('mobile_no', document.querySelector('input[name="mobile_no"]').files[0]);

fetch(url, {
    method: "POST",
    headers,
    body,
}).then(response => response.json());
```


<div id="execution-results-POSTapi-register_for_free_updates-add" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-register_for_free_updates-add"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-register_for_free_updates-add"></code></pre>
</div>
<div id="execution-error-POSTapi-register_for_free_updates-add" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-register_for_free_updates-add"></code></pre>
</div>
<form id="form-POSTapi-register_for_free_updates-add" data-method="POST" data-path="api/register_for_free_updates/add" data-authed="0" data-hasfiles="2" data-headers='{"Content-Type":"multipart\/form-data","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-register_for_free_updates-add', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-register_for_free_updates-add" onclick="tryItOut('POSTapi-register_for_free_updates-add');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-register_for_free_updates-add" onclick="cancelTryOut('POSTapi-register_for_free_updates-add');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-register_for_free_updates-add" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/register_for_free_updates/add</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>name</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="name" data-endpoint="POSTapi-register_for_free_updates-add" data-component="body" required  hidden>
<br>
The name of the category</p>
<p>
<b><code>email</code></b>&nbsp;&nbsp;<small>file</small>  &nbsp;
<input type="file" name="email" data-endpoint="POSTapi-register_for_free_updates-add" data-component="body" required  hidden>
<br>
The email of the category</p>
<p>
<b><code>mobile_no</code></b>&nbsp;&nbsp;<small>file</small>  &nbsp;
<input type="file" name="mobile_no" data-endpoint="POSTapi-register_for_free_updates-add" data-component="body" required  hidden>
<br>
The mobile_no of the category</p>

</form>




# Authenticating requests


## Signup


This endpoint allows you to Signup and retrieve an access token.

> Example request:

```bash
curl -X POST \
    "http://127.0.0.1:8000/api/auth/signup" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"cumque","email":"quae","password":"nihil","confirm_password":"tenetur","gender":"quo"}'

```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/auth/signup"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "cumque",
    "email": "quae",
    "password": "nihil",
    "confirm_password": "tenetur",
    "gender": "quo"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (401):

```json
{
    "message": "Unauthorized"
}
```
> Example response (200):

```json

{
 "access_token" : "<ACCESS_TOKEN>",
 "token_type" : "Bearer",
 "expires_at" : "<EXPIRES_AT>",
}
```
<div id="execution-results-POSTapi-auth-signup" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-signup"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-signup"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-signup" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-signup"></code></pre>
</div>
<form id="form-POSTapi-auth-signup" data-method="POST" data-path="api/auth/signup" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-signup', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-auth-signup" onclick="tryItOut('POSTapi-auth-signup');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-auth-signup" onclick="cancelTryOut('POSTapi-auth-signup');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-auth-signup" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/signup</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>name</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="name" data-endpoint="POSTapi-auth-signup" data-component="body" required  hidden>
<br>
The name of the user.</p>
<p>
<b><code>email</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="email" data-endpoint="POSTapi-auth-signup" data-component="body" required  hidden>
<br>
The email of the user.</p>
<p>
<b><code>password</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="password" data-endpoint="POSTapi-auth-signup" data-component="body" required  hidden>
<br>
</p>
<p>
<b><code>confirm_password</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="confirm_password" data-endpoint="POSTapi-auth-signup" data-component="body" required  hidden>
<br>
The confirm_password of the user.</p>
<p>
<b><code>gender</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="gender" data-endpoint="POSTapi-auth-signup" data-component="body" required  hidden>
<br>
The gender of the user.</p>

</form>


## Login


This endpoint allows you to login and retrieve an access token.

> Example request:

```bash
curl -X POST \
    "http://127.0.0.1:8000/api/auth/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"modi","password":"debitis"}'

```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/auth/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": "modi",
    "password": "debitis"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (401):

```json
{
    "message": "Unauthorized"
}
```
> Example response (200):

```json

{
 "access_token" : "<ACCESS_TOKEN>",
 "token_type" : "Bearer",
 "expires_at" : "<EXPIRES_AT>",
}
```
<div id="execution-results-POSTapi-auth-login" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-login"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-login"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-login" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-login"></code></pre>
</div>
<form id="form-POSTapi-auth-login" data-method="POST" data-path="api/auth/login" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-login', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-auth-login" onclick="tryItOut('POSTapi-auth-login');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-auth-login" onclick="cancelTryOut('POSTapi-auth-login');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-auth-login" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/login</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>email</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="email" data-endpoint="POSTapi-auth-login" data-component="body" required  hidden>
<br>
The email of the user.</p>
<p>
<b><code>password</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="password" data-endpoint="POSTapi-auth-login" data-component="body" required  hidden>
<br>
The password of the user.</p>

</form>


## Logout


This endpoint allows you to logout.

> Example request:

```bash
curl -X POST \
    "http://127.0.0.1:8000/api/auth/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/auth/logout"
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


> Example response (401):

```json
{
    "message": "Unauthorized"
}
```
> Example response (200):

```json

{
 "message" : "Successfully logged out!",
}
```
<div id="execution-results-POSTapi-auth-logout" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-logout"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-logout"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-logout" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-logout"></code></pre>
</div>
<form id="form-POSTapi-auth-logout" data-method="POST" data-path="api/auth/logout" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-logout', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-auth-logout" onclick="tryItOut('POSTapi-auth-logout');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-auth-logout" onclick="cancelTryOut('POSTapi-auth-logout');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-auth-logout" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/logout</code></b>
</p>
</form>


## Get Authenticated User

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to get authenticated User.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/auth/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/auth/user"
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
        "id": 2,
        "name": "Jolie Reichert",
        "email": "edyth.ryan@example.net",
        "gender": null,
        "seo_keywords": null,
        "seo_description": null
    }
}
```
<div id="execution-results-GETapi-auth-user" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-auth-user"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-auth-user"></code></pre>
</div>
<div id="execution-error-GETapi-auth-user" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-auth-user"></code></pre>
</div>
<form id="form-GETapi-auth-user" data-method="GET" data-path="api/auth/user" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-auth-user', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-auth-user" onclick="tryItOut('GETapi-auth-user');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-auth-user" onclick="cancelTryOut('GETapi-auth-user');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-auth-user" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/auth/user</code></b>
</p>
<p>
<label id="auth-GETapi-auth-user" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="GETapi-auth-user" data-component="header"></label>
</p>
</form>


## Verify


This endpoint allows you to verify email.

> Example request:

```bash
curl -X GET \
    -G "http://127.0.0.1:8000/api/auth/verify-email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"ut","password":"quas"}'

```

```javascript
const url = new URL(
    "http://127.0.0.1:8000/api/auth/verify-email"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": "ut",
    "password": "quas"
}

fetch(url, {
    method: "GET",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (401):

```json
{
    "message": "Unauthorized"
}
```
> Example response (200):

```json

{
 "access_token" : "<ACCESS_TOKEN>",
 "token_type" : "Bearer",
 "expires_at" : "<EXPIRES_AT>",
}
```
<div id="execution-results-GETapi-auth-verify-email" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-auth-verify-email"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-auth-verify-email"></code></pre>
</div>
<div id="execution-error-GETapi-auth-verify-email" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-auth-verify-email"></code></pre>
</div>
<form id="form-GETapi-auth-verify-email" data-method="GET" data-path="api/auth/verify-email" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-auth-verify-email', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-auth-verify-email" onclick="tryItOut('GETapi-auth-verify-email');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-auth-verify-email" onclick="cancelTryOut('GETapi-auth-verify-email');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-auth-verify-email" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/auth/verify-email</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>email</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="email" data-endpoint="GETapi-auth-verify-email" data-component="body" required  hidden>
<br>
The email of the user.</p>
<p>
<b><code>password</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="password" data-endpoint="GETapi-auth-verify-email" data-component="body" required  hidden>
<br>
The password of the user.</p>

</form>




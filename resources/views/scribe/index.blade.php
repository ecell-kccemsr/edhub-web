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
            <li>Last updated: March 30 2021</li>
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
<p>This API is not authenticated.</p><h1>Authenticating requests</h1>
<h2>Signup</h2>
<p>This endpoint allows you to Signup and retrieve an access token.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X POST \
    "http://127.0.0.1:8000/api/auth/signup" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"cumque","email":"quae","password":"nihil","confirm_password":"tenetur","gender":"quo"}'
</code></pre>
<pre><code class="language-javascript">const url = new URL(
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
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (401):</p>
</blockquote>
<pre><code class="language-json">{
    "message": "Unauthorized"
}</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">
{
 "access_token" : "&lt;ACCESS_TOKEN&gt;",
 "token_type" : "Bearer",
 "expires_at" : "&lt;EXPIRES_AT&gt;",
}</code></pre>
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
<h2>Login</h2>
<p>This endpoint allows you to login and retrieve an access token.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X POST \
    "http://127.0.0.1:8000/api/auth/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"modi","password":"debitis"}'
</code></pre>
<pre><code class="language-javascript">const url = new URL(
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
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (401):</p>
</blockquote>
<pre><code class="language-json">{
    "message": "Unauthorized"
}</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">
{
 "access_token" : "&lt;ACCESS_TOKEN&gt;",
 "token_type" : "Bearer",
 "expires_at" : "&lt;EXPIRES_AT&gt;",
}</code></pre>
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
<h2>Logout</h2>
<p>This endpoint allows you to logout.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X POST \
    "http://127.0.0.1:8000/api/auth/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/auth/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers,
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (401):</p>
</blockquote>
<pre><code class="language-json">{
    "message": "Unauthorized"
}</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">
{
 "message" : "Successfully logged out!",
}</code></pre>
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
<h2>Get Authenticated User</h2>
<p><small class="badge badge-darkred">requires authentication</small></p>
<p>This endpoint allows you to get authenticated User.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/auth/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/auth/user"
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
        "id": 2,
        "name": "Jolie Reichert",
        "email": "edyth.ryan@example.net",
        "gender": null,
        "seo_keywords": null,
        "seo_description": null
    }
}</code></pre>
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
<h2>Verify</h2>
<p>This endpoint allows you to verify email.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/auth/verify-email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"ut","password":"quas"}'
</code></pre>
<pre><code class="language-javascript">const url = new URL(
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
}).then(response =&gt; response.json());</code></pre>
<blockquote>
<p>Example response (401):</p>
</blockquote>
<pre><code class="language-json">{
    "message": "Unauthorized"
}</code></pre>
<blockquote>
<p>Example response (200):</p>
</blockquote>
<pre><code class="language-json">
{
 "access_token" : "&lt;ACCESS_TOKEN&gt;",
 "token_type" : "Bearer",
 "expires_at" : "&lt;EXPIRES_AT&gt;",
}</code></pre>
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

</form><h1>Endpoints</h1>
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
</form>
<h2>api/reset-link</h2>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X POST \
    "http://127.0.0.1:8000/api/reset-link" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/reset-link"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers,
}).then(response =&gt; response.json());</code></pre>
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
<h2>api/reset-password</h2>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/reset-password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/reset-password"
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
    "message": "Wrong token passed"
}</code></pre>
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
<h2>api/change-password</h2>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X POST \
    "http://127.0.0.1:8000/api/change-password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"new_password":{}}'
</code></pre>
<pre><code class="language-javascript">const url = new URL(
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
}).then(response =&gt; response.json());</code></pre>
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
<h2>Get All Exam Result</h2>
<p>This endpoint allows you to fetch all Exam Result.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/examresults" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examresults"
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
}</code></pre>
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
<h2>Add a Category</h2>
<p>This endpoint allows you to add a category.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X POST \
    "http://127.0.0.1:8000/api/register_for_free_updates/add" \
    -H "Content-Type: multipart/form-data" \
    -H "Accept: application/json" \
    -F "name=et" \
    -F "email=@C:\Users\Admin\AppData\Local\Temp\php9A27.tmp"     -F "mobile_no=@C:\Users\Admin\AppData\Local\Temp\php9A85.tmp" </code></pre>
<pre><code class="language-javascript">const url = new URL(
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
}).then(response =&gt; response.json());</code></pre>
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

</form><h1>Exam Calendar management</h1>
<p>APIs for managing Exam Calendar</p>
<h2>Get All Exams Calendar</h2>
<p>This endpoint allows you to fetch all Exams Calendar.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/examcalendar?category_id=15&amp;page=8&amp;per_page=17" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar"
);

let params = {
    "category_id": "15",
    "page": "8",
    "per_page": "17",
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
    -G "http://127.0.0.1:8000/api/examcalendar/categories?page=19&amp;per_page=12" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/categories"
);

let params = {
    "page": "19",
    "per_page": "12",
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
    -G "http://127.0.0.1:8000/api/examcalendar/magni" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/examcalendar/magni"
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
}</code></pre>
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
</form><h1>Government Job management</h1>
<p>APIs for managing Government Job</p>
<h2>Get All Government Jobs</h2>
<p>This endpoint allows you to fetch all Government Jobs.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/government_jobs?category_id=13&amp;subcategory_id=17&amp;page=3&amp;per_page=11" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs"
);

let params = {
    "category_id": "13",
    "subcategory_id": "17",
    "page": "3",
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
    -G "http://127.0.0.1:8000/api/government_jobs/categories?page=4&amp;per_page=20" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/categories"
);

let params = {
    "page": "4",
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
    -G "http://127.0.0.1:8000/api/government_jobs/sub_categories?category_id=17&amp;page=12&amp;per_page=5" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/sub_categories"
);

let params = {
    "category_id": "17",
    "page": "12",
    "per_page": "5",
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
    -G "http://127.0.0.1:8000/api/government_jobs/15" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/government_jobs/15"
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
    -G "http://127.0.0.1:8000/api/news?category_id=8&amp;subcategory_id=9&amp;page=8&amp;per_page=17" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news"
);

let params = {
    "category_id": "8",
    "subcategory_id": "9",
    "page": "8",
    "per_page": "17",
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
<h2>api/news/trending</h2>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/news/trending" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/trending"
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
    "data": []
}</code></pre>
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
<h2>Get All Categories.</h2>
<p>This endpoint allows you to fetch all News Categories.</p>
<blockquote>
<p>Example request:</p>
</blockquote>
<pre><code class="language-bash">curl -X GET \
    -G "http://127.0.0.1:8000/api/news/categories?page=13&amp;per_page=1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/categories"
);

let params = {
    "page": "13",
    "per_page": "1",
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
    -G "http://127.0.0.1:8000/api/news/sub_categories?category_id=15&amp;page=18&amp;per_page=15" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/sub_categories"
);

let params = {
    "category_id": "15",
    "page": "18",
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
    -G "http://127.0.0.1:8000/api/news/9" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/news/9"
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
        "updated_at_formated": null,
        "slug": null,
        "seo_keywords": null,
        "seo_description": null
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
    -G "http://127.0.0.1:8000/api/questionpapers?category_id=13&amp;page=10&amp;per_page=7" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers"
);

let params = {
    "category_id": "13",
    "page": "10",
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
    -G "http://127.0.0.1:8000/api/questionpapers/categories?page=5&amp;per_page=18" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers/categories"
);

let params = {
    "page": "5",
    "per_page": "18",
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
    -G "http://127.0.0.1:8000/api/questionpapers/5" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"</code></pre>
<pre><code class="language-javascript">const url = new URL(
    "http://127.0.0.1:8000/api/questionpapers/5"
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
        "updated_at_formated": null,
        "slug": null,
        "seo_keywords": null,
        "seo_description": null
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
const mix = require("laravel-mix");
const argv = require('yargs').argv;
require('laravel-mix-merge-manifest');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/

if (argv.js) {
    console.log("We are going with JS :)");
    mix.react("resources/js/app.js", "public/js")
}

if (argv.css) {
    console.log("We are going with CSS :)");
    mix.sass("resources/sass/app.scss", "public/css")
}

mix.mergeManifest();

if (mix.inProduction()) {

    mix.options({
        cssNano: {
            discardComments: {
                removeAll: true,
            },
        },
    })

    console.log("Enabling versioning")
    mix.version();
}
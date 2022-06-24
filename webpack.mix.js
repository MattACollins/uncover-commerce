let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/js/app.js', 'assets')
    .css('src/css/app.css', 'assets')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
    });
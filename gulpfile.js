const { src, dest } = require('gulp');
const ext_replace = require('gulp-ext-replace');
var flatten = require('gulp-flatten');

function copyAsTemplates() {
  return src('node_modules/@fortawesome/**/svgs/**/*.svg')
    .pipe(flatten())
    .pipe(ext_replace('.html'))
    .pipe(dest('layouts/partials/icons/'));
}

function copyAsSVG(){
  return src('node_modules/@fortawesome/**/svgs/**/*.svg')
    .pipe(flatten())
    .pipe(ext_replace('.html'))
    .pipe(dest('static/icons/'));
}

exports.copyAsTemplates = copyAsTemplates;
exports.copySVG = copyAsSVG;
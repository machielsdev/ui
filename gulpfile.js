'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const rename = require('gulp-rename');

const buildCss = async () => {
    return await gulp.src('./src/style/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

gulp.task('css:build', buildCss);

const copySass = async () => {
    return await gulp.src('./src/style/**/*.scss')
        .pipe(gulp.dest('./dist/scss'))
}

gulp.task('sass:copy', copySass);

const buildCssMin = async () => {
    return await gulp.src('./src/style/index.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('./dist/css'));
}

gulp.task('css:build:min', buildCssMin);

const copyIcons = async () => {
    return await gulp.src('./src/icons/*')
        .pipe(gulp.dest('./dist/icons'))
}

gulp.task('icons:copy', copyIcons);

gulp.task('default', gulp.series(
    'css:build',
    'css:build:min',
    'sass:copy',
    'icons:copy'
));

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const rename = require('gulp-rename');
const ts = require('gulp-typescript');

const buildSass = async () => {
    return await gulp.src('./src/style/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
}

gulp.task('sass', buildSass);

const buildSassMin = async () => {
    return await gulp.src('./src/style/index.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('./dist/style'));
}

gulp.task('sass:min', buildSassMin);

gulp.task('default', gulp.series('sass', 'sass:min'));

'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const rimraf = require('rimraf');

var path = {
    dev: {
        fonts: './dev/static/fonts/*.*',
        entry: './dev/js/app.js'
    },
    
    build: {
        main: './build/',
        fonts: './build/fonts/'
    },

    clean: './build/*'
}

gulp.task('build', [
    'fonts',
    'webpack'
]);

gulp.task('fonts', () => {
    gulp.src(path.dev.fonts)
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.build.fonts))
    gulp.src(path.dev.fonts)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('webpack', () => {
    gulp.src(path.dev.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(path.build.main))
})

gulp.task('clean', (d) => {
    rimraf(path.clean, d);
})
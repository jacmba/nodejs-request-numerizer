'use strict';

let gulp = require('gulp');
let mocha = require('gulp-mocha');
let gutil = require('gulp-util');

gulp.task('default', () => {
    gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', () => {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});
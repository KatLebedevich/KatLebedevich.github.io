var less = require('gulp-less');
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src('./css/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task('less:watch', function () {
    gulp.watch('./css/styles/*.less', gulp.series('less'));
});

gulp.task('default', function () {
    gulp.src('./css/anim/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./distmin'));
});
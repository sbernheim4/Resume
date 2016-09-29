'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('html', function() {
	return gulp.src('./*html')
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('sass', function() {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass({errLogToConsole: true}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass', 'html'], function() {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch']);

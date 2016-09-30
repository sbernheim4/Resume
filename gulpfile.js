'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function() {
	return gulp.src('./*.html')
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('sass', function() {
	return gulp.src('./scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 1337
	})
})

gulp.task('watch', ['browserSync', 'sass', 'html'], function() {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch']);

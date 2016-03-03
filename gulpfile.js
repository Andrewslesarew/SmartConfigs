'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

var files = {
  scripts: {
    server: [
      'app/**/*.js',
      'bin/*',
      'config/**/*.js',
      '*.js'
    ],
    public: ['app/js/**/*.js']
  },
  sass: ['app/sass/**/*.scss']
};

// Code quality

gulp.task('lint', function () {
  var toLint = [].concat(files.scripts.server, files.scripts.public);
  return gulp.src(toLint)
    .pipe($.plumber())
    .pipe($.cached('lint'))
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish))
    .pipe($.jscs());
});

// Build

gulp.task('sass', function () {
  gulp.src(['app/sass/*.scss', 'app/sass/**/*.scss'])
    .pipe(sass({errLogToConsole: true}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/build/css'));
});

gulp.task('scripts', function () {
  gulp.src(['app/js/**/*.js', 'app/js/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/build/js'))
});

//Jade

gulp.task('templates', function () {
  gulp.src(['./app/views/*.jade', './app/views/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./public/templates'));
});

gulp.task('build', ['lint', 'sass', 'templates', 'scripts']);

// Development

gulp.task('watch', ['build'], function () {
  $.developServer.listen({ path: './bin/www' });

  gulp.watch(files.scripts.server, $.developServer.restart);
  gulp.watch(files.schemas, $.developServer.restart);

  gulp.watch(files.sass, ['sass', 'templates', 'scripts']);
});

gulp.task('default', ['watch']);

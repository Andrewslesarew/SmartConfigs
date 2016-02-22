'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var files = {
  scripts: {
    server: [
      'app/**/*.js',
      'bin/*',
      'config/**/*.js',
      '*.js'
    ],
    public: ['public/js/**/*.js']
  },
  sass: ['public/sass/**/*.scss']
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
  gulp.src(['public/sass/*.scss', 'public/sass/**/*.scss'])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('build', ['lint', 'sass']);

// Development

gulp.task('watch', ['build'], function () {
  $.developServer.listen({ path: './bin/www' });

  gulp.watch(files.scripts.server, $.developServer.restart);
  gulp.watch(files.schemas, $.developServer.restart);

  gulp.watch(files.sass, ['sass']);
});

gulp.task('default', ['watch']);

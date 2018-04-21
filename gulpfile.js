'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var cssnano      = require('cssnano');
var rename       = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var rimraf       = require('rimraf');

var dir = {
  src: {
    css: 'src/css'
  },
  dist: {
    css: '.'
  }
}

/**
 * Build CSS
 */
gulp.task('css', function() {
  return sassCompile(dir.src.css + '/*.scss', dir.dist.css);
});

function sassCompile(src, dest) {
  return gulp.src(src)
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]))
    .pipe(postcss([
      cssnano({
        'zindex': false
      })
    ]))
    .pipe(gulp.dest(dest))
}

/**
 * Build
 */
gulp.task('build', ['css']);

/**
 * Auto build and browsersync
 */
gulp.task('default', ['build'], function() {
  gulp.watch([dir.src.css + '/**/*.scss'], ['css']);
});

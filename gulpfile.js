'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var cssnano      = require('cssnano');
var rename       = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var rimraf       = require('rimraf');
var zip          = require('gulp-zip');

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
 * Creates the zip file
 * This command must be build beforehand on Travis CI !!
 */
gulp.task('zip', function(){
  return gulp.src(
      [
        '**',
        '!.git',
        '!.git/**',
        '!.editorconfig',
        '!.gitignore',
        '!.travis.yml',
        '!codesniffer.ruleset.xml',
        '!composer.json',
        '!composer.lock',
        '!gulpfile.js',
        '!package.json',
        '!phpcs.ruleset.xml',
        '!phpmd.ruleset.xml',
        '!yarn.lock',
        '!node_modules',
        '!node_modules/**'
      ],
      {base: './'}
    )
    .pipe(zip('snow-monkey-design-skin-spring.zip'))
    .pipe(gulp.dest('./'));
});

/**
 * Auto build and browsersync
 */
gulp.task('default', ['build'], function() {
  gulp.watch([dir.src.css + '/**/*.scss'], ['css']);
});

'use strict';
var gulp      = require('gulp'),
  browserify  = require('browserify'),
  browserSync = require('browser-sync'),
  gutil       = require('gulp-util'),
  debug       = require('gulp-debug'),
  concat      = require('gulp-concat'),
  react       = require('gulp-react'),
  source      = require('vinyl-source-stream'),
  runSequence = require('run-sequence');

// ***********************************//
// Transform the jsx files to js 
// Concatenate the them into
// buildpath/fp
// ***********************************//
var buildPath = 'dist';
var fp = 'cj_build.js';

// ***********************************//
// IIFE the buildPath/fp into bundlePath
// ***********************************//
var bundlePath = 'client/bundle.js';
var jsxPaths = 'views/**/*.jsx';
// ***********************************//
// Run the transformation and concatenation
// ***********************************//
gulp.task('jsx-transform', function() {
  return gulp.src(jsxPaths)                   // jsx file paths
      .pipe(debug({title: 'COMPILE jsx:'}))   // console log
    .pipe(react())                            // Transform jsx in pipline
      .on('error', gutil.log)                 // log any errors
      .pipe(debug({title: 'After react():'})) // console log
    .pipe(gulp.dest(buildPath))               // after jsx transform place files here
    .pipe(concat(fp))                         // conncat all transformed jsx into to fp
      .on('error', gutil.log)                 // log any errors
    .pipe(gulp.dest(buildPath));              // place the concatenated file here
});

// ***********************************//
// IIFE the concatenated file of transformed jsx
//  so we can require modules
// ***********************************//
gulp.task('browserify', function(){
  var b = browserify();
  console.log('Trying to browserify: ',[buildPath,fp].join('/'));
  b.add([buildPath,fp].join('/'));
  return b.bundle()
    .pipe(source(bundlePath)) // Place the bundle here
    .pipe(gulp.dest('.'));
});


// ***********************************//
// Reload browser-sync
// ***********************************//
gulp.task('bs-reload', function () {
  browserSync.reload();
});

// ***********************************//
// Setup browser-sync ... localhost:3000
// ***********************************//
gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: 'client'
    }
  });
});

// ***********************************//
// Run synchronously the build process
// ***********************************//
gulp.task('build', function(){
  // Run in order the jsx-transform, and then IIFE the conctenated file
  // then reload browser-sync
  runSequence('jsx-transform', 'browserify', 'bs-reload');
});


// ***********************************//
// By default 'gulp' ... build and then watch
// ***********************************//
gulp.task('default', function(){
  runSequence('build', 'watch','browser-sync');
});

// ***********************************//
// Watch views/folders and dist/folders
// ***********************************//
gulp.task('watch', function() {
    gulp.watch('views/**/*.*', ['build']);
    gulp.watch('dist/**/*', ['bs-reload']);
});

var gulp = require('gulp')
, browserify = require('browserify')
, browserSync = require('browser-sync')
, gutil = require('gulp-util')
, debug = require('gulp-debug')
, concat = require('gulp-concat')
, react = require('gulp-react')
, source = require("vinyl-source-stream")
, runSequence = require('run-sequence')
// CONCAT them into
// dist/build/concat-jsxtransform-build.js
build_path = 'dist'
fp = 'cj_build.js'
gulp.task('jsx-transform', function() {
  return gulp.src('views/**/*.jsx') // all jsx files in views/folder_name
      .pipe(debug({title: 'COMPILE jsx:'}))
    .pipe(react()) // Transform all jsx files in
      .on('error', gutil.log) // log any errors
      .pipe(debug({title: 'After react():'}))
    .pipe(gulp.dest(build_path))
    .pipe(concat(fp)) // conncat all into this file
      .on('error', gutil.log) // log any errors
    .pipe(gulp.dest(build_path)) // place concat file here
})

gulp.task('browserify', function(){
  var b = browserify();
  console.log('Trying to browserify: ',[build_path,fp].join('/'))
  b.add([build_path,fp].join('/'));
  //.on('error', gutil.log) // log any errors
  return b.bundle()
    .pipe(source('client/bundle.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "client"
    }
  });
});

gulp.task('build', function(){
  runSequence('jsx-transform', 'browserify', 'bs-reload')
})

gulp.task('default', function(){
  runSequence('build', 'watch','browser-sync')
})

gulp.task('watch', function() {
    gulp.watch('views/**/*.*', ['build'])
    gulp.watch('dist/**/*', ['bs-reload'])
})


// // takes in a callback so the engine knows when it'll be done
// gulp.task('one', function(cb) {
//   // do stuff -- async or otherwise
//   cb(err); // if err is not null and not undefined, the orchestration will stop, and 'two' will not run
// });

// // identifies a dependent task must be complete before this one begins
// gulp.task('two', ['one'], function() {
//   // task 'one' is done now
// });

// gulp.task('default', ['one', 'two']);
// // alternatively: gulp.task('default', ['two']);
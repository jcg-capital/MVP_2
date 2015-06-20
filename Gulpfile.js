var gulp = require('gulp')
, browserify = require('browserify')
, browserSync = require('browser-sync')
, gutil = require('gulp-util')
, debug = require('gulp-debug')
, concat = require('gulp-concat')
, react = require('gulp-react')
, source = require("vinyl-source-stream")

// CONCAT them into
// dist/build/concat-jsxtransform-build.js
gulp.task('jsx-transform', function() {
  return gulp.src('views/**/*.jsx') // all jsx files in views/folder_name
    .pipe(debug({title: 'Go to jsx:'}))
    .pipe(react()) // Transform all jsx files in 
    .on('error', gutil.log) // log any errors
    .pipe(debug({title: 'After react():'}))
    .pipe(concat('concat-jsxtransform-build')) // conncat all into this file
    .pipe(gulp.dest('dist/build')) // place concat file here
})

gulp.task('browserify', function(){
  var b = browserify();
  b.add('dist/build/concat-jsxtransform-build.js');
  return b.bundle()
    .pipe(source('client/bundle.js'))
    .pipe(gulp.dest('.'));
});
 
gulp.task('default', ['jsx-transform', 'browserify'])


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

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default'])
})

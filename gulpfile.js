var browserify = require('browserify'),
    watchify = require('watchify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    sourceFile = './public/js/app.js',
    destFolder = './public/js/',
    destFile = 'bundle.js',
	sass = require('gulp-sass'),
	sassInput = './public/sass/**/*.scss',
	sassOutput = './public/css'
	sourceSpecFile='./test/spec/bookcollection.spec.js',
	destSpecFile='specbundel.js',
	destSpecFolder='./test';
	

gulp.task('jasmine-browserify', function() {
  return browserify(sourceSpecFile)
  .bundle()
  .pipe(source(destSpecFile))
  .pipe(gulp.dest(destSpecFolder));
});

gulp.task('browserify', function() {
  return browserify(sourceFile)
  .bundle()
  .pipe(source(destFile))
  .pipe(gulp.dest(destFolder));
});

gulp.task('default', ['browserify','jasmine-browserify']);
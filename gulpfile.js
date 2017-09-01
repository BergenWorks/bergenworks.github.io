'use strict';

// Dependencies
const   gulp            = require('gulp'),
        browserSync     = require('browser-sync'),
        sass            = require('gulp-sass'),
        autoprefixer    = require('gulp-autoprefixer'),
        cssnano         = require('gulp-cssnano'),
        rename          = require('gulp-rename');


// Watch for changes & update browser
gulp.task('watch', ['browserSync', 'minify-css'], function(){ 
    gulp.watch('assets/scss/**/*.scss', ['minify-css']);
    gulp.watch('assets/js/**/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('**/*.html', browserSync.reload);
});

// Basic local server
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: ''
        },
        browser: 'chrome'
    });
});

// Compiles sass to css, works with browsersync
gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.reload({
           stream: true 
        }));
});

// Minifies CSS
gulp.task('minify-css', ['sass'], function(){
    return gulp.src('assets/css/main.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', ['watch'], function() {

});

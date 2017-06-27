var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('run', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        browser: 'chrome'
    });

    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('./js/core.js').on('change', browserSync.reload);

    gulp.watch('./css/*', function() {
        gulp.src('./css/*')
            .pipe(browserSync.stream());
    });

});

gulp.task('default', function() {

});
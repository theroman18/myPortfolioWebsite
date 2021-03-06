var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        browser: "firefox",
        files: ["*.html", "css/*.css", "js/*.js"],
        notify: false
    });
});
var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function (cb) {
    // https://github.com/docstrap/docstrap
    var config = require('./jsdocConfig.json');
    gulp.src(['README.md', './src/**/*.js'], { read: false })
        .pipe(jsdoc(config, cb));
});
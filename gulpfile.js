(function main() {

    var fs         = require('fs'),
        gulp       = require('gulp'),
        browserify = require('browserify'),
        babelify   = require('babelify'),
        entryFile  = 'example/js/example.js';

    var compile = function(destPath, entryFile) {

        return browserify({ debug: true })
            .transform(babelify)
            .require(entryFile, { entry: true })
            .bundle()
            .on('error', function (model) { console.error(['Error:', model.message].join(' ')); })
            .pipe(fs.createWriteStream(destPath));

    };

    gulp.task('compile', function() {
        return compile('example/js/bundle.js', entryFile);
    });

    gulp.task('build', ['compile']);
    gulp.task('default', ['build']);

    gulp.task('watch', function watch() {
        return gulp.watch(['src/*.js', 'example/js/example.js'], ['build']);
    });

})();

(function main() {

    var fs         = require('fs'),
        gulp       = require('gulp'),
        browserify = require('browserify'),
        babelify   = require('babelify'),
        eslint     = require('gulp-eslint'),
        entryFile  = 'example/js/example.js',
        bundleFile = 'example/js/bundle.js';

    var compile = function(destPath, entryFile) {

        return browserify({ debug: true })
            .transform(babelify)
            .require(entryFile, { entry: true })
            .bundle()
            .on('error', function (model) { console.error(['Error:', model.message].join(' ')); })
            .pipe(fs.createWriteStream(destPath));

    };

    gulp.task('compile', function() {
        return compile(bundleFile, entryFile);
    });

    gulp.task('lint', function() {

        return gulp.src(entryFile)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failOnError());

    });

    gulp.task('build', ['compile']);
    gulp.task('test', ['lint']);
    gulp.task('default', ['build']);

    gulp.task('watch', function watch() {
        return gulp.watch(['src/*.js', 'example/js/example.js'], ['build']);
    });

})();

(function main() {

    var fs         = require('fs'),
        gulp       = require('gulp'),
        browserify = require('browserify'),
        babelify   = require('babelify'),
        eslint     = require('gulp-eslint'),
        uglify     = require('gulp-uglify'),
        rename     = require('gulp-rename');

    var compile = function(destPath, entryFile) {

        return browserify({ debug: true })
            .transform(babelify)
            .require(entryFile, { entry: true })
            .bundle()
            .on('error', function (model) { console.error(['Error:', model.message].join(' ')); })
            .pipe(fs.createWriteStream(destPath));

    };

    gulp.task('example', function() {
        return compile('example/js/bundle.js', 'example/js/example.js');
    });

    gulp.task('compile', function() {
        return compile('dist/legofy.js', 'src/core.js');
    });

    gulp.task('minify', ['compile'], function() {

        return gulp.src('dist/legofy.js')
                   .pipe(uglify())
                   .pipe(rename('legofy.min.js'))
                   .pipe(gulp.dest('dist'));

    });

    gulp.task('lint', function() {

        return gulp.src('src/core.js')
                   .pipe(eslint())
                   .pipe(eslint.format())
                   .pipe(eslint.failOnError());

    });

    gulp.task('build', ['example', 'compile', 'minify']);
    gulp.task('test', ['lint']);
    gulp.task('default', ['build']);

    gulp.task('watch', function watch() {
        return gulp.watch(['src/*.js', 'example/js/example.js'], ['build']);
    });

})();

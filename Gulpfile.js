var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var moment = require('moment');

gulp.task('styles', () => {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('assets', () => {
    gulp.src('assets/img/*')
        .pipe(gulp.dest('public/img/'));
});

function compile(watch) {
    var bundle = watchify(browserify('./scr/index.js'));

    function rebundle() {
        bundle
            .transform(babel)
            .bundle()
            .on('error', (err) => {
                console.log(err);
                this.emit('end');
            })
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public/js/'));
    }

    if (watch) {
        bundle.on('update', () => {
            console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + " --->Bundling... ");
            rebundle();
        })
    }
    rebundle();
}

gulp.task('build', function () {
    return compile();
});

gulp.task('watch', function () {
    return compile(true);
});

gulp.task('default', ['styles', 'assets', 'build']);
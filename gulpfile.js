var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var css = ['src/css/normalize.css','src/css/bulmaswatch.min.css','node_modules/bulma/css/bulma.min.css','src/css/bulmaswatch.min.css','src/css/main.css'];
var js = ['src/js/plugins.js','src/js/main.js'];


gulp.task('pack-js', function () {
    return gulp.src(js)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/build/js'))
    });
 
gulp.task('pack-css', function () {	
    return gulp.src(css)
        .pipe(concat('style.css'))
        .pipe(minify())
        .pipe(gulp.dest('src/build/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['pack-js']);
    gulp.watch('src/css/*.css', ['pack-css']);
   });
 

   gulp.task('default', ['pack-css', 'pack-js']);

   //Olhando todos os arquivos na pasta Static.
// gulp.task('default', ['watch']);
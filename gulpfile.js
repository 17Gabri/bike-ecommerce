const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');

function compileSass() {
    return src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/build/css'));
}

function compileJs() {
    return src('assets/js/main.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(dest('public/build/js'));
}

function watchFiles() {
    watch('assets/scss/**/*.scss', compileSass);
    watch('assets/js/**/*.js', compileJs);
}

exports.compileSass = compileSass;
exports.compileJs = compileJs;
exports.watchFiles = watchFiles;
exports.default = watchFiles;
const gulp = require('gulp');
const { paths } = require("./gulpfile");

function watch() {
    gulp.watch(paths.styles.src, stylea);
}

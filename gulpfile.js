const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('webp', () =>
  gulp
    .src('src/assets/*.{png,jpg}')
    .pipe(webp())
    .pipe(gulp.dest('src/assets/'))
);

const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('hello', async () => {
    console.log('Hello, World!');
  });

gulp.task('watchHTML', async () => {
  gulp.src('*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('watchCSS', async () => {
  gulp.src(['**/*.css', '**/!node_modules'])
  .pipe(gulp.dest('dist'));
});


gulp.task('watchJS', async () => {
  gulp.src('js/app.js')
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', async () => {
  const files = [
    '*.html',
    'css/**/*.css',
    'js/**/*.js'
 ];
 browserSync.init(files, {
  server: {
     baseDir: './dist'
  }
});
})
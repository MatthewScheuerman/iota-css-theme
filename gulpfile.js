var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

const StyleDictionary = require('style-dictionary').extend({
    source: ['properties/**/*.json'],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'build/',
        files: [{
          destination: 'variables.scss',
          format: 'scss/variables'
        }]
      }
      // ...
    }
  });
  
StyleDictionary.buildAllPlatforms();


gulp.task('build', shell.task(['serve']));


gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('build', 'serve'));


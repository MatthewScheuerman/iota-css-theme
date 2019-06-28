var gulp = require('gulp');
var shell = require('gulp-shell');
//var browserSync = require('browser-sync').create();

const StyleDictionary = require('style-dictionary').extend({
    source: ['properties/**/*.json'],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'sass/',
        files: [{
          destination: '_variables.scss',
          format: 'scss/variables'
        }]
      },
      android: {
        transformGroup: "android",
        buildPath: "otherformats/android/",
        files: [{
          destination: "android.xml",
          format: "android/colors"
        }]
      },
      
      ios: {
        transformGroup: "ios",
        buildPath: "otherformats/ios/",
        files: [{
          destination: "StyleDictionaryColor.h",
          format: "ios/colors.h",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color"
            }
          }
        },{
          destination: "StyleDictionaryColor.m",
          format: "ios/colors.m",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color"
            }
          }
        },{
          destination: "StyleDictionarySize.h",
          format: "ios/static.h",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size"
            }
          }
        },{
          destination: "StyleDictionarySize.m",
          format: "ios/static.m",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size"
            }
          }
        }]
      }


      // ...
    }
  });
  
StyleDictionary.buildAllPlatforms();

gulp.task('build', shell.task(['npm run build']));

gulp.task('default', gulp.parallel('build'));


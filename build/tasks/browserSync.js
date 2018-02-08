module.exports = function(gulp, options, plugins) {

  gulp.task('browser-sync', function() {
      plugins.browserSync.init({
          port: 9000,
          timestamps: true,
          notify: true,
          server: {
              baseDir: options.config.destDir
          }
      });
  });
  
  gulp.task('browser-sync:reload', () => {
    plugins.browserSync.reload();
  });

};



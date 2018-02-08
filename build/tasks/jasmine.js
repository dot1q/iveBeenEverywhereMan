const path = require('path');

module.exports = function(gulp, options, plugins) {
  gulp.task('test', (done) => {
    new plugins.karma.Server({
      configFile: path.join(__dirname, '../templates/karma.conf.js'),
      singleRun: true
    }, done).start();
  })

  // gulp.task('pre-test', () => {
  //   return gulp.src(options.config.src)
  //     // gulp-jasmine works on filepaths so you can't have any plugins before it 
  //     .pipe(plugins.gulpPlugins.istanbul({
  //       instrumenter: plugins.isparta.Instrumenter
  //     }))
  //     .pipe(plugins.gulpPlugins.istanbul.hookRequire());
  // });
  
  
  
  // gulp.task('ci', ['pre-test'], () => {
  //   return gulp.src(options.config.test)
  //     // gulp-jasmine works on filepaths so you can't have any plugins before it 
  //     .pipe(plugins.gulpPlugins.jasmine({
  //       reporter: new plugins.reporter.JUnitXmlReporter({
  //         savePath: options.config.destDir + '/coverage'
  //       })
  //     }))
  //     .pipe(plugins.gulpPlugins.istanbul.writeReports({
  //       dir: options.config.destDir + '/coverage'
  //     }))
  //     //.pipe(plugins.gulpPlugins.istanbul.enforceThresholds({ thresholds: { global: 90 } }))
  //     .pipe(plugins.gulpPlugins.exit());
  // });
  
  // gulp.task('test', () => {
  //   return gulp.src(options.config.test)
  //     .pipe(plugins.gulpPlugins.jasmine({
  //       verbose: true
  //     }))
  //     .once('end', function () {
  //         process.kill(process.pid, 'SIGINT');
  //         setTimeout(function() {
  //             /* eslint-disable */
  //             process.exit(0);
  //             /* eslint-enable */
  //         }, 100);
  //     });
  // });
  
};

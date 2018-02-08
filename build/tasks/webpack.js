const webpackConfig = require('../webpack.config');

module.exports = function(gulp, options, plugins) {

  gulp.task('webpack', function() {
    return gulp.src(options.config.src).
    pipe(plugins.gulpPlugins.webpack(webpackConfig)).
    pipe(gulp.dest(options.config.destDir));
  });
  
};
module.exports = function(gulp, options, plugins) {

	gulp.task('copy', function() {
    return gulp.src(options.config.htmlSrc).
    pipe(gulp.dest(options.config.destDir));
	});
  
  gulp.task('copyVendorFiles', () => {
    let common = options.config.vendorFiles.common;
    
    return gulp.src([].concat(common), {base: '.'}).
      pipe(gulp.dest(options.config.destDir));
  });
  
	gulp.task('copy:backendCompile', function() {
    return gulp.src(options.config.src).
    pipe(plugins.gulpPlugins.flatten()).
    pipe(gulp.dest(options.config.targetDir));
	});
};

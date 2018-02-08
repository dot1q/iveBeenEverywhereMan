// This is the gulp file for the cos-web yeoman generator package. 
// The build folder contains the dependencies for this file


// Required
var gulp = require('gulp');
var fs = require('fs');
var browserSync = require('browser-sync').create();

const gulpLoadPlugins = require('gulp-load-plugins');
const isparta = require('isparta');
const reporter = require('jasmine-reporters');
const sequencer = require('run-sequence');
//const $ = gulpLoadPlugins();  //gulp-load-plugins will attempt to include all gulp related plugins fro node_modules


// Configuration
import buildConfig from './build/config';
import karma from 'karma';

// Scripts  //
// The scripts below can be invoked using the task names as agruments

let options = {
	pattern: ['build/tasks/**/*.js'],
	config: buildConfig.config
};

let plugins = {
  gulpPlugins: gulpLoadPlugins(),
  fs: fs,
  karma: karma,
  isparta: isparta,
  reporter: reporter,
  browserSync: browserSync,
  sequencer: sequencer
}

//let loadedGulpTasks = loadGulpTasks('build/tasks', gulp, options, plugins);
require ('load-gulp-tasks')(gulp, options, plugins);

// build task
gulp.task('build', (callback) => sequencer('clean', 'copy', 'copyVendorFiles', 'inject', 'webpack', 'sass', callback));
gulp.task('live-reload', (callback) => sequencer('build', 'browser-sync:reload', callback));
gulp.task('serve', (callback) => sequencer('build', 'browser-sync', 'watch', callback));
gulp.task('compile', (callback) => sequencer('build', callback));

// Default task
gulp.task('default', function() {
  console.log('No arguments provided.');
});

'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    pleeease = require('gulp-pleeease'),
    webpack = require('webpack'),
    webpackConf = require('./webpack.config.js');

gulp.task('default', ['build'], function () {});
gulp.task('build', ['css', 'webpack'], function () {});

gulp.task('clean', function () {
  gulp.src('./assets/js', { read: false })
    .pipe(clean());
});

gulp.task('css', function () {
  gulp.src('./assets/css/*.css')
    .pipe(pleeease({
      autoprefixer: {
        browsers: ['last 2 versions', 'ie 8', 'ie 7']
      },
      minifier: false
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('webpack', function (callback) {
  webpack(webpackConf, function (err, stats) {
    if (err) {
      throw gutil.PluginError('webpack build', err);
    }

    gutil.log('webpack build', stats.toString({ color: true }));

    callback();
  });
});

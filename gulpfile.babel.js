const gulp = require('gulp')
const rimraf = require('rimraf')
const babel = require('gulp-babel')
const scss = require('gulp-sass')
const browserSync = require('browser-sync').create()
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')
const ghPages = require('gulp-gh-pages')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const gulpBowerFilesFromHtml = require('gulp-bower-files-from-html')

// clean dist directory
gulp.task('clean', cb => {
  rimraf('dist', cb)
})

// copy html into dist directory
gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
})

// compile scss into CSS & auto-inject into browsers
gulp.task('scss', () => {
  return gulp.src('src/**/*.scss')
    .pipe(scss())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
})

// transform es6 to es5
gulp.task('babel', () => {
  return gulp.src(['src/**/*.js', '!src/bower_components/**/*.js'])
    .pipe(babel())
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

// copy bower_components into dist directory
gulp.task('bower', () => {
  return gulp.src('src/index.html', {base: './'})
    .pipe(gulpBowerFilesFromHtml())
    .pipe(gulp.dest('dist'))
})

// static server + watching files' change
gulp.task('serve', ['bower', 'scss', 'babel', 'html'], () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    open: false
  })

  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('src/**/*.scss', ['scss'])
  gulp.watch('src/**/*.js', ['babel'])
  gulp.watch(['dist/**/*.html', 'dist/**/*.js']).on('change', browserSync.reload)
})

// publish to Github pages
gulp.task('deploy', () => {
  return gulp.src('dist/**/*')
    .pipe(ghPages())
})

gulp.task('default', ['serve'])
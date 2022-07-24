const gulp = require("gulp"),
  concat = require("gulp-concat"),
  htmlmin = require("gulp-htmlmin"),
  autoprefixer = require("gulp-autoprefixer"),
  clean = require('gulp-clean');

function cleandist() {
  return gulp.src('./dist', {read: false})
  .pipe(clean());
}
function minifyHtml() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
}
function style() {
  return gulp
    // .src("src/style/*.css")
    .src(["src/style/style.css", "src/style/parts/*.css", "src/style/media.css"])
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./dist/style"));
}
function fonts() {
  return gulp
    .src("src/fonts/*.{eot,svg,ttf,woff,woff2}")
    .pipe(gulp.dest("./dist/fonts"));
}
function images() {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("./dist/assets"));
}
function js() {
  return gulp
    .src("src/javascript/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./dist/javascript"));
}
function watch() {
  gulp.watch("src/*.html", minifyHtml);
  gulp.watch("src/style/*.css", style);
  gulp.watch("src/javascript/*.js", js);
  gulp.watch("src/assets/*", images);
  gulp.watch("src/fonts/*", fonts);
}

module.exports.start = gulp.series(cleandist, minifyHtml, style, js, fonts, images, watch);

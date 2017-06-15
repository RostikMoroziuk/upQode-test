var gulp = require("gulp");
var scss = require("gulp-scss");
var concat = require("gulp-concat");
//build
var minifyCSS = require("gulp-csso");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");

//scss files compile
gulp.task("css", function () {
  return gulp.src("src/scss/*.scss")
    .pipe(scss())
    .pipe(concat("all.css"))
    .pipe(gulp.dest("build/css"));
});


//html file add to build
gulp.task("html", function () {
  return gulp.src("src/index.html")
    .pipe(gulp.dest("build"));
});

//scripts add to build
gulp.task("scripts", function () {
  return gulp.src("src/js")
    .pipe(gulp.dest("build/js"));
});

gulp.task("watch", function () {
  gulp.watch("scss/*.scss", ["css"]);
  gulp.watch("src/*.html", ["html"]);
  gulp.watch("js/*.js", ["scripts"]);
});

gulp.task("default", ["watch"]);
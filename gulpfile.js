var gulp = require("gulp");
var scss = require("gulp-scss");
var concat = require("gulp-concat");
var browserSync = require("browser-sync");
//build
var minifyCSS = require("gulp-csso");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");

//scss files compile
gulp.task("css", function () {
  return gulp.src("scss/*.scss")
    .pipe(scss())
    .pipe(concat("all.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//html file add to build
gulp.task("html", function () {
  return gulp.src(config.html)
    .pipe(gulp.dest("build"))
    .pipe(reload({
      stream: true
    }));
});

//scripts add to build
gulp.task("scripts", function () {
  return gulp.src("js")
    .pipe(gulp.dest("build/js"))
    .pipe(reload({
      stream: true
    }));
});

//synchronized with browser
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "build/"
    },
    port: 8080
  });
});

gulp.task("watch", function () {
  gulp.watch("scss/*.scss", ["css"]);
  gulp.watch("*.html", ["html"]);
  gulp.watch("js/*.js", ["scripts"]);
});

gulp.task("default", ["watch", "browser-sync"]);
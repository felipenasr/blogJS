const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function () {
  console.log('rodando task script');
  // gulp.src("src/**/*.js")
  gulp.src(["src/*.js"])
       .pipe(uglify())
       .pipe(concat("main.min.js"))
       .pipe(gulp.dest("build"));
});
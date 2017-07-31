const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");


gulp.task("textcad", function () {
  // gulp.src("src/**/*.js")
  gulp.src(["src/matcall.js", "src/textcad.js"])
     .pipe(babel({presets: ["es2015"]}))
     .pipe(uglify())
     .pipe(concat("textcad.min.js"))
     .pipe(gulp.dest("build"));
});

gulp.task("showText", function () {
    gulp.src(["src/showText.js"])
     .pipe(babel({presets: ["es2015"]}))
     .pipe(uglify())
     .pipe(concat("showText.min.js"))
     .pipe(gulp.dest("build"));
});


gulp.task("lastPosts", function () {
	gulp.src(["src/lastPosts.js"])
     .pipe(babel({presets: ["es2015"]}))
     .pipe(uglify())
     .pipe(concat("lastPosts.min.js"))
     .pipe(gulp.dest("build"));
});


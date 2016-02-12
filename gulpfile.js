var gulp = require('gulp');
var git = require('gulp-git');
var gutil = require('gulp-util');

// Clone remote repo to sub folder ($CWD/sub/folder/git-test)
gulp.task('clone-eslint', function(cb) {
  git.clone('https://github.com/eslint/eslint', {args: './eslint'}, function(err) {
    if (err) return cb(err);
    cb();
  });
});

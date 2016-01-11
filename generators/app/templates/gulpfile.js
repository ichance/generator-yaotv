var gulp = require('gulp');
var shell = require('gulp-shell');

var paths = {
  scripts: ['js/**/*', 'css/*', 'font/*']
};

gulp.task('watch', function () {
  gulp.watch(paths.scripts, function() {
  	gulp.run('build');
  });
});

gulp.task('build', shell.task([
	'echo 开始发布任务...',
	'node r.js -o build-v1.js',
	// '../tools/qn.sh',
	'echo 执行完成'
]));
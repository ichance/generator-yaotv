var gulp = require('gulp');
var shell = require('gulp-shell');

var paths = {
  scripts: ['js/**/*', 'css/*', 'font/*']
};

//编译
gulp.task('build', shell.task([
	'echo 开始发布任务...',
	'node r.js -o deploy.js',
	'echo 执行完成'
]));

//发布
gulp.task('publish', shell.task(
	['tools/qn.sh']
));

gulp.task('deploy', shell.task(
	[
		'gulp compile && gulp publish'
	]
));
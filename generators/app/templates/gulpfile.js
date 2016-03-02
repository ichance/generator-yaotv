var gulp = require('gulp');
var shell = require('gulp-shell');
var tinypng = require('gulp-tinypng');

var paths = {
  scripts: ['js/**/*', 'css/*', 'font/*']
};

gulp.task('watch', function () {
  gulp.watch(paths.scripts, function() {
  	gulp.run('build');
  });
});

gulp.task('tinypng', function () {
	gulp.src('images/*')
		.pipe(tingpng('ncLZ9fxWZOmk0xYfFJtmimsUU5c_GrTO'))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', shell.task([
	'echo 开始发布任务...',
	'node r.js -o build-v1.js',
	'tools/qn.sh',
	'echo 执行完成'
]));
var gulp = require('gulp');
var shell = require('gulp-shell');
var tinypng = require('gulp-tinypng');
var zip = require("gulp-zip");

var paths = {
  scripts: ['js/**/*', 'css/*', 'font/*']
};

gulp.task('watch', function () {
  gulp.watch(paths.scripts, function() {
  	gulp.run('build');
  });
});

//图片压缩
gulp.task('tiny', function () {
	gulp.src('images/*')
		.pipe(tinypng('ncLZ9fxWZOmk0xYfFJtmimsUU5c_GrTO'))
		.pipe(gulp.dest('deploy/images'));
});

//打包
gulp.task('zip', function () {
	gulp.src(["index.html"], {base: "."})
		.pipe(zip('<%= projectName%>.zip'))
		.pipe(gulp.dest('deploy'));
});

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
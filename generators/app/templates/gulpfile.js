var gulp = require('gulp');
var shell = require('gulp-shell');
var tinypng = require('gulp-tinypng');
var zip = require("gulp-zip");
var uncss = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');

var paths = {
  scripts: ['js/**/*', 'css/*', 'font/*']
};

gulp.task('watch', function () {
  gulp.watch(paths.scripts, function() {
  	gulp.run('build');
  });
});

//去无用css
gulp.task('uncss', function () {
    return gulp.src('deploy/css/app.css')
        .pipe(uncss({
            html: ['index.html', 'http://localhost/<%= projectName%>/index.html']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('deploy/css'));
});

//图片压缩
gulp.task('tiny', function () {
	gulp.src('images/*')
		.pipe(tinypng('ncLZ9fxWZOmk0xYfFJtmimsUU5c_GrTO'))
		.pipe(gulp.dest('deploy/images'));
});

//打包
gulp.task('zip', function () {
	gulp.src(["index.html", "bdtjcommon.html"], {base: "."})
		.pipe(zip('<%= projectName%>.zip'))
		.pipe(gulp.dest('deploy'));
});

//编译
gulp.task('compile', shell.task([
	'echo 开始发布任务...',
	'node r.js -o deploy.js',
	'echo 执行完成'
]));

//编译
gulp.task('build', gulp.series("compile", "uncss"));

//发布
gulp.task('publish', shell.task(
	['tools/qn.sh']
));

//一键发布
gulp.task('deploy', gulp.series("build", "publish"));
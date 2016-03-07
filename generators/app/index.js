'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      '正在使用 ' + chalk.red('generator-yaotv') + ' 创建摇电视脚手架结构'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: '是否使用默认配置生成项目结构?',
      default: true
    },{
      name: 'projectName',
      message: '项目标题',
      default: "摇电视"
    },{
      name: 'cdn',
      message: 'CDN 目录名',
      default: "yaotv"
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      this.projectName = props.projectName;
      this.cdn = props.cdn;

      done();
    }.bind(this));
  },

  scaffoldFolders: function () {
    mkdirp('images');
    mkdirp('css');
    mkdirp('font');
    mkdirp('js');
    mkdirp('tpl');
    mkdirp('tools');
  },

  writing: function () {
    this.directory('images');
    this.directory('css');
    this.directory('font');
    this.directory('js');
    this.directory('tpl');
    this.directory('tools');

    this.template('index.html', {projectName:this.projectName,cdn:this.cdn});
    this.template('index-src.html', {projectName:this.projectName,cdn:this.cdn});
    this.template('index-build.html', {projectName:this.projectName,cdn:this.cdn});
    this.template('bdtjcommon.html', {cdn:this.cdn});
    this.template('tools/qn.sh', {cdn:this.cdn});
    this.template('build-v1.js', 'build-v1.js');
    this.template('gulpfile.js', 'gulpfile.js');
    this.template('r.js', 'r.js');
    this.template('package.json', 'package.json');
  },

  install: function () {
    this.installDependencies();
  }
});

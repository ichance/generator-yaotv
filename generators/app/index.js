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
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

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

    this.template('index.html', 'index.html');
    this.template('index-src.html', 'index-src.html');
    this.template('index-build.html', 'index-build.html');
    this.template('bdtjcommon.html', 'bdtjcommon.html');
    this.template('build-v1.js', 'build-v1.js');
    this.template('gulpfile.js', 'gulpfile.js');
    this.template('r.js', 'r.js');
    this.template('package.json', 'package.json');
    this.template('tools/qn.sh', 'tools/qn.sh');
  },

  install: function () {
    this.installDependencies();
  }
});

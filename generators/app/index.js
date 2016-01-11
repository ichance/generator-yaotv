'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the divine ' + chalk.red('generator-yaotv') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  scaffoldFolders: function () {
    this.mkdir('images');
    this.mkdir('css');
    this.mkdir('font');
    this.mkdir('js');
  },

  writing: function () {
    this.directory('images');
    this.directory('css');
    this.directory('font');
    this.directory('js');

    this.template('index.html', 'index.html');
    this.template('bdtjcommon.html', 'bdtjcommon.html');
    this.template('build-v1.js', 'build-v1.js');
    this.template('gulpfile.js', 'gulpfile.js');
    this.template('r.js', 'r.js');
    this.template('package.json', 'package.json');
  },

  install: function () {
    this.installDependencies();
  }
});

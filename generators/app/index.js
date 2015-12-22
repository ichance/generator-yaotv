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
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  scaffoldFolders: function () {
    this.mkdir('css');
    this.mkdir('font');
    this.mkdir('js');
    this.mkdir('version');
  },

  writing: function () {
    this.directory('css');
    this.directory('font');
    this.directory('version');
    this.directory('js');
    // this.directory('js/app/pages');
    // this.directory('js/helper');
    // this.directory('js/lib');

    this.template('index.html', 'index.html');
  },

  install: function () {
    this.installDependencies();
  }
});

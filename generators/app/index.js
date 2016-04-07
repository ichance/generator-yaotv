'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var figlet = require('figlet');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var self = this;
        var done = this.async();

        var prompts = [{
            name: 'projectName',
            message: '项目标题',
            default: "摇电视"
        }, {
            name: 'cdn',
            message: 'CDN 目录名',
            default: "yaotv"
        }, {
            name: 'tjid',
            message: '百度统计id',
            default: "3fa569ffa01a64918cfdd93041d06c51"
        }, {
            name: 'cnzz',
            message: 'CNZZ统计id',
            default: "1258183883"
        }, {
            type: "confirm",
            name: 'chat',
            message: '是否带聊天应用',
            default: false
        }];

        figlet.text('Yaotv', {
            font: 'isometric2'
        }, function(err, data) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("============================== chance ==============================");
            console.log(data);
            console.log("============================ stuart.shi ============================");

            self.prompt(prompts, function(props) {
                self.props = props;

                self.projectName = props.projectName;
                self.cdn = props.cdn;
                self.tjid = props.tjid;
                self.chat = props.chat;
                self.cnzz = props.cnzz;

                done();
            }.bind(self));
        });

    },

    scaffoldFolders: function() {
        mkdirp('images');
        mkdirp('css');
        mkdirp('font');
        mkdirp('js');
        mkdirp('tpl');
        mkdirp('tools');
    },

    writing: function() {
        //directory
        this.directory('images');
        this.directory('css');
        this.directory('font');
        this.directory('js');
        this.directory('tpl');
        this.directory('tools');

        //html
        this.template('index.html', { projectName: this.projectName, cdn: this.cdn });
        this.template('index-src.html', { projectName: this.projectName, cdn: this.cdn });
        this.template('index-build.html', { projectName: this.projectName, cdn: this.cdn });

        //tools && config
        this.template('tools/qn.sh', { cdn: this.cdn });
        this.template('package.json', 'package.json');
        this.template('deploy.js', 'deploy.js');
        this.template('gulpfile.js', { projectName: this.projectName });
        this.template('r.js', 'r.js');

        //libs
        this.template('js/app/config.js', { projectName: this.projectName, tjid: this.tjid, cnzz: this.cnzz, cdn: this.cdn });

        if (this.chat) {
            this.template('vendors/chat/socket.io.js', "js/lib/socket.io.js");
            this.template('vendors/chat/barrage.js', "js/lib/barrage.js");
        }
    },

    install: function() {
        this.installDependencies({
            bower: false,
            callback: function() {
                console.log('\n项目结构已经搭建好了!');
            }
        });
    }
});

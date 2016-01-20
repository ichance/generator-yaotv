{
    appDir: "./",
    baseUrl: 'js',
    paths: {
        app: 'app',
        pages: 'app/pages',
        lib: 'lib',
        helper: 'helper',
        util: 'helper/util',
        config: 'app/config',
        jquery: 'lib/jquery.custom',
        ready: 'lib/domReady',
        socketio: 'lib/socket.io',
        barrage: 'lib/barrage',
    },
    optimize: "uglify",
    optimizeCss: "standard.keepLines",
    mainConfigFile: "js/app.js",
    removeCombined: true,
    fileExclusionRegExp: /^node_modules*|^tools*|^tpl*|^build-v1\.js|^gulpfile\.js|^package\.json|^index\S+\.html|^r\.js|^\.sublime*/,
    name: "app",
    dir: "v1-build"
}

{
	appDir: "../v1/",
    baseUrl: 'js',
    paths: {
        app: 'app',
        pages: 'app/pages',
        lib: 'lib',
        helper: 'helper',
        util: 'helper/util',
        config: 'app/config',
        jquery: 'lib/jquery.custom',
        hammer: 'lib/hammer',
        ready: 'lib/domReady',
    },
    optimize: "uglify",
    optimizeCss: "standard.keepLines",
    mainConfigFile: "js/app.js",
    removeCombined: true,
    fileExclusionRegExp: /^\./,
    name: "app",
    dir: "v1-build"
}

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
        ready: 'lib/domReady',
    },
    optimize: "uglify",
    optimizeCss: "standard.keepLines",
    mainConfigFile: "js/app.js",
    removeCombined: true,
    fileExclusionRegExp: /^node_modules*|^build-v1\.js|^gulpfile\.js|^package\.json|^index\S+\.html|^r\.js|^\.sublime*/,
    //exclude:['index-src.html', 'index-build.html', 'build-v1.js', 'gulpfile.js', 'r.js'],
    name: "app",
    dir: "v1-build"
}

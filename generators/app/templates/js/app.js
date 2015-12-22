/**
 * 摇电视项目入口
 * @author stuart
 * @link http://www.shizuwu.cn
 * @create 2015
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'app',
        pages: 'app/pages',
        lib: 'lib',
        helper: 'helper',
        util: 'helper/util',
        config: 'app/config',
        jquery: 'lib/jquery.custom',
        toucher: 'lib/touch',
        ready: 'lib/domReady',
        history: 'lib/history'
    }
    // ,
    // shim: {
    //     'jqtouch': ['jquery']
    // }
});

requirejs(['jquery', 'util', 'app/main'], function($, util, main) {
    main.init();
});

// requirejs.onError = function (err) {
//     if (err.requireType === 'timeout') {
//         console.log('modules: ' + err.requireModules);
//     }
//     throw err;
// };

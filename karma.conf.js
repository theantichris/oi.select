// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

'use strict';

module.exports = function(config) {

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '.',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'src/module.js',
            'src/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage'],

        // web server port
        port: 8080,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // For more browsers on Sauce Labs see:
        // https://saucelabs.com/docs/platforms/webdriver
        customLaunchers: {
            'SL_Chrome': {
                base: 'SauceLabs',
                browserName: 'chrome',
            },
            'SL_Firefox': {
                base: 'SauceLabs',
                browserName: 'firefox'
            },
            'SL_Safari': {
                base: 'SauceLabs',
                browserName: 'safari',
                platform: 'OS X 10.9',
                version: '7'
            },
            'SL_IE_9': {
                base: 'SauceLabs',
                browserName: 'internet explorer',
                platform: 'Windows 2008',
                version: '9'
            },
            'SL_IE_10': {
                base: 'SauceLabs',
                browserName: 'internet explorer',
                platform: 'Windows 2012',
                version: '10'
            },
            'SL_IE_11': {
                base: 'SauceLabs',
                browserName: 'internet explorer',
                platform: 'Windows 8.1',
                version: '11'
            }
        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // Timeouts for SauceLabs
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 2, // default 0
        browserNoActivityTimeout: 30 * 1000, //default 10000

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        preprocessors: {
            'src/!(*.spec).js': 'coverage'
        },

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sauce-launcher',
            'karma-coverage'
        ],

        // Coverage reporter generates the coverage
        coverageReporter: {
            reporters:[
                {type: 'lcov', dir:'coverage/'},
                {type: 'text-summary', dir:'coverage/'}
            ]
        }

    });

};
// *****************************************************************************
// Main webpack config file with logic for both dev and prod('build') targets
// TODO: Hook in ExtractTextPlugin to put css in stylesheet for prod
//      http://survivejs.com/webpack_react/building_kanban/
// *****************************************************************************
const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const Clean             = require('clean-webpack-plugin');
const logger            = require('./build-config/utils/logger.js');

const PATHS = {
    app:   path.join(__dirname, 'app'),
    build: path.join(__dirname, '_dist')
};
const TARGET = process.env.npm_lifecycle_event;
const DEV_SERVER = {
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000
};
const ENVIRONMENT = {
    DEV:  'development',
    PROD: 'production'
};

// *****************************************************************************
// Common WebPack Configuration
// *****************************************************************************
logger.debug('Webpack: Setting common build options');
const common = {
    entry:   PATHS.app,
    resolve: {
        // Allows ommiting extension in imports/requires
        extensions: ['', '.js', '.jsx', '.scss', '.css', '.html']
    },
    module: {
        preLoaders: [
            {
                test:    /\.js?$/,
                loaders: ['eslint'],
                include: PATHS.app
            }
        ],
        loaders: [
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
            {
                test:    /\.html$/,
                include: PATHS.app,
                loader:  'ngtemplate?relativeTo=' + PATHS.app + '/!html'
            },
            {
                test:    /\.js?$/,
                loaders: ['ng-annotate', 'babel'],
                include: PATHS.app
            },
            {
                test:    /\.scss$/,
                include: PATHS.app,
                loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version', 'resolve-url', 'sass']
            },
            {
                test:    /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test:    /\.(png|jpg)$/,
                include: PATHS.app,
                loader:  'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title:    'Hello World',
            template: 'app/index.html',
            inject:   'body'
        })
    ]
};

// *****************************************************************************
// Development WebPack Configuration (inherits from common cofig)  'npm run dev'
// *****************************************************************************
if (TARGET === 'dev' || !TARGET) {
    logger.debug('Webpack: Setting development build options for target: ' + TARGET);
    logger.debug('\t process.env.NODE_ENV = ' + ENVIRONMENT.DEV);

    module.exports = merge(common, {
        devtool:   'source-map',
        devServer: {
            historyApiFallback: true,
            hot:                true,
            inline:             true,
            progress:           true,
            colors:             true,
            // modules:            false,
            // cached:             false,
            // chunk:              false,
            // Only show errors in console output
            stats:              'errors-only',
            // HOST and PORT environment vars can be used to change this
            host:               DEV_SERVER.HOST,
            port:               DEV_SERVER.PORT
        },
        plugins: [
            new webpack.DefinePlugin({
                // Set environment to development
                'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT.DEV)
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

// *****************************************************************************
// Production WebPack Configuration (inherits from common cofig) 'npm run build'
// *****************************************************************************
if (TARGET === 'build') {
    logger.debug('Webpack: Setting production build options for target: ' + TARGET);
    logger.debug('\t process.env.NODE_ENV = ' + ENVIRONMENT.PROD);

    module.exports = merge(common, {
        output: {
            path:     PATHS.build,
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        plugins: [
            new Clean([PATHS.build]),
            new webpack.DefinePlugin({
                // Set environment to production
                'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT.PROD)
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

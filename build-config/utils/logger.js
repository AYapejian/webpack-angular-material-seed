/* eslint no-console:0 */
const colors = require('colors');

colors.setTheme({
    verbose: 'cyan',
    info:    'green',
    help:    'cyan',
    warn:    'yellow',
    debug:   'blue',
    error:   'red'
});

exports.info = function _info(string) {
    console.log(colors.info(string));
};

exports.debug = function _debug(string) {
    console.log(colors.debug(string));
};


exports.log = function _log(string) {
    console.log(string);
};

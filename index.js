/**
 * WebdriverCSS
 * Regression testing tool for WebdriverJS
 *
 * @author Christian Bromann <mail@christian-bromann.com>
 * @license Licensed under the MIT license.
 */

module.exports = process.env.WEBDRIVERCSS_COVERAGE === '1' ? require('./lib-cov/nightwatchcss.js') : require('./lib/nightwatchcss.js');

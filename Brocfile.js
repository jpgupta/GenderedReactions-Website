/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.svg');
app.import('vendor/bootstrap/dist/js/bootstrap.min.js');
app.import('vendor/bootstrap/dist/css/bootstrap.min.css');
app.import('vendor/chartjs/Chart.min.js');

module.exports = app.toTree();

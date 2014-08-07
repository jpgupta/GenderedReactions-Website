/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.svg');
app.import('vendor/bootstrap/dist/js/bootstrap.min.js');
app.import('vendor/bootstrap/dist/css/bootstrap.min.css');

app.import('vendor/d3/d3.min.js');

app.import('vendor/ember-charts/dist/ember-charts.js');
app.import('vendor/ember-charts/dist/ember-charts.css');

app.import('vendor/underscore/underscore.js');

module.exports = app.toTree();

'use strict';

var nconf = require('nconf');
var env = process.env.NODE_ENV;

if (!env) {
  throw new Error('Please specify NODE_ENV environment variable');
}

nconf.use('memory');
nconf.env();

nconf.defaults({
  port: process.env.PORT || 3003
});

module.exports = nconf;

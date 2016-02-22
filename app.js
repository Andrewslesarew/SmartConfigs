'use strict';

var path = require('path');
var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'app/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = require('./app/components/router');
app.use('/', router);

module.exports = app;

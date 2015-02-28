'use strict';
/**
 * @file example with .htpasswd file
 * @module basic-authentication
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
var authentication = require('..'); // use require('basic-authentication') instead
var app = require('express')();

/*
 * using file middleware for all routing
 */
app.use(authentication({
  hash: 'sha1',
  file: 'htpasswd',
  suppress: true, // suppress throwing Error if wrong user
}));

// express routing
app.get('/', function(req, res) {

  // authentication here
  res.send('hello world!');
});

// server starting
app.listen(3000);
console.log('starting "hello world" on port 3000');

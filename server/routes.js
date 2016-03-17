'use strict';

var errors = require('./components/errors');
var auth = require('./auth/auth.service');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/auth', require('./auth'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/look', require('./api/look'));
  app.use('/api/links', require('./api/imgLinks'));
  app.use('/api/comments', require('./api/comments'));
  app.use('/api/blogs', require('./api/blogs'));

  app.post('/forgotpassword', require('./forgotpassword').reset);

  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};

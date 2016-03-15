'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/bestDressed-dev-2'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  facebook: {
    clientID:     process.env.FACEBOOK_ID || '236373250037838',
    clientSecret: process.env.FACEBOOK_SECRET || 'a9d325dfa77beb121c23435140291413',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    clientID:     process.env.TWITTER_ID || 'ACC4T27zybEviZQcJmQDwmwNN',
    clientSecret: process.env.TWITTER_SECRET || '0ZFispxH60lbyDHI1MopMH58bBe0wfe6SThK9Z1VlNsJvHG2TJ',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  seedDB: false
};

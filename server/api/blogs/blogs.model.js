'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  short_name: String,
  name: String,
  short_desc: String,
  content: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);

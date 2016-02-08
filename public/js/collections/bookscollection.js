 var Backbone = require('backbone');
 var _ = require('underscore');
 var Book = require('../models/book');
 module.exports = Backbone.Collection.extend({
  model:Book,
  parse: function (response) { 
  this.totalItems=response.totalItems;// use for pagging
  return response.items;}
});
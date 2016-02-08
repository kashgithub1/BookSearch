var _ = require('underscore');
var  $ = require('jquery');
var BookView = require('../views/bookview');
var Backbone = require('backbone');
  
  module.exports = Backbone.View.extend({

    //all books go inside div tag
    tagName: "div",
    initialize: function() {
      _.bindAll(this, "book");
    },

    render: function() {
      this.collection.each(this.book); 
    },    

    book: function(model) {
      var bookItem = new BookView({ model: model });
      bookItem.render();
      this.$el.append(bookItem.el);
    }
  });


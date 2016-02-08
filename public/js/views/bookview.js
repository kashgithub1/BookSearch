var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
  module.exports = Backbone.View.extend({
    //each book is created inside div
    tagName: "div",

    //cache the template function for a single item - TODO: use handlebars
    template: _.template('<div class="row"><div class="col-xs-4"><a href="#"><img src="<%= (volumeInfo.imageLinks.thumbnail) %>" /></a></div><div class="col-xs-8"><h6><%= (volumeInfo.title) %></h6><h6><%= (volumeInfo.description) %></h6></div></div><hr>'), 

    events: {
      "click": "clicked" // To Do
    },

    initialize: function() {
      _.bindAll(this, "render");
    },
    render: function(){
	 var book = _.template(this.template(this.model.toJSON()));
      this.$el.append(book);
    }
  });

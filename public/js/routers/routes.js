var Backbone = require('backbone');
var SearchView = require('../views/searchview');

  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      this.search = new SearchView();
    }
  });

  

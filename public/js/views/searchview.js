var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var v = require('../utils/constants');
var BookCollection = require('../collections/bookscollection');      
var BookListView = require('../views/booklistview');
module.exports = Backbone.View.extend({
    el: "#wrap-books", 
    events: {
      "click": "search"
    },
    initialize: _.once(function() {
      if (window.location.hash === '') {
		  console.log("view initializing");        
      }
    }),
    search: function(e){	
      var $value = $('#search_input').val();
      e.preventDefault();      
      $('#books').html('');      
      this.buildResults($value, index='0', v.MAX_DEFAULT);
      //Reset any routes
      window.location.hash = ''; 
    },
    buildResults: function(term, index, maxResults, subject) {
          var self = this;
          var $books = $('#books');
          var url = 'https://www.googleapis.com/books/v1/volumes?';
          var data = 'q='+encodeURIComponent(term)+'&startIndex='+index+'&maxResults='+maxResults+'&key='+v.API_KEY+'&projection=full&fields=totalItems,items(id,volumeInfo)';
          var books = new BookCollection();
          books.fetch({
          url: url + data,
          'success': function success(models, response) {
          var item = new BookListView({ collection: models });
          item.render();

          if (index > 0 ) {
           $books.append(item.el);
           } 
           else {
           $books.html(item.el);
          }          
        },
        'error': function error(collection, response, xhr) {
          if (response.message === 'Daily Limit Exceeded') {
			  $books.empty().append('Error: Daily Limit Exceeded');        
          }
        }
      });      
    }    

    //To DO - Pagging

    
  });



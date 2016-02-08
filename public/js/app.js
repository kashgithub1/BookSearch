var Backbone = require('backbone');
var Router = require('./routers/routes');
  //Instiantiate the router
  var app = new Router();
  // Start Backbone history for bookmarkable URL's
  Backbone.history.start();

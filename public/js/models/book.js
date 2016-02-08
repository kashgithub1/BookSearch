 var Backbone = require('backbone');
 //var _ = require('underscore');
 module.exports = Backbone.Model.extend({
 defaults: {
      "volumeInfo": [
      {
        "description": "",
        "title": "",
        "imageLinks": [
          {
            "smallThumbnail": "",
            "thumbnail": "http://placehold.it/128x195/fff/333333"
            }
          ]
        }
      ]
    }
});
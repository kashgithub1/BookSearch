describe('Book Collection', function() {
var BookCollection = require("../../public/js/collections/bookscollection"); 
var Book = require("../../public/js/models/book"); 
    beforeEach(function() {
         this.collection = new BookCollection();
    });

    it('should initialise with an empty collection', function() {
        expect(this.collection.length).toBe(0);
    });

     describe('manually populate the collection', function() {
        it('should add 1 model to the collection', function() {
			var mockBook = {"volumeInfo":[{"description": "mockdescription","title": "mocktitle"}]};
            var book = new Book(mockBook);
            this.collection.add(book);
           console.log(this.collection.models[0].attributes['volumeInfo'][0].description);
            expect(this.collection.length).toBe(1);
			expect(this.collection.models[0].attributes['volumeInfo'][0].description).toBe('mockdescription');
        });
    });
});
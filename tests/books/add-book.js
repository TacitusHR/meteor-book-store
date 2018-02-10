describe('Add a book', () => {
    it('should create a new book @watch', () => {
        browser.url('http://localhost:3000')
            .setValue('[name="title"]', 'Seeking Wisdom')
            .setValue('[name="author"]', 'Peter Bevelin')
            .submitForm('form');

        const book = server.execute(() => {
            const Books = require('/imports/api/books/books.js').default;
            return Books.findOne({title: 'Seeking Wisdom', author: 'Peter Bevelin'});
        });

        expect(book.title).to.equal('Seeking Wisdom');
        expect(book.author).to.equal('Peter Bevelin');
    });

    afterEach(() => {
        server.execute(() => {
            const Books = require('/imports/api/books/books.js').default;
            Books.remove({title: 'Seeking Wisdom', author: 'Peter Bevelin'});
        });
    });
});

/* eslint-env mocha */
/* global browser,server,expect */

describe('Add a book', () => {
    it('should create a new book @watch', function () {
        browser.url('http://localhost:3000')
            .setValue('[name="title"]', 'Seeking Wisdom')
            .setValue('[name="author"]', 'Peter Bevelin')
            .click('button[type=submit]')
            .pause(200);

        const book = server.execute(function () {
            const Books = require('/imports/api/books/books.js').default;
            return Books.findOne({title: 'Seeking Wisdom', author: 'Peter Bevelin'});
        });

        expect(book.title).to.equal('Seeking Wisdom');
        expect(book.author).to.equal('Peter Bevelin');
    });

    afterEach(() => {
        server.execute(function () {
            const Books = require('/imports/api/books/books.js').default;
            return Books.remove({title: 'Seeking Wisdom', author: 'Peter Bevelin'});
        });
    });
});

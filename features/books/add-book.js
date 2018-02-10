/* global server, browser, expect */
/* eslint global-require: "off" */

module.exports = function () {
    this.After(function () {
        server.execute(function () {
            const Books = require('/imports/api/books/books').default;
            const book = Books.findOne({title: 'Seeking Wisdom', author: 'Peter Bevelin'});
            if (book) {
                Books.remove(book._id);
            }
        });
    });

    this.Given(/^I have added a book$/, function () {
        browser.url('http://localhost:3000')
            .setValue('[name="title"]', 'Seeking Wisdom')
            .setValue('[name="author"]', 'Peter Bevelin')
            .click('button[type=submit]')
            .pause(200);
    });

    this.Then(/^I see "([^"]*)" in the Books collection$/, function (bookTitle) {
        const getBook = server.execute(function (title) {
            const Books = require('/imports/api/books/books').default;
            return Books.findOne({title});
        }, bookTitle);

        expect(getBook.title).toEqual(bookTitle);
    });

    this.Then(/^The form is cleared$/, function () {
        expect(browser.getValue('[name="title"]')).toEqual('');
        expect(browser.getValue('[name="author"]')).toEqual('');
    });
};

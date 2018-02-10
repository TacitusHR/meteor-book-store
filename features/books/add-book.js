import Books from "../../imports/api/books/books";

module.exports = function () {
    this.After(function () {
        server.execute(function () {
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
            .submitForm('form');
    });

    this.Then(/^I see "([^"]*)" in the Books collection$/, function (bookTitle) {
        const getBook = server.execute(function (bookTitle) {
            return Books.findOne({title: bookTitle});
        }, bookTitle);

        expect(getBook.title).toEqual(bookTitle);
    });
};

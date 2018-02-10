module.exports = function () {
    const books = [{
        title: 'Freedom',
        author: 'Jonathan Frantzen',
    }, {
        title: 'The Prince',
        author: 'Niccolo Machiavelli',
    }];

    this.After(function () {
        server.execute(function (books) {
            const Books = require('/imports/api/books/books').default;
            books.forEach(({title}) => Books.remove({title}));
        }, books);
    });

    this.Given(/^There are some books in database$/, function () {
        const serverBooks = server.execute(function (books) {
            const Books = require('/imports/api/books/books').default;
            return books.map((book) => Books.insert(book));
        }, books);

        console.log(serverBooks);
    });

    this.Then(/^I see all of them$/, function () {
        browser.pause(500); // .waitForExist('.list-group');

        expect(browser.elements('.list-group li').value.length).toEqual(books.length);
        expect(browser.elements('.book-title*=The Prince').value.length).toEqual(1);
        expect(browser.elements('.book-title*=Freedom').value.length).toEqual(1);
    });
};

/* eslint-env mocha */

import {expect} from 'chai';
import Books from '../books';
import '../methods';

describe('Books methods', () => {
    beforeEach(() => {
        Books.remove({});
    });

    afterEach(() => {
        Books.remove({});
    });

    it('creates a book', () => {
        const bookId = Meteor.call('Books.insert', {title: 'My Book', author: 'Myself'});

        const books = Books.find({}).fetch();
        expect(books.length).to.be.equal(1);
        expect(books[0]).to.be.deep.equal({_id: bookId, title: 'My Book', author: 'Myself'});
    });
});

import {check} from 'meteor/check';
import Books from './books';

Meteor.methods({
    'Books.insert'(book) {
        check(book, Object);
        Books.insert(book, (error) => {
            if (error) {
                console.log(error);
            }
        });
    },
});

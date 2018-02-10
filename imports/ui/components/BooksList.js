import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';
import Books from '../../api/books/books';

export function BookItem({book: {title, author}}) {
    return (
        <li className="list-group-item">
            <strong className={'book-title'}>{title}</strong> &mdash; by {author}
        </li>
    );
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
};

export function NoBooks() {
    return (<p className="alert alert-warning">No books yet, hombre.</p>);
}

export class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array,
    };

    static defaultProps = {
        books: [],
    };

    render() {
        const {books} = this.props;
        if (books.length === 0) {
            return (<NoBooks />);
        }

        return (
            <ul className="list-group">
                {books.map((book, index) => <BookItem key={index} book={book} />)}
            </ul>
        );
    }
}

export default withTracker(() => {
    return {
        books: Books.find().fetch(),
    };
})(BooksList);

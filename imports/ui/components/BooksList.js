import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array,
    };

    static defaultProps = {
        books: [],
    };

    render() {
        return (
            <ul className="list-group">

            </ul>
        );
    }
}

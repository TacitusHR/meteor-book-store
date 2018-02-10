import React from 'react';
import AddBook from './components/AddBook';
import {BooksListContainer} from './components/BooksList';

export default function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <h4 className="page-header">Add a new book</h4>
                    <AddBook />
                </div>
                <div className="col-xs-12 col-sm-7 col-sm-offset-1">
                    <h4 className="page-header">Books</h4>
                    <BooksListContainer />
                </div>
            </div>
        </div>);
}

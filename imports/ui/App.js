import React, {Component} from 'react';
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <h4 className="page-header">Add a new book</h4>
                        <AddBook />
                    </div>
                    <div className="col-xs-12 col-sm-7 col-sm-offset-1">
                        <h4 className="page-header">Books</h4>
                        <BooksList />
                    </div>
                </div>
            </div>);
    }
}

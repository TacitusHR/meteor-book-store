import React, {Component} from 'react';

export default class AddBook extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <form id="add-book">
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" className="form-control" id={'title'} />
                </div>
                <div className="form-group">
                    <label for="author">Author</label>
                    <input type="text" name="author" className="form-control" id={'author'} />
                </div>
                <button type="submit" className="btn btn-success">Add Book</button>
            </form>
        );
    }

    handleSubmit() {

    }
}

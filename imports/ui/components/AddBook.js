import React, {Component} from 'react';

export default class AddBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {title, author} = this.state;
        if (title !== '' && author !== '') {
            Meteor.call('Books.insert', {title, author}, (error) => {
                if (error) {
                    alert(error.reason);
                } else {
                    // clear the form
                    this.setState({
                        title: '',
                        author: '',
                    });
                }
            });
        } else {
            alert('Make sure to provide a title and author before adding a book.');
        }
    }

    render() {
        const {title, author} = this.state;
        return (
            <form id="add-book" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">
                        Title
                        <input type="text" name="title" className="form-control" id="title" value={title} onChange={this.handleInputChange} />
                    </label>

                </div>
                <div className="form-group">
                    <label htmlFor="author">
                        Author
                        <input type="text" name="author" className="form-control" id="author" value={author} onChange={this.handleInputChange} />
                    </label>
                </div>
                <button type="submit" className="btn btn-success">Add Book</button>
            </form>
        );
    }
}

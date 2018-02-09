import React, {Component} from 'react';

export default class AddBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {title, author} = this.state;
        return (
            <form id="add-book">
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

import React from 'react'
import '../App.css'
// import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

export class Book extends React.Component {
    state = {
        defaultValue: 'none'
    }

    componentDidMount() {
        BooksAPI.get(this.props.book.id)
        .then(a => this.setState({
            defaultValue: a.shelf
        }))
    }

    handleOnChange(event) {
        const changeValue = event.target.value
        const actualValue = this.state.defaultValue

        if (changeValue && changeValue !== actualValue) {
            BooksAPI.update({id: this.props.book.id}, event.target.value)
         }

        this.setState({defaultValue: changeValue})
    }

    render(){
        const authors = this.props.book.authors || [];

        return (
            <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')'
                    }}>
                    </div>
                        <div className="book-shelf-changer">
                        <select value={this.state.defaultValue}
                                onChange={this.handleOnChange.bind(this)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">
                    {authors.map((author, index) => (
                        <div key={index}>
                            {author}
                        </div>
                    ))}
                    </div>
                </div>
            </li>
        )
    }
}

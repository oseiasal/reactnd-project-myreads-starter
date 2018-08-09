import React from 'react'
import '../App.css'
// import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

export class Book extends React.Component {
    handleOnChange (event) {
        const newShelf = event.target.value
        const currentShelf = this.props.book.shelf
        if (newShelf && newShelf !== currentShelf) {
            BooksAPI.update({id: this.props.book.id}, newShelf).then(response => console.log(response))
            }
    }

    render(){
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
                        <select value={this.props.book.shelf}
                                onChange={this.handleOnChange.bind(this)}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.theBook}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}

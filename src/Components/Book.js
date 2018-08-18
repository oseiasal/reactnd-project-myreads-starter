import React from 'react'
import PropTypes from 'prop-types'

export class Book extends React.Component {

    state = {
        defaultValue: 'none'
    }

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value)
        this.setState({
            defaultValue: event.target.value
        })
    }

    getShelfBook = (book) => {
        this.props.getShelf(book.id)
        .then(i => { this.setState({defaultValue: i.shelf})})
    }

    componentDidMount () {
        this.getShelfBook(this.props.book)
    }

    render(){
        const authors = this.props.book.authors || []
        return (
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
                                onChange={this.changeShelf.bind(this)}>
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
        )
    }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
};

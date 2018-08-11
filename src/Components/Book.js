import React from 'react'
import '../App.css'
// import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

export class Book extends React.Component {
    state = {
        shelves: [],
        defaultValue: 'none'
    }

    // FIXME: A mudança de statu demora pra ser resolvida, colocar uma fnção didmount ou willmount

    componentDidMount() {
        return BooksAPI.getAll().then((data) => {

            this.setState({
                shelves: data
            });

            let go = this.state.shelves.filter(item => {
                return item.id === this.props.book.id;

            });

            go.length > 0 && this.setState({defaultValue: go[0].shelf}, function () {
                console.log('the state was changed by setState');
            })

        })
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
        // TODO: Area de testes
        //this.listShelf();

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

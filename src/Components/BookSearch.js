import React from 'react'
import ReactDOM from 'react-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import {Book} from './Book'


export class Search extends React.Component {

    state = {
            query: '',
            listBook: []
    }

    // Sempre que uma mudança ocorre no input, então o listBook recebe objetos
    updateQuery = (query) => {
        this.setState({
            query
        })

        if (query.length > 0) {
            BooksAPI.search(query)
                .then((books) => {
                    this.setState({
                        listBook: books
                    })
                })
        }

        if (query.length === 0) {
            this.setState({
                listBook: []
            })
        }
    }

    render() {
        return (
            <div className="search-books">
              <div className="search-books-bar">
              {/* TODO: Requer mudança no setState */}
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                {   this.state.listBook.length > 0 ? (
                    <ol className="books-grid">
                        {
                            this.state.listBook.map((book) => (
                            book.hasOwnProperty('imageLinks') ?
                            (<li key={book.id}>
                            <Book theBook={book.title}  authors={book.authors} image={book.imageLinks.thumbnail} />
                            </li>) : 'null'
                            ))
                        }
                    </ol>

                        ) : (
                        this.state.query.length > 0  && (
                        <div>
                        No search results.
                        </div>
                    )
                )
            }
                </ol>
              </div>
            </div>
        )
    }
}

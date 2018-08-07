import React from 'react'
import ReactDOM from 'react-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'


export class Search extends React.Component {

    state = {
            query: '',
            listBook: []
    }

    // Sempre que uma mudança ocorre no input, então o listBook recebe objetos
    updateQuery = (query) => {
        this.setState({query})
        if (query.length > 0) {
            BooksAPI.search(query)
            .then((books) => {this.setState({listBook: books})})
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
                {/* TODO: precisa de um Array.map para exportar o que está na listbook */}
                            {this.state.listBook.map((foundBook) => (
                            <li key={foundBook.id}>{foundBook.title}</li>))}
                </ol>
              </div>
            </div>
        )
    }
}

import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'
import { Link } from "react-router-dom";

export class Search extends React.Component {

    state = {
            query: ''
    }

    updateQuery = (query) => {
        this.props.updateQuery(query)
        this.setState({
            query
        })
    }

    render() {
        return (
            <div className="search-books" >
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                {   this.props.listBook.length > 0 ? (
                    <ol className="books-grid">
                            {this.props.listBook.map((book) => (
                            book.hasOwnProperty('imageLinks') ?
                            (
                            <Book book={book} key={book.id} getShelf={this.props.getShelf}
                            changeShelf={this.props.changeShelf}
                            />
                            ) : undefined
                            ))}
                    </ol>

                        ) : (
                        this.state.query.length > 0  && (
                        <div>
                        Não Encontrado
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

Search.propTypes = {
  listBook: PropTypes.array.isRequired,
  updateQuery: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired
};

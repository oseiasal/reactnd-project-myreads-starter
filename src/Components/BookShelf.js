import React from 'react'
import {Book} from './Book'
import PropTypes from 'prop-types'

export class Shelf extends React.Component {

    render () {
        return (
                <div className="list-books-content" >
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                            <div className="bookshelf-books">
                            <ol className="books-grid">
                            {

                                this.props.shelf.map(a => {
                                    return <Book book={a} key={a.id}
                                     getShelf={this.props.getShelf}
                                     changeShelf={this.props.changeShelf} />
                                })

                            }
                            </ol>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


Shelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired
};

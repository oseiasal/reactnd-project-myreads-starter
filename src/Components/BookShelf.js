import React from 'react'

export class Shelf extends React.Component {
    render () {
        return (
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {/*// TODO: aqui fica o livro com seu status*/}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

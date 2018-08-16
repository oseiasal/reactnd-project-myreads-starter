import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from "react-router-dom"
import { Shelf } from './Components/BookShelf.js'
import { Search } from './Components/BookSearch.js'

class BooksApp extends React.Component {

    state = {
        books: [],
        listBook:[],
        defaultValue: "none"
    }

    // Função base para a troca de book
    changeShelf = (book, newShelf) => {
        BooksAPI.update({id: book.id}, newShelf).then(() => {
        })

    }

    // Realiza a pesquisa
    updateQuery = (query) => {

        this.setState({
            query
        })

        if (query.length > 0) {
            BooksAPI.search(query)
                .then((books) => {
                        this.setState({
                            listBook: books,
                        })
                })
        } else {
            this.setState({
                listBook: []
            })
        }
    }

    //Pega os livros, joga numa lista geral
    // depois filtra e separa por prateleira

    componentDidMount(){
        this.getAllBooks()
    }

    getAllBooks () {
    BooksAPI.getAll().then((data) => {

        this.setState({
            books: data
        })
    })}


filterByShelf = (shelf) => {
    return this.state.books.filter(i => shelf === i.shelf)
}

getShelf = (id) => {
    return BooksAPI.get(id);
}

render() {
    this.getAllBooks();

    return (
        <div className="app">
        <Route exact path="/" render={() => (
    <div className="list-books">
         <div className="list-books-title">
            <h1>MyReads</h1>
         </div>
              <Shelf shelfTitle="Currently Reading" shelf={this.filterByShelf('currentlyReading')}
              changeShelf={this.changeShelf} getShelf={this.getShelf} key="1"/>

              <Shelf shelfTitle="Want To Read" shelf={this.filterByShelf('wantToRead')}
              changeShelf={this.changeShelf}  getShelf={this.getShelf} key="2"/>

              <Shelf shelfTitle="Read" shelf={this.filterByShelf('read')}
              changeShelf={this.changeShelf} getShelf={this.getShelf} key="3" />

             <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
</div>

)} />

            <Route path="/search" render={() => (

                    <Search changeShelf={this.changeShelf}
                    getShelf={this.getShelf}
                    updateQuery={this.updateQuery}
                    listBook={this.state.listBook} />
               )}
             />
        </div>
    )}

}

export default BooksApp

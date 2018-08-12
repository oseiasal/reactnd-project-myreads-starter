import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import { Shelf } from './Components/BookShelf.js'

class BooksApp extends React.Component {

    state = {
        books: [],
        read: [],
        wantToRead: [],
        currentlyReading: []
    }

componentDidMount(){

    BooksAPI.getAll().then((data) => {

        this.setState({
            books: data
        })

        console.log(data);

    }).then(() => {

        const bookList = this.state.books
        const reads = []
        const toRead = []
        const reading = []

        // Passar os lidos para o array
            bookList.filter(a => {
                return a.shelf == 'read';

            }).map((book) => {
                reads.push(book)
                console.log(book);
            })
            this.setState({read: reads});

            // Passar os want to read para o array
            bookList.filter(
                c => {
                    return c.shelf === 'wantToRead';
                }
            ).map((book) => {
                toRead.push(book)
            })
            this.setState({wantToRead: toRead});

            // Passar os lendo agora  para o array
            bookList.filter(
                c => {
                    return c.shelf === 'currentlyReading';
                }
            ).map((book) => {
                reading.push(book)
            })
            this.setState({currentlyReading: reading});
        })
    }





    render(){

        return (
            <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
              </div>

                <Shelf shelfTitle="Currently Reading" shelf={this.state.currentlyReading} key="1"/>

                <Shelf shelfTitle="Want To Read" shelf={this.state.wantToRead} key="2"/>

                <Shelf shelfTitle="Read" shelf={this.state.read} key="3" />

                <div className="open-search">
                    <a onClick={()=> this.setState({ showSearchPage: true })}>Add a book</a>
                </div>

             </div>

        )
    }
}
export default BooksApp

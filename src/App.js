import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import { Shelf } from './Components/BookShelf.js'

class BooksApp extends React.Component {

    render(){
        return (
            <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
              </div>

                <Shelf bookShelfTitle="Currently Reading" />

                <Shelf bookShelfTitle="Want To Read" />

                <Shelf bookShelfTitle="Read" />

                <div className="open-search">
                    <a onClick={()=> this.setState({ showSearchPage: true })}>Add a book</a>
                </div>

             </div>

        )
    }
}
export default BooksApp

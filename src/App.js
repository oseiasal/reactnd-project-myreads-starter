import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    componentDidMount() {
        this.getBooks();
}

    getBooks = () => {
        //Aqui Pegarei os arquivos
        console.log("Worked")
    }

    render(){
        return (<h1> Hello Darknes My Old Friend </h1>)
    }
}
export default BooksApp

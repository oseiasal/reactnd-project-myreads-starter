import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Search} from './Components/BookSearch'
import {Book} from './Components/Book'
import {Shelf} from './Components/BookShelf'
import { BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

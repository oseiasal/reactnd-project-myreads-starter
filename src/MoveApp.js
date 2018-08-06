import React from 'react';
import ReactDOM from 'react-dom';
import { BooksApp } from './App';
import * as BooksAPI from './BooksAPI';

export class Teste extends React.Component {
	state = {
		query: "",
		booksFound: []
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()});
		BooksAPI.search(this.state.query).then((response) => {
			this.setState({booksFound: response});
		}
		).catch(() => {console.log("Não encontrado")});

	}

	render() {
		return (
			<div className="search-books-input-wrapper">
				<input type="text" onChange={(event) => this.updateQuery(event.target.value)} value={this.state.query} placeholder="Search by title or author"/>
			</div>
		)
	}

}

import React from 'react'


export class Message extends React.Component {
    state = {
        value: 'none'
    }

 getShelfBook = (book) => {
        this.props.getShelf(book.id)
        .then(i => {
            this.setState({value: i.shelf})
        })
    }

    componentWillMount () {
        this.getShelfBook(this.props.book)

    }

    componentWillReceiveProps () {
        this.getShelfBook(this.props.book)
    }

    render() {
        return (
            <div className="shelf-name">{
                this.state.value !== 'none' ?
        ( <p>This book is in <em>{this.state.value}</em> shelf.</p>
        ) : (
            undefined
        )}</div>
        )
    }
}

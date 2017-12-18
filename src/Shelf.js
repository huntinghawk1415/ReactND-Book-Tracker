import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">{
          this.props.secret === this.props.books.secret ?
          <Book books={ this.props.books } /> :
          null
        }
        </div>
      </div>
    )
  }
}

export default Shelf
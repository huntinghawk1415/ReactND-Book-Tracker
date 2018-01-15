import React, {Component} from 'react';
import Book from './Book';

//Renders a shelf with the books that match criteria in './Book'

class Shelf extends Component {
  render() {
    const {books, shelf, title, handleChange} = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <Book
            books={books}
            handleChange={handleChange}
            shelf={shelf}
          />
        </div>
      </div>
    );
  }
}

export default Shelf;

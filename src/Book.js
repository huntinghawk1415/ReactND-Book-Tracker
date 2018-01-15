import React, {Component} from 'react';
import Select from './Select';
import {Link} from 'react-router-dom';

//Renders a 'book' based on shelf criteria

class Book extends Component {
  render() {
    const {books, shelf, handleChange} = this.props;
    //Returns a 'no match' JSX value if no books match shelf criteria
    if(books.reduce((r, s) => {
      if(s.shelf === shelf) {
        return r + 1;
      } else {
        return r;
      }
    }, 0) === 0) {
      return (
        <div>
          <h4 className="mt-5">
            You don't have anything in this bookshelf
          </h4>
          <Link
            to="/search"
            title="Add a book"
          >
            <button className="btn btn-sm btn-success text-white">
              Add a book
            </button>
          </Link>
        </div>
      );
    } else {
      //Returns an ordered list of books that match the shelf criteria
      return (
        <ol className="books-grid">
          {books.map((s, i) => (
            s.shelf === shelf ?
              <li key={i}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: s.hasOwnProperty('imageLinks')
                        ? `url(${s.imageLinks.thumbnail})`
                        : `url(${"http://www.pigsandsheep.org/wp-content/plugins/wp-ulike/assets/img/no-thumbnail.png"})`
                      }}
                    ></div>
                    <Select
                      handleChange={handleChange}
                      index={i}
                      selected={s.shelf}
                    />
                  </div>
                  <div
                    className="book-title text-truncate"
                    title={s.title}
                  >{s.title}</div>
                  <div className="book-authors">{
                    !s.hasOwnProperty('authors') ? "No authors available" :
                    s.authors.length === 1 ? s.authors :
                    s.authors.length === 2 ? `${s.authors[0]}, and ${s.authors[1]}` :
                    `${s.authors[0]}, ${s.authors[1]}, and ${s.authors.length - 2 > 1 ?
                      `${s.authors.length - 2} others` : `${s.authors.length -2} other`
                    }`
                  }</div>
                </div>
              </li>
            : null
          ))}
        </ol>
      );
    }
  }
}

export default Book;

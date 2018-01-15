import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelf from './Shelf';
import Search from './Search';
import {Route, Link} from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books: [],
  }
  //Loads the books on the shelf into the state so that it can render
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      });
    }, (reason) => {
      return reason;
    });
  }
  //Updates the state and API when a book is moved using the select button
  handleChange = (value, index) => {
    let x = Object.assign({}, this.state);
    x.books.map((s, i) => index !== i ? s : s.shelf = value);
    BooksAPI.update(x.books[index], x.books[index].shelf);
    this.setState({
      books: x.books
    });
  }
  //Updates the state and API when a book is moved to the shelf from the search page
  updateBooks = (x, y, z) => {
    let a = Object.assign({}, this.state);
    a.books.push(z);
    this.setState({
      books: a.books
    });
    BooksAPI.update(x, y);
  }
  render() {
    const {books} = this.state, {handleChange} = this;
    return (
      <div className="container">
       {this.state.books.length > 0 && (
        <div>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1 className="display-4">My Reads</h1>
              </div>
              <div className="list-books-content">
                <div className="mt-5">
                  <Shelf
                    books={books}
                    title="Currently Reading"
                    handleChange={handleChange}
                    shelf="currentlyReading"
                  />
                  <Shelf
                    books={books}
                    title="Want to Read"
                    handleChange={handleChange}
                    shelf="wantToRead"
                  />
                  <Shelf
                    books={books}
                    title="Have Read"
                    handleChange={handleChange}
                    shelf="read"
                  />
                </div>
              </div>
              <div className="open-search">
                <Link
                  to="/search"
                  title="Add a book"
                >Add a book</Link>
              </div>
            </div>
          )}/>
          <Route exact path="/search" render={() => (
            <Search
              books={books}
              updateBooks={this.updateBooks}
            />
          )}/>
        </div>
      )}
      </div>
    );
  }
}

export default BooksApp;

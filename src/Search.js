import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Results from './Results';
import * as BooksAPI from './BooksAPI';

//Renders the search page

class Search extends Component {
  state = {
    query: [],
    term: "",
  }
  //Sets the state based off the user's inputed term
  handleSearch = ({target}) => {
    const {books} = this.props;
    //Was returning a post error when user backspaced all input to none,
    //so added the 'target.value' ternary if statement to reset state
    target.value !== ""
    ? BooksAPI.search(target.value).then((query) => {
      //Returns a new array of the searched books that removes any books currently on a shelf
      let newQuery = (query !== undefined && !query.hasOwnProperty('error')) && query.reduce((r, s) => {
        if(!books.some(o => o.id === s.id)) {
          return (r.push(s), r);
        } else {
          return r;
        }
      }, []);
      this.setState({
        query: newQuery,
        term: target.value,
      });
    })
    : this.setState({
      query: [],
      term: "",
    });
  }
  //Retrieves info from the select on searched books and passes it to './App' so it can update the bookshelf,
  //then removes the moved item from the current state
  handleChange = (value, index) => {
    const {updateBooks} = this.props, {query} = this.state;
    let x = Object.assign({}, this.state);
    x.query.map((s, i) => index !== i ? s : s.shelf = value);
    updateBooks(x.query[index], x.query[index].shelf, x.query[index]);
    this.setState({
      query: query.slice(0, index).concat(query.slice(index + 1, query.length))
    });
  }
  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.handleSearch}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.term && (
            <Results
              input={this.state.term}
              query={this.state.query}
              handleChange={this.handleChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;

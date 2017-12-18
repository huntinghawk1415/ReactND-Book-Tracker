import React, { Component } from 'react'

class Book extends Component {
  render() {
    return(
      <li>
        { this.props.book.map(s => (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + s.imageLinks.thumbnail + ')' }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{ s.title }</div>
            <div className="book-authors">{
              s.authors.length === 1 ? s.authors :
              s.authors.length > 1 ? s.authors[0] + ", and " + s.authors[1] :
              s.authors.length > 2 ? s.authors[0] + ", " + s.authors[1] + ", and " + (s.authors.length - 2) + " other(s)" :
              null
            }</div>
          </div>
        ))}
      </li>
    )
  }
}

export default Book
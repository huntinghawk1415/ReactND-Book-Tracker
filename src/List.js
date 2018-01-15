import React, {Component} from 'react';
import Select from './Select';

//Renders the list of books generated from the user's input

class List extends Component {
  render() {
    const {handleChange, query} = this.props;
    return(
      <ol className="books-grid">
        {query !== undefined && query.map((s, i) => (
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
        ))}
      </ol>
    );
  }
}

export default List;

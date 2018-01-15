import React, {Component} from 'react';
import List from './List';

//Renders the results or lackthereof from the user's inputs

class Results extends Component {
  render() {
    const {query, handleChange, input} = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title mt-3 mb-4">{
          !query
          ? `Sorry, "${input}" isn't yeilding results. Check back later.`
          : `Results for "${ input}"`
        }</h2>
        <div className="bookshelf-books">{
          query &&
            <List
              query={query}
              handleChange={handleChange}
            />
        }</div>
      </div>
    );
  }
}

export default Results;

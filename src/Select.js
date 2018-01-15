import React, {Component} from 'react';

//Renders the select dropdown button

class Select extends Component {
  //Passes the value of the option selected and the index of the book to handleChange fx
  changeBook = ({target}) => {
    const {handleChange, index} = this.props;
    handleChange(target.value, index);
  }
  render() {
    const {selected} = this.props;
    return(
      <div className="book-shelf-changer">
        <select
          value={selected !== undefined ? selected : "disabled"}
          onChange={this.changeBook}
        >
          <option value="disabled" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Have Read</option>
          <option className="bg-danger text-light" value="none">Remove</option>
        </select>
      </div>
    );
  }
}

export default Select;

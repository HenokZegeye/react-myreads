import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksGrid from './BooksGrid';

export class Search extends Component {
  state = {
    books: [],
  };

  handleChange = (event) => {
    const query = event.target.value;
    if (query) {
      BooksAPI.search(query).then((books) => {
        if (Array.isArray(books)) {
          this.setState({ books });
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <BooksGrid books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

export class BooksGrid extends Component {
  handleCategoryChange = (event, book) => {
    const shelf = event.target.value;
    BooksAPI.update(book, shelf).then((result) => {
      debugger;
    });
  };

  render() {
    const { books } = this.props;
    return (
      <ol className='books-grid'>
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              handleCategoryChange={this.handleCategoryChange}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default BooksGrid;

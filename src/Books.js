import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';

export class Books extends Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.categorize(books);
    });
  }

  categorize(books) {
    let currentlyReadingBooks = [];
    let wantToReadBooks = [];
    let readBooks = [];
    books.forEach((book) => {
      if (book.shelf === 'currentlyReading') {
        currentlyReadingBooks.push(book);
      } else if (book.shelf === 'wantToRead') {
        wantToReadBooks.push(book);
      } else {
        readBooks.push(book);
      }
    });
    this.setState({ currentlyReadingBooks, wantToReadBooks, readBooks });
  }

  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state;
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Shelf books={currentlyReadingBooks} title={'Currently Reading'} />
            <Shelf books={wantToReadBooks} title={'Want to Read'} />
            <Shelf books={readBooks} title={'Read'} />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Books;

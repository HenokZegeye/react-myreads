import React from 'react';

const Book = (props) => {
  const { book, handleCategoryChange } = props;
  const imageLinks = book.imageLinks;
  const thumbnail = imageLinks ? imageLinks.thumbnail : '';
  const authors = book.authors ? book.authors.join() : '';
  return (
    <div className='book'>
      <div className='book-top'>
        <img
          className='book-cover'
          style={{
            width: 128,
            height: 193,
          }}
          src={thumbnail}
          alt='book-cover'
        />
        <div className='book-shelf-changer'>
          <select onChange={(event) => handleCategoryChange(event, book)}>
            <option selected value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{authors}</div>
    </div>
  );
};

export default Book;

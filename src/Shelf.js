import React from 'react';
import BooksGrid from './BooksGrid';

const Shelf = (props) => {
  const { title, books } = props;
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BooksGrid books={books} />
      </div>
    </div>
  );
};

export default Shelf;

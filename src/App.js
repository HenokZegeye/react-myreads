import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Books from './Books';
import Search from './Search';

const BooksApp = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Books} />
      <Route path='/search' component={Search} />
    </BrowserRouter>
  );
};

export default BooksApp;

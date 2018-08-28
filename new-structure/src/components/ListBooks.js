import React, { Component } from 'react';
import BookCard from './BookCard';

class ListBooks extends Component {
  render() {
    return (
      <div className="App">
        <BookCard />
      </div>
    );
  }
}

export default ListBooks;

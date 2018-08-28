import React, { Component } from 'react';
import BookCard from './BookCard';

class ListBooks extends Component {  
  constructor(props){
    super(props);    
    this.state = {};
  } 

  render() {
    const {books} = this.props
    return (
      <div className="App">
        <div style={{display: 'flex', flexWrap: 'wrap', width: '900px', margin: 'auto' }}>          
          {books.map(
              book => <BookCard key={book.id} {...book} />
            )
          }
        </div> 
      </div>
    );
  }
}

export default ListBooks;

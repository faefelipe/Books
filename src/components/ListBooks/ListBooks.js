import React, { Component } from 'react';
import BookListApi from '../Books/BookListApi';
import './ListBooks.css';

class ListBooks extends Component {
  constructor(props){
    super(props);    
    this.state = {};
  }  
  render(){
    const {books} = this.props
    return (
      <div> 
        <BookListApi />                     
      </div>
    )
  }
}

export default ListBooks;
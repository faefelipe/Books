import React, { Component } from "react";
import BookSearch  from "../components/BookSearch";
import BookList  from "../components/BookList";
import { throws } from "assert";

export default class Book extends Component {  

  constructor(props){
    super(props) 
    this.state = {books: []};  
    this.search = this.search.bind(this);    
  }
  search(term) {    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`, {
        method: "GET",
        dataType: 'json'
    })
    .then((r) => r.json())
    .then(books => this.setState({books: books.items}) )  
  }  
  render (){
    return( 
      <div>
        <BookSearch />
        <BookList books={this.state.books}/>      
      </div>
    );
  }    
} 
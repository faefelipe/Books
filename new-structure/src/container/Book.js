import React, { Component } from 'react';
import Search from '../components/Search';
import ListBooks from '../components/ListBooks'

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  onSearch(term){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`, {
        method: "GET",
        dataType: 'json'
    })
    .then((r) => r.json())
    .then(books => this.setState({books: books.items}) )
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch.bind(this)} />
        <ListBooks />        
      </div>
    );
  }
}

export default Book;

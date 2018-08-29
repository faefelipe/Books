import React, { Component } from 'react';
import Search from '../components/Search';
import ListBooks from '../components/ListBooks';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],          
    };            
  }
  componentWillMount() {
    localStorage.getItem('books') && this.setState({
      books: JSON.parse(localStorage.getItem('books')),
      isLoading: false
    })
  }
  componentDidMount(){
    if(!localStorage.getItem('books')) {
      this.onSearch();
    }
      console.log('Using data from localStorage');
  }

  onSearch(term, startIndex = 0, maxresults = 8){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${startIndex}&maxResults=${maxresults}`, {
        method: "GET",
        dataType: 'json'
    })
    .then((r) => r.json())
    .then(books => this.setState({books: books.items}) )
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('books', JSON.stringify( nextState.books));
    localStorage.setItem('booksDate', Date.now());
  }

  render() {    
    return (
      <div className="App">
        <Search onSearch={this.onSearch.bind(this)} />
        <ListBooks onSearch={this.onSearch.bind(this)} books={this.state.books} />            
      </div>
    );
  }
}

export default Book;

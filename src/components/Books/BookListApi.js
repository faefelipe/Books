import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import BookResultsList from '../Books/BookResultsList';

export default class BookListApi extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchText: "",
    };
  }
  handleKeyPress(event){
    let self = this;
    let value = event.target.value;
    this.setState({searchText: value})
    if(event.key === "Enter" && value){
      self.search()
    }
  }
  search() {
    let self = this
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + self.state.searchText, {
        method: "GET",
        dataType: 'json'
      })
      .then((r) => r.json())
      .then(books => self.setState({books: books.items}) )
  }
  render() {    
    return (
      <div>  
        <form style={{ width: '700px', margin: 'auto' }}>          
          <FormControl margin="normal" required fullWidth>          
            <InputLabel htmlFor="search">Search</InputLabel>
            <Input
              name="search"
              type="text"
              id="search"
              autoComplete="current-search" 
              onKeyPress={this.handleKeyPress.bind(this)}
            />                                        
          </FormControl>
          <FormControl required fullWidth>            
            <Button id="search" onClick={this.search.bind(this)}><Typography name='search' /> Search</Button>   
          </FormControl>                                
        </form>                    
        <BookResultsList books={this.state.books}></BookResultsList>     
      </div>
    );    
  }

};
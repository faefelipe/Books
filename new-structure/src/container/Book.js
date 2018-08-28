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
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('OLa'  + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <Search />
        <ListBooks />        
      </div>
    );
  }
}

export default Book;

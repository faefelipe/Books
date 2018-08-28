import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };       
  }

  handleChange(event) {
    this.setState({term: event.target.value} )
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>        
          <input type="text" value={this.state.term} onChange={this.handleChange.bind(this)} name="Search" />
          <input type="submit" value="Submit" />          
        </form>
      </div>
    );
  }
}

export default Search;

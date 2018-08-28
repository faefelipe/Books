import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};       
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>        
          <input type="text" value={this.state.value} onChange={this.handleChange} name="Search" />
          <input type="submit" value="Submit" />          
        </form>
      </div>
    );
  }
}

export default Search;

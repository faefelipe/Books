import React, { Component } from 'react';
import BookTitle from "./BookTitle";

class BookResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false
    };
  }
  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  } 
  render(){
    return (                              
      <BookTitle {...this.props.volumeInfo} onClick={this.toggleDetails.bind(this)}/>                            
    )
  }
}

export default BookResult;
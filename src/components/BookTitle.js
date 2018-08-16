import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class BookTitle extends Component {
  constructor(props){
    super(props);    
    this.state = {
      thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      rating: props.averageRating,       
    };
  }
  render(){
    return (
    <Grid container className="book" onClick={this.props.onClick}>
      <Grid md={8}>
        <span className="title">{this.props.title}</span> 
        <img src={this.state.thumbnail} thumbnail />        
        <div className="description">{this.props.description}</div>
        <div className="link-extern">{this.props.selfLink}</div>
      </Grid>
      <Grid md={4}>      
        <div className="authors">{(this.props.authors) ? this.props.authors.join(", ") : ""}</div>
        <div className="publishers">{this.props.publisher} {(this.props.publishedDate) ? "(" + this.props.publishedDate + ")": ""}</div>
      </Grid>
    </Grid>
    )
  }
}

export default BookTitle;
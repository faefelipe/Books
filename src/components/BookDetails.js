import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from "./Rating";

class BookDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
        thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        rating: props.averageRating,             
    };
  }
  render(){
    return (
    <Grid className="details">
      <Grid md={12}>
        <Grid>
            <Grid md={2}>
                <img src={this.state.thumbnail} thumbnail />
                <Rating rating={this.state.rating}/>                
                <span className="title">{this.props.title}</span> 
            </Grid>
            <Grid md={10}>
                text side
            </Grid>
        </Grid>
      </Grid>
    </Grid>
    )
  }
}

export default BookDetails;
import React, { Component } from 'react';
import BookResult from "./BookResult";
import Grid from '@material-ui/core/Grid';

class BookResultsList extends Component {
  render(){
    const {books} = this.props
    return(
      <div style={{display: 'flex', flexWrap: 'wrap', width: '900px', margin: 'auto' }}>  
        <Grid container spacing={32}>    
          {books.map(book => <BookResult key={book.id} {...book} />)}
        </Grid>
      </div>
    )
  }
}

export default BookResultsList;
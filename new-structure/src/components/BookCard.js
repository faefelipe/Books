import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class BookTitle extends Component {

  render(){    
    
    return (    
      <Grid item xs={6} sm={6}>
        <Card>                  
          <figure>
            <img src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
          </figure>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.volumeInfo.title}
            </Typography>                                    
          </CardContent>          
        </Card>
      </Grid>       
    )
  }
}

export default BookTitle;
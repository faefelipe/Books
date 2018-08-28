import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarAvaliation from './StarAvaliation';

class BookCard extends Component {

  render(){    
    
    return (    
      <Grid item xs={6} sm={6}>
        <Card>      
          <StarAvaliation />
          <CardMedia
            image={this.props.volumeInfo.imageLinks.thumbnail}
            title={this.props.volumeInfo.title}
          />          
          <img src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
          <CardContent className="title">
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.volumeInfo.title}
            </Typography>                                    
          </CardContent>          
        </Card>
      </Grid>       
    )
  }
}

export default BookCard;
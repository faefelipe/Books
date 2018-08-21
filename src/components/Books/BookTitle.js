import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class BookTitle extends Component {
  constructor(props){
    super(props);    
    this.state = {
      thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      rating: props.averageRating,       
    };
  }

  render(){
    const { classes } = this.props;
    
    return (    
      <Grid item xs={6} sm={4}>
        <Card>
          <CardMedia          
            image={this.state.thumbnail} 
            title={this.props.title} 
          />
          <figure>
            <img src={this.state.thumbnail}/>
          </figure>
          <CardContent className="title">
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <CardActions>              
              <div className="description">{this.props.description}</div>
            </CardActions>            
          </CardContent>
        </Card>
      </Grid>       
    )
  }
}

export default BookTitle;
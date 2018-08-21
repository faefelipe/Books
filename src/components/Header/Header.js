import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({  
  appBar: {
    position: 'relative',    
    background: 'rgba(73,155,234,1)',    
    background: 'linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(57,143,232,1) 40%, rgba(32,124,229,1) 100%)',  
  },        
});

function Menu(props) {
  const { classes } = props;

  return (
    <React.Fragment>      
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>                    
            <Grid container direction="row" justify="center" alignItems="center">
              <figure>
                <img src="http://www.eatlogos.com/education_logos/png/vector_colourful_education_book_logo.png"/>
              </figure>
            </Grid>          
        </Toolbar>
      </AppBar>
    </React.Fragment>    
  );
}

export default withStyles(styles)(Menu);
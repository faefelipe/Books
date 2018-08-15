import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({  
  appBar: {
    position: 'relative',    
  },        
});

function Footer(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Contato
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>    
    </React.Fragment>    
  );
}

export default withStyles(styles)(Footer);
import React from "react";
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

  const styles = theme => ({
    appBar: {
      position: 'relative',    
    },        
    InputText: {
      background: 'rgba(73,155,234,1)',    
    }
  });

  function SearchBooks(props) {
    const { classes } = props;

    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">          
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="search">Search</InputLabel>
          <Input
            name="search"
            type="text"
            id="search"
            autoComplete="current-search"
          />
      </FormControl>
          <input type="submit" className="btn btn-primary" value="Search Books"/>
        </Grid>
      </div>
    );
  }

export default withStyles(styles)(SearchBooks);
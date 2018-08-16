import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Api from "../api/Api.js";

  const styles = theme => ({
    appBar: {
      position: 'relative',    
    },        
    InputText: {
      background: 'rgba(73,155,234,1)',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    btn: {
      background: '#2196f3',
    }
  });

  function SearchBooks(props) {
    const { classes } = props;

    return (
      <div>
        <Api />
        <form className={classes.layout}>
          
          <FormControl margin="normal" required fullWidth>          
            <InputLabel htmlFor="search">Search</InputLabel>
            <Input
              name="search"
              type="text"
              id="search"
              autoComplete="current-search"                              
            />                                        
          </FormControl>

          <FormControl required fullWidth>
            <Button type="submit" className={classes.btn} value="Search Books">Search Books</Button>          
          </FormControl>                          
      
        </form>
    
      </div>
    );
  }

export default withStyles(styles)(SearchBooks);
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

class BookSearch extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchText: "",
    };
  }  

  onSubmit(e){
    e.preventDefault();    
  }
  
  render() {        
    return (
      <div>
        <form onSubmit={this.onSubmit}>          
          <FormControl margin="normal" required fullWidth>          
            <InputLabel htmlFor="search">Search</InputLabel>
            <Input
              name="search"
              type="text"
              id="search"              
              value={this.state.value}
            />                                        
          </FormControl>
          <FormControl required fullWidth>            
            <Button id="search" type="submit"><Typography name='search' /> Search</Button>   
          </FormControl>                                
        </form>
      </div>
    );
  }

}

export default BookSearch;  
import React, {Component} from "react";

class BookList extends Component {
  constructor(props){
    super(props)    
  }
  render (){
    const {books} = this.props
    return(            
      <div style={{display: 'flex', flexWrap: 'wrap', width: '900px', margin: 'auto' }}>          
          {books.map(book => <div key={book.id} {...book}>{...book} </div> )}        
      </div>          
    );
  }
}

export default BookList;
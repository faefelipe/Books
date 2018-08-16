import React, { Component } from 'react';

class Rating extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    let stars = []
    for(let i = 0; i < Math.floor(this.props.rating); i++){
        stars.push( name="star")
    }
    if(this.props.rating % 1){
        stars.push( name="star-half-o")
    }
    return (<div>{stars}</div>)
  }
}

export default Rating;
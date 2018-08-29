import React, { Component } from 'react';
import StarAvaliation from './StarAvaliation';

class MyButton extends Component {
  render() {
    return (                  
      <a onClick={() => { this.props.handleClick(this.props.label); }}>
        <StarAvaliation>{this.props.label}</StarAvaliation>
      </a>                
    );
  }
}

class MyLabel extends Component {
  render() {
    return <p>Cliquei no: {this.props.text}</p>
  }
}

class ButtonAvaliation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }

  render() {
    return (            
      <div>
        <MyLabel text={this.state.labelText} />
        <ul>
          <MyButton handleClick={this.setLabelText} label="Botão 1" />
          <MyButton handleClick={this.setLabelText} label="Botão 2" />
          <MyButton handleClick={this.setLabelText} label="Botão 3" />
          <MyButton handleClick={this.setLabelText} label="Botão 4" />
          <MyButton handleClick={this.setLabelText} label="Botão 5" />
        </ul>              
      </div>
    );
  }
}

export default ButtonAvaliation;
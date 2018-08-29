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
    return <p>Avaliação do Livro: {this.props.text}</p>
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
          <MyButton handleClick={this.setLabelText} label="Não Gostei" />
          <MyButton handleClick={this.setLabelText} label="Regular" />
          <MyButton handleClick={this.setLabelText} label="Bom" />
          <MyButton handleClick={this.setLabelText} label="Muito Bom" />
          <MyButton handleClick={this.setLabelText} label="Ótimo" />
        </ul>              
      </div>
    );
  }
}

export default ButtonAvaliation;
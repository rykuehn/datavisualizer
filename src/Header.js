import React, { Component } from 'react';
import './main.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      text: ''
    }
  }

  onSubmit (event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({visible:false, text: this._question.value});

  }
  render() {
    return (
      <div>
      <h1> {this.state.text}</h1>
      <div style={this.state.visible ? {} : {display: 'none'}}>
        
        <form onSubmit={this.onSubmit.bind(this)} className="MyForm" >
          <input type="text" className='inputBox' name="response" ref={(i) => this._question = i} placeholder="What's your question?"/>
        </form>
     </div>
     </div>
    )
  }
}


export default Header;


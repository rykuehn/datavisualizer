import React, { Component } from 'react';
import $ from 'jquery';

class EnterResponse extends Component {
  constructor(props){
    super(props);

    this.state = {
      flavor: '',
      count: 0
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    event.stopPropagation();
    
    $.ajax({
      url: 'http://localhost:8080/newresponse',
      type: 'POST',
      data: JSON.stringify({flavor: this._flavor.value, count: 1 }),
      contentType: 'application/json',
      success: data => {
      $('input[type="text"], textarea').val('')
      this.props.getIceCream();
      console.log('success!!!!!!!!', data)
      },
      error: data => {
        console.error('errror with submit post', data);
      }
    });
  }


  render() {
    return (
     <form onSubmit={this.onSubmit.bind(this)} className="MyForm">
     <input type="text" name="response" ref={(i) => this._flavor = i}/>
     <button type="submit">Submit</button>
     </form>
     )
  }
};

export default EnterResponse;



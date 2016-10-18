import React, { Component } from 'react';
import $ from 'jquery';

class EnterResponse extends Component {
  constructor(){
    super();

  }

  onSubmit (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.response.value)
    console.log('works')
    $('input[type="text"], textarea').val('')

  }



  render() {
    return (
       <form onSubmit={this.onSubmit} className="MyForm">
          <input type="text" name="response"/>
          <button type="submit">Submit</button>
      </form>
    )
  }
};

export default EnterResponse;
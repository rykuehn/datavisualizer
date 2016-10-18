import React, { Component } from 'react';
import $ from 'jquery';



class EnterResponse extends Component {
  constructor(props){
    super(props);
console.log('response props')
  }

  onSubmit (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.response.value)
    
    $('input[type="text"], textarea').val('')

    //handlePost(event.target.response.value);
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
import React, {Component} from 'react';
import $ from 'jquery';

class Clear extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit (event) {
    event.preventDefault();
    event.stopPropagation();
  
    $.ajax({
      url: 'http://localhost:8080/clear',
      type: 'GET',
      success: data => {
        console.log('success with clear Button request');
        this.props.refresh();
        
      },
      error: data => {
        console.error('there was an error with the Clear Button get request');
      }
    });
    


  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <button  type="submit">Clear</button>
      </form>
    )
  }
}

export default Clear;
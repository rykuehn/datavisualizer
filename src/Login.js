import React, {Component} from 'react';
import $ from 'jquery';

class Login extends Component {
  constructor(){
    super();

  }

  onSubmit (event) {
    event.preventDefault();
    event.stopPropagation();

    var username= this._username.value;
    var password=this._password.value;
    $('input[type="text"], textarea').val('')
    
    
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
        <input type="text" name="username" ref={(i) => this._username = i}/>
        <input type="text" name="password" ref={(i) => this._password = i}/>
        <button type="submit">Login</button>
      </form>
      )
    
  }
}

export default Login;
import React, { Component } from 'react';
import Header from './Header';
import Chart from './Chart';
import EnterResponse from './EnterResponse';
import Clear from './Clear';
import $ from 'jquery';

import './main.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentWillMount() {
   this.getIceCream();
  }

  getIceCream() {
     $.ajax({
      url: 'http://localhost:8080',
      type: 'GET',
      dataType: 'json',
      success: data => {
        console.log('success', data);
        this.setState({data: data.responses});
      },
      error: data => {
        console.error('there was an error with the get request');
      }
    });

  }


  render() {
    return (
      <div className="App">
     
      <Header /> 
      <svg >
      {this.state.data.map(flavor => <Chart  data={flavor}/>)}

      </svg>

      <EnterResponse  getIceCream={this.getIceCream.bind(this)}/>
      <Clear refresh={this.getIceCream.bind(this)}/>
      </div>
      );
  }
};



export default App;

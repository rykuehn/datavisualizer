import React, { Component } from 'react';
import Header from './Header';
import Chart from './Chart';
import EnterResponse from './EnterResponse';
import $ from 'jquery';

import './main.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
      {flavor : 'mint', count: 0},
      {flavor: 'strawberry', count: 0},
      {flavor : 'vanilla', count: 0}
      ]
    }
  }

  componentWillMount() {
    $.ajax({
      url: '/',
      type: 'GET',
      success: data => {
        console.log('get success', data)
      },
      error: data => {
        console.error('there was an error with the get request');
      }
    });
  }




  updateCount () {
    this.setState({count: this.state.count + 1});
  }

  handleSubmit (message) {
    // post request
  }

  // $.ajax({
  //   url: app.server,
  //   type: 'GET',
  //   data: { order: '-createdAt' },
  //   contentType: 'application/json',


  render() {
    return (
      <div className="App">
      <Header /> 
      <svg>
      {this.state.data.map(flavor => <Chart updateFunc={this.updateCount.bind(this)} data={flavor}/>)}
      </svg>

      <EnterResponse submit={this.handleSubmit.bind(this)}/>
      </div>
      );
  }
};



export default App;

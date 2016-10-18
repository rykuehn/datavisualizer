import React, { Component } from 'react';
import Header from './Header';
import Chart from './Chart';
import EnterResponse from './EnterResponse';


import './main.css';

var sampleData = [
  {flavor : 'mint', count: 0},
  {flavor: 'strawberry', count: 0},
  {flavor : 'vanilla', count: 0}
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: sampleData
    }
    console.log(this.state.data[0].mint)
  }

  updateCount () {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="App">
        <Header /> 
        <svg>
        {this.state.data.map(flavor => <Chart updateFunc={this.updateCount.bind(this)} data={flavor}/>)}
        </svg>
        
        <EnterResponse />
      </div>
    );
  }
};



export default App;

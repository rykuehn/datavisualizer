import React, {Component} from 'react';
import d3 from 'd3';

var data = [];

class Chart extends Component {
  constructor(props){
    super(props);
    
    var flavor = props.data.flavor;
    var count = props.data.count;

  }

  render() {
    var randomX = (Math.random() * screen.width) - 100;
    var randomY = (Math.random() * 325)
    
    return (
      <circle cx= {randomX} cy={randomY} r='22' fill='blue' stroke ='gray' strokeWidth='2' />
     
    )
  }
};

export default Chart;
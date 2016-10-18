import React, {Component} from 'react';
import d3 from 'd3';


class Chart extends Component {
  constructor(props){
    super(props);
    var flavor = this.props.data.flavor;
    var count = this.props.data.count;
   console.log(count);
  }

  render() {
    var randomX = (Math.random() * screen.width) - 100;
    var randomY = (Math.random() * 325)

  
    return (
      <circle cx={randomX} cy={randomY} r={this.props.data.count * 40} fill='blue' stroke='gray' strokeWidth='2' />
     
    )
  }
};

export default Chart;
import React, {Component} from 'react';
import d3 from 'd3';


class Chart extends Component {
  constructor(props){
    super(props);
   
  }

  render() {
    var randomX = Math.random() * 450
    var randomY = Math.random() * 250

  
    return (
        <circle cx={randomX} cy={randomY} r={this.props.data.count * 10} attribute={this.props.data.flavor} fill='rgba(140, 227, 166, .6)' />  
    )
  }
};

export default Chart;



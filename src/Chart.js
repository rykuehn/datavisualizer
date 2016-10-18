import React, {Component} from 'react';
import d3 from 'd3';


class Chart extends Component {
  constructor(props){
    super(props);
   
  }

  randomColor () {
    //generate a random rgb color
  }

  render() {
    var randomX = Math.random() * 450
    var randomY = Math.random() * 250

  
    return (
        <circle cx={randomX} cy={randomY} r={this.props.data.count * 10} fill='#3F3FBF' opacity='.7'/>  
    )
  }
};

export default Chart;



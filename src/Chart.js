import React, {Component} from 'react';
import d3 from 'd3';


class Chart extends Component {
  constructor(props){
    super(props);

    this.state = {
      hover: false,
      randomX: null,
      randomY: null,
      

    }
   
  }
  componentWillMount(){
    this.setState({randomX: Math.random() * 600});
    this.setState({randomY: Math.random() * 350});
  }

  mouseOver(event) {
    event.preventDefault();
    this.setState({hover:true});
   
  }

  mouseOut() {
    this.setState({hover:false});
  }

  render() {
    return (

        <g>
          <circle cx={this.state.randomX} cy={this.state.randomY} onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)} r={this.props.data.count * 30} fill='#3F3FBF' opacity='.7'/> 
          <text x={this.state.randomX} y={this.state.randomY} fontFamily="sans-serif" fontSize="20px" textAnchor="middle" fill="white">{this.props.data.flavor}</text> 
          <text x={this.state.randomX} y={this.state.randomY} style={this.state.hover ? {} : {display: 'none'} } fontFamily="sans-serif" textAnchor="hanging" fontSize="90px" fill="orange">{this.props.data.count}</text> 
        </g>
    )
  }
};

export default Chart;



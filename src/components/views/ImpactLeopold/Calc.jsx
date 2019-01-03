import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
//https://reactjsexample.com/slider-ui-component-for-react/

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default class Calc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      magnitud: 0,
      importancia: 0
    }
  }

  handleChange=(value)=>{
    this.setState({magnitud:value})
    console.log(value)
  }

  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
        <h3>Importancia</h3>
          <Slider min={0} max={10} defaultValue={5} handle={handle} step={0.1} onAfterChange={this.handleChange}/>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
        <h3>Magnitud</h3>
          <Slider min={0} max={10} defaultValue={5} handle={handle} step={0.1}/>
        </GridItem>
      </GridContainer>
    )
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";



import Typography from '@material-ui/core/Typography';
import GridItem from "../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";


import Slider from '@material-ui/lab/Slider';
import ReactTable from "react-table";
import "react-table/react-table.css"
import Forms from './RegularForms'
import "../../../css/projectStyle.css"



//Dev react tables
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import Calc from './Calc';



export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 50,
      suma:0,
      numeroA:0,
      numeroB:0,
      magnitud:0,
      importancia:0,
      row:10, 
      data: []
    };
  //   this.handleNumAChange = this.handleNumAChange.bind(this)
  // this.handleNumBChange = this.handleNumBChange.bind(this)
  }

  

componentDidMount(){
  console.log("numeroA: ",this.state.numeroA)

}

sumatotal=(a,b)=>{
  let x  = a+b;
  console.log("ambos:",a,b)
  this.setState({suma:x})

}

  handleNumAChange=(e)=>{
    let a = Number(e.target.value)
    //console.log("B:",this.state.numeroB)
    this.setState({numeroA:a})
        console.log("A:",this.state.numeroA)

    this.sumatotal(a,this.state.numeroB)

    // this.setState({suma:x})
  }
  handleNumBChange=(e)=>{
    let b = Number(e.target.value)
    // let x = this.state.numeroA+b;
    // this.setState({suma:x})
     this.setState({numeroB:b})
     this.sumatotal(this.state.numeroA,b)

     console.log("B:",this.state.numeroB)

  }

  DeleteButton=(index)=>{

    this.setState({
    data: this.state.data.filter((_, i) => i !== index)
  });

    //  let{data}=this.state
    //  console.log("index",data)

    // let datos = data.splice(index,1)
    // console.log("data splice",data)

    // this.setState({
    //   data:data.splice(index,1)
    // })
  }

 ClickButton =(e)=>{

  let{data}=this.state
   let x = this.state.numeroA+this.state.numeroB;
   let arr = {name:"Remocion de tierra", factor:"vegetacion", magnitud:10, importancia:8}
   data.push(arr)
   this.setState({suma:x})
   this.setState(data)
  //  console.log(data)

 }

  render() {
    let { row, suma, data, columns, magnitud} = this.state;
    return (
      <Paper>
        <Paper>
        <TextField
        onChange = {this.handleNumAChange}
        /> 
        +
        <TextField
        onChange={this.handleNumBChange}
        />
        <Button color="rose" onClick={this.ClickButton}>Add </Button>
        <Typography>{suma}</Typography>
        <Forms/>
        </Paper>
        <Card>
          <CardBody>
        <GridItem
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                <Button variant="contained" color="secondary"  onClick={this.ClickButton}>Add</Button>
                </GridItem>
                </CardBody>
                </Card>

        <ReactTable
        className="ReactTable"
        data={data}
        columns= {[
          { Header: 'Environmental Aspect', accessor: 'name' },
          { Header: 'Environmental Factor', accessor: 'factor' },
          {Header: 'Result', accessor:'res',
          Cell: row => (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#dadada',
                borderRadius: '2px'
              }}
            >
              <Button onClick={()=>this.DeleteButton(row.index)}>del</Button>
            </div>
          )
        }
        ]}
        defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                {console.log("D",data)}
                <Calc/>
                </em>
                <br />
                
              </div>
            );
          }}
        />
        
      </Paper>
    );
  }
}



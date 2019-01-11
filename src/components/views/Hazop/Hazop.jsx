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
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Select from 'react-select'
import CreatableSelect from 'react-select/lib/Creatable';




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
import TextField from '@material-ui/core/TextField';
import Calc from './Calc';
import Axios from 'axios';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


const currencies = [
  {
    value: 'null',
    label: '',
  },
  {
    value: 'No',
    label: 'No',
  },
  {
    value: 'Mas',
    label: 'Mas',
  },
  {
    value: 'Menos',
    label: 'Menos',
  },
  {
    value: 'Reversa',
    label: 'Reversa',
  },
];

const colourOptions = [
  { value: 'ocean', label: 'Oceannn', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class Hazop extends React.PureComponent {
  constructor(props) {
    super(props);
    // axios.get('/api/users/currentuser')
    // .then(({data})=>console.log("sdfadf",data))

    this.state = {
      value: 50,
      suma: 0,
      numeroA: 0,
      numeroB: 0,
      magnitud: 0,
      importancia: 0,
      row: 10,
      data: [],
      isClearable: true,
      isDisabled: false,
      isLoading: false,
      isRtl: false,
      isSearchable: true,
    };
    //   this.handleNumAChange = this.handleNumAChange.bind(this)
    // this.handleNumBChange = this.handleNumBChange.bind(this)
  }



  sumatotal = (a, b) => {
    let x = a + b;
    console.log("ambos:", a, b)
    this.setState({ suma: x })

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleNumAChange = (e) => {
    let a = Number(e.target.value)
    //console.log("B:",this.state.numeroB)
    this.setState({ numeroA: a })
    console.log("A:", this.state.numeroA)

    this.sumatotal(a, this.state.numeroB)

    // this.setState({suma:x})
  }
  handleNumBChange = (e) => {
    let b = Number(e.target.value)
    // let x = this.state.numeroA+b;
    // this.setState({suma:x})
    this.setState({ numeroB: b })
    this.sumatotal(this.state.numeroA, b)

    console.log("B:", this.state.numeroB)

  }

  DeleteButton = (index) => {

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

  ClickButton = (e) => {

    let { data } = this.state
    let x = this.state.numeroA + this.state.numeroB;
    let arr = { name: "Remocion de tierra", label: "vegetacion", magnitud: 10, importancia: 8 }
    data.push(arr)
    this.setState({ suma: x })
    this.setState(data)
     console.log(data)

  }

  render() {
    let { row, suma, data, columns, magnitud } = this.state;
    const { classes } = this.props;


    return (
      <Paper>
        <Card>
          <CardBody>
            <GridItem
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            <h1></h1>
              <Button variant="contained" color="secondary" onClick={this.ClickButton}>Add</Button>

            </GridItem>
          </CardBody>

        </Card>



        

              <Select options={data} />

          
              <CreatableSelect
        isClearable
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={colourOptions}
      />



        <ReactTable
          className="ReactTable"
          data={data}
          columns={[
            { Header: 'Environmental Aspect', accessor: 'name' },
            { Header: 'Environmental Factor', accessor: 'factor' },
            {
              Header: 'Result', accessor: 'res',
              Cell: row => (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#dadada',
                    borderRadius: '2px'
                  }}
                >
                  <Button onClick={() => this.DeleteButton(row.index)}>del</Button>
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
                  {console.log("D", data)}
                  <Calc />
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

Hazop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hazop);

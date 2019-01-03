import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Gridui from '@material-ui/core/Grid';

//Dev react tables
import Paper from '@material-ui/core/Paper';
import {
  TreeDataState,
  CustomTreeData,
  EditingState
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
  TableEditRow,
  TableEditColumn
} from '@devexpress/dx-react-grid-material-ui';


const getChildRows = (row, rootRows) => (row ? row.items : rootRows);
console.log("que",getChildRows)


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      tableColumnExtensions: [
        { columnName: 'name', width: 300 },
      ],
      data: [
        {name:"332", car:"bmw"},
        {name:"paco",car:"volvo", items:[{car:"que quto"}]},
        
      ],
    };
  }

  render() {
    const { data, columns, tableColumnExtensions } = this.state;
    return (
      <Paper>
        <Grid
          rows={data}
          columns={columns}
        >
        <EditingState
          onCommitChanges={this.onCommitChanges}
        />
          <TreeDataState />
          <CustomTreeData
            getChildRows={getChildRows}
          />
          <Table
            columnExtensions={tableColumnExtensions}
          />
          <TableHeaderRow />
          <TableEditRow/>
          <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
          />
          <TableTreeColumn
            for="name"
          />
                    {console.log("guat:",getChildRows)}

        </Grid>
      </Paper>
    );
  }
}

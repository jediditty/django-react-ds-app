import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: '1em',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(url, field1, field2, field3, field4, field5, field6) {
  id += 1;
  return { id, url, field1, field2, field3, field4, field5, field6 };
}

function SimpleTable(props) {
  const { classes } = props;
  const [rows, setRows] = useState([
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]);

  useEffect(() => {
    axios.get('http://localhost:8000/data/datatobe/')
      .then(function (response) {
        // handle success
        console.log(response.data);
        let id = 0;
        if (response.data.length !== rows.length) {
          const newRows = response.data.map(data => {
            id += 1;
            data.id = id;
            return data;
          });
          setRows(newRows)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Url</TableCell>
            <TableCell align="right">field_1_int</TableCell>
            <TableCell align="right">field_2_char</TableCell>
            <TableCell align="right">field_3_float</TableCell>
            <TableCell align="right">field_4_float</TableCell>
            <TableCell align="right">field_5_char</TableCell>
            <TableCell align="right">field_6_int</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <a href={row.url} target='_blank'>Raw</a>
              </TableCell>
              <TableCell align="right">{row.field_1_int}</TableCell>
              <TableCell align="right">{row.field_2_char}</TableCell>
              <TableCell align="right">{row.field_3_float}</TableCell>
              <TableCell align="right">{row.field_4_float}</TableCell>
              <TableCell align="right">{row.field_5_char}</TableCell>
              <TableCell align="right">{row.field_6_int}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
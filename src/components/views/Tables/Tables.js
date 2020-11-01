import React from 'react';
import styles from './Tables.module.scss';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, table1, table2, table3) {
  return { name, table1, table2, table3 };
}

const rows = [
  createData('12:00 AM'),
  createData('12:30 AM'),
  createData('1:00 PM'),
  createData('1:30 PM'),
  createData('2:00 PM'),
  createData('2:30 PM'),
  createData('3:00 PM'),
  createData('3:30 PM'),
  createData('4:00 PM'),
  createData('4:30 PM'),
  createData('5:00 PM', '', 837),
  createData('5:30 PM'),
  createData('6:00 PM'),
  createData('6:30 PM'),
  createData('7:00 PM'),
  createData('7:30 PM',156),
  createData('8:00 PM'),
  createData('8:30 PM'),
  createData('9:00 PM'),
  createData('9:30 PM', '', '', 122),
  createData('10:00 PM', '', '', 122),
  createData('10:30 PM'),
  createData('11:00 PM'),
  createData('11:30 PM'),
];

const Tables = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={styles.component}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around" className={styles.component}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Table 1</TableCell>
              <TableCell align="left">Table 2</TableCell>
              <TableCell align="left">Table 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                  {row.table1 && (
                    <Button
                      to={`${process.env.PUBLIC_URL}/table/booking/${row.table1}`}
                    >
                      {row.table1}
                    </Button>
                  )}
                </TableCell>
                <TableCell align="left">
                  {row.table2 && (
                    <Button
                      to={`${process.env.PUBLIC_URL}/table/booking/${row.table2}`}
                    >
                      {row.table2}
                    </Button>
                  )}
                </TableCell>
                <TableCell align="left">
                  {row.table3 && (
                    <Button
                      to={`${process.env.PUBLIC_URL}/table/booking/${row.table3}`}
                    >
                      {row.table3}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Tables;

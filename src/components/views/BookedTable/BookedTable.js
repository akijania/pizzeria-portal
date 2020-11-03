import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTable.module.scss';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const booking = {
  date: '2020-11-04',
  hour: '15:30',
  table: 1,
  duration: '2',
  ppl: '2',
  starters: {
    water: true,
    bread: false,
  },
  phone: '123456789',
  address: 'Armii Krajowej 1',
};

const BookedTable = ({ bookingId}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(booking.date));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [hour, setHour] = React.useState('');

  const handleChangeHour = (event) => {
    setHour(event.target.value);
  };
  const [people, setPeople] = React.useState('');

  const handleChangePeople = (event) => {
    setPeople(event.target.value);
  };
  const [duration, setDuration] = React.useState('');

  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };
  const [table, setTable] = React.useState('');

  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedBread: false,
    checkedWater: false,
  });

  const handleChangeStarters = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Paper className={styles.component}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="center" className={styles.component}>
          <h2 className={styles.title}>Booking number {bookingId}</h2>
          <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="left">{bookingId}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>date</TableCell>
                  <TableCell align="left">          
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hour</TableCell>
                  <TableCell align="left">  
                    <FormControl>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={hour}
                        onChange={handleChangeHour}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className={styles.input}
                      >
                        <MenuItem value="">
                          <em>{booking.hour}</em>
                        </MenuItem>
                        <MenuItem value={1}>12:00</MenuItem>
                        <MenuItem value={2}>12:30</MenuItem>
                        <MenuItem value={3}>13:00</MenuItem>
                        <MenuItem value={4}>13:30</MenuItem>
                        <MenuItem value={5}>14:00</MenuItem>
                        <MenuItem value={6}>14:30</MenuItem>
                        <MenuItem value={7}>15:00</MenuItem>
                        <MenuItem value={8}>15:30</MenuItem>
                        <MenuItem value={9}>16:00</MenuItem>
                        <MenuItem value={10}>16:30</MenuItem>
                        <MenuItem value={11}>17:00</MenuItem>
                        <MenuItem value={12}>17:30</MenuItem>
                        <MenuItem value={13}>18:00</MenuItem>
                        <MenuItem value={14}>18:30</MenuItem>
                        <MenuItem value={15}>19:00</MenuItem>
                        <MenuItem value={16}>19:30</MenuItem>
                        <MenuItem value={17}>20:00</MenuItem>
                        <MenuItem value={18}>20:30</MenuItem>
                        <MenuItem value={17}>21:00</MenuItem>
                        <MenuItem value={18}>21:30</MenuItem>
                        <MenuItem value={17}>22:00</MenuItem>
                        <MenuItem value={18}>22:30</MenuItem>
                        <MenuItem value={17}>23:00</MenuItem>
                        <MenuItem value={18}>23:30</MenuItem>
                      </Select>
                    </FormControl></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>table</TableCell>
                  <TableCell align="left">          
                    <FormControl>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={table}
                        onChange={handleChangeTable}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className={styles.input}
                      >
                        <MenuItem value="">
                          <em>{booking.table}</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>duration</TableCell>
                  <TableCell align="left">         
                    <FormControl>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={duration}
                        onChange={handleChangeDuration}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className={styles.input}
                      >
                        <MenuItem value="">
                          <em>{booking.duration}</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                      </Select>
                    </FormControl></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>people</TableCell>
                  <TableCell align="left">
                    <FormControl>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={people}
                        onChange={handleChangePeople}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className={styles.input}
                      >
                        <MenuItem value="">
                          <em>{booking.ppl}</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>starters</TableCell>
                  <TableCell align="left">          
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={booking.starters.bread}
                            onChange={handleChangeStarters}
                            name="checkedBread"
                          />
                        }
                        label="Bread"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={booking.starters.water}
                            onChange={handleChangeStarters}
                            name="checkedWater"
                          />
                        }
                        label="Water"
                      />
                    </FormGroup></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>phone</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="standard-basic"
                      label={booking.phone}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>address</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="standard-basic"
                      label={booking.address}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </MuiPickersUtilsProvider>
      <div className={styles.button}>
        <Button variant="contained" color="primary">
          Save changes
        </Button>
      </div>
    </Paper>
  );
};

BookedTable.propTypes = {
  bookingId: PropTypes.string,
};
export default BookedTable;

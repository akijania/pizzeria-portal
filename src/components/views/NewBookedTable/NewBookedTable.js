import React from 'react';
import styles from './NewBookedTable.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const NewBookedTable = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      <h2 className={styles.title}>New table booking</h2>
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
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">People</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={people}
              onChange={handleChangePeople}
            >
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
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Duration</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={duration}
              onChange={handleChangeDuration}
            >
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
        </Grid>
        <Grid container justify="space-around" className={styles.component}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">setTable</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={table}
              onChange={handleChangeTable}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedBread}
                  onChange={handleChangeStarters}
                  name="checkedBread"
                />
              }
              label="Bread"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedWater}
                  onChange={handleChangeStarters}
                  name="checkedWater"
                />
              }
              label="Water"
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Phone"
            />
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Address"
            />
          </FormGroup>
        </Grid>
      </MuiPickersUtilsProvider>
      <div className={styles.button}>
        <Button variant="contained" color="primary">
          Add booking
        </Button>
      </div>
    </Paper>
  );
};
export default NewBookedTable;

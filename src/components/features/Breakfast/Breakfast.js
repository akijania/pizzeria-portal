import React from 'react';
import PropTypes from 'prop-types';
import styles from './Breakfast.module.scss';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';

const Breakfast = ({ breakfast }) => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const [value, setValue] = React.useState('latte');

  const handleChangeOption = (event) => {
    setValue(event.target.value);
  };

  return (
    <Paper className={styles.component}>
      <Grid container justify="space-between" className={styles.component}>
        <h2 className={styles.title}>{breakfast.name}</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {breakfast.params.coffee.label}
          </FormLabel>
          <RadioGroup
            aria-label="coffee"
            name="coffee"
            value={value}
            onChange={handleChangeOption}
          >
            {Object.keys(breakfast.params.coffee.options).map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Amount
          </InputLabel>
          <Select
            className={styles.select}
            value={amount}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>1</em>
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
        <Button className={styles.button} variant="contained" color="primary">
          Add to cart
        </Button>
      </Grid>
    </Paper>
  );
};
Breakfast.propTypes = {
  breakfast: PropTypes.string,
};
export default Breakfast;

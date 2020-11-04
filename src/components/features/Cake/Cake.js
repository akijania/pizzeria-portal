import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cake.module.scss';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Cake = ({ cake }) => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <Paper className={styles.component}>
      <Grid container justify="space-between" className={styles.component}>
        <h2 className={styles.title}>{cake.name}</h2>
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
        <Button variant="contained" color="primary">
          Add to cart
        </Button>
      </Grid>
    </Paper>
  );
};
Cake.propTypes = {
  cake: PropTypes.string,
};
export default Cake;

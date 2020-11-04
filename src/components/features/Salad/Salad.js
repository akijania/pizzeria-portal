import React from 'react';
import PropTypes from 'prop-types';
import styles from './Salad.module.scss';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Salad = ({ salad }) => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChangeIngredients = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Paper className={styles.component}>
      <Grid container justify="space-between" className={styles.component}>
        <h2 className={styles.title}>{salad.name}</h2>
        <FormGroup>
          <FormLabel component="legend">
            {salad.params.ingredients.label}
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChangeIngredients}
                name="checkedA"
              />
            }
            label={salad.params.ingredients.options.cucumber.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeIngredients}
                name="checkedB"
              />
            }
            label={salad.params.ingredients.options.tomatoes.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                onChange={handleChangeIngredients}
                name="checkedC"
              />
            }
            label={salad.params.ingredients.options.olives.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedD}
                onChange={handleChangeIngredients}
                name="checkedD"
              />
            }
            label={salad.params.ingredients.options.feta.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedE}
                onChange={handleChangeIngredients}
                name="checkedE"
              />
            }
            label={salad.params.ingredients.options.cheese.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChangeIngredients}
                name="checkedF"
              />
            }
            label={salad.params.ingredients.options.herbs.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedG}
                onChange={handleChangeIngredients}
                name="checkedG"
              />
            }
            label={salad.params.ingredients.options.pepper.label}
          />
        </FormGroup>
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
Salad.propTypes = {
  salad: PropTypes.string,
};
export default Salad;

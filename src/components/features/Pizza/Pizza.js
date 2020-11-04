import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pizza.module.scss';
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
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';

const Pizza = ({ pizza }) => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const [value, setValue] = React.useState('tomato');

  const handleChangeOption = (event) => {
    setValue(event.target.value);
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
        <h2 className={styles.title}>{pizza.name}</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">{pizza.params.sauce.label}</FormLabel>
          <RadioGroup
            aria-label="sauce"
            name="sauce"
            value={value}
            onChange={handleChangeOption}
          >
            {Object.keys(pizza.params.sauce.options).map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormLabel component="legend">
            {pizza.params.toppings.label}
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChangeIngredients}
                name="checkedA"
              />
            }
            label={pizza.params.toppings.options.olives.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeIngredients}
                name="checkedB"
              />
            }
            label={pizza.params.toppings.options.redPeppers.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                onChange={handleChangeIngredients}
                name="checkedC"
              />
            }
            label={pizza.params.toppings.options.greenPeppers.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedD}
                onChange={handleChangeIngredients}
                name="checkedD"
              />
            }
            label={pizza.params.toppings.options.mushrooms.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedE}
                onChange={handleChangeIngredients}
                name="checkedE"
              />
            }
            label={pizza.params.toppings.options.basil.label}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChangeIngredients}
                name="checkedF"
              />
            }
            label={pizza.params.toppings.options.salami.label}
          />
        </FormGroup>
        <FormControl>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            {pizza.params.crust.label}
          </InputLabel>
          <Select
            className={styles.select}
            value={amount}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>{pizza.params.crust.options.standard.label}</em>
            </MenuItem>
            <MenuItem value={1}>
              {pizza.params.crust.options.standard.label}
            </MenuItem>
            <MenuItem value={2}>
              {pizza.params.crust.options.thin.label}
            </MenuItem>
            <MenuItem value={3}>
              {pizza.params.crust.options.thick.label}
            </MenuItem>
            <MenuItem value={4}>
              {pizza.params.crust.options.cheese.label}
            </MenuItem>
            <MenuItem value={5}>
              {pizza.params.crust.options.wholewheat.label}
            </MenuItem>
            <MenuItem value={6}>
              {pizza.params.crust.options.gluten.label}
            </MenuItem>
          </Select>
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
Pizza.propTypes = {
  pizza: PropTypes.string,
};
export default Pizza;

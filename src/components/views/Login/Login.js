import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Paper className={styles.component}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Login"
            placeholder="Login"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <div className={styles.button}>
          <Button variant="contained" color="primary">
          Log in
          </Button>
        </div>
      </form>
    </Paper>
  );
};
export default Login;

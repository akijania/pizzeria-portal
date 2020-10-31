import React from 'react';
import styles from './WaiterOrder.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const WaiterOrder = () => (
  <div className={styles.component}>
    <h2>Orders:</h2>
    <Button className={styles.link} variant="contained" color='primary' component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/now`} activeClassName='active'>New order</Button>
    <Button className={styles.link} variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} activeClassName='active'>123abc</Button>
  </div>
);  
export default WaiterOrder;
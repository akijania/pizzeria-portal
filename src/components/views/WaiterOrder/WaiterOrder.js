import React from 'react';
import styles from './WaiterOrder.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const orders = [{ id: '123abc' }, { id: '124abc' }, { id: '125abc' }];

const WaiterOrder = () => (
  <Paper className={styles.component}>
    <h2>Orders:</h2>
    <Button className={styles.link} variant="contained" color='primary' component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/now`} activeClassName='active'>New order</Button>
    {orders.length ? (
      orders.map((order) => (
        <Button
          key={order.id}
          className={styles.link}
          variant="contained"
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/event/${order.id}`}
          activeClassName="active"
        >
          {order.id}
        </Button>
      ))
    ) : (
      <p>There are no orders today</p>
    )}
  </Paper>
);  
export default WaiterOrder;
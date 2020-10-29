import React from 'react';
import styles from './WaiterOrder.module.scss';
import {Link} from 'react-router-dom';

const WaiterOrder = () => (
  <div className={styles.component}>
    <h2>WaiterOrder view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/now`} activeClassName='active'>New booked table</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} activeClassName='active'>123abc</Link>
  </div>
);  
export default WaiterOrder;
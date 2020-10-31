import React from 'react';
import styles from './TablesBooking.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TablesBooking = () => (
  <div className={styles.component}>
    <h2>Tables Booking:</h2>
    <Button className={styles.link} variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booked table</Button>
    <Button className={styles.link} variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName='active'>123abc</Button>
    <Button className={styles.link} variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/456abc`} activeClassName='active'>456abc</Button>
  </div>
);  
export default TablesBooking;
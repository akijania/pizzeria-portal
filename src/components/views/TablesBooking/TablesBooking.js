import React from 'react';
import styles from './TablesBooking.module.scss';
import {Link} from 'react-router-dom';

const TablesBooking = () => (
  <div className={styles.component}>
    <h2>TablesBooking view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booked table</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName='active'>123abc</Link>
  </div>
);  
export default TablesBooking;
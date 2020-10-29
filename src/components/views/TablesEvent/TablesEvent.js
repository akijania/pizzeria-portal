import React from 'react';
import styles from './TablesEvent.module.scss';
import {Link} from 'react-router-dom';

const TablesEvent = () => (
  <div className={styles.component}>
    <h2>TablesEvent view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`} activeClassName='active'>New booked event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/123abc`} activeClassName='active'>123abc</Link>
  </div>
);  
export default TablesEvent;
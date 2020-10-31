import React from 'react';
import styles from './TablesEvent.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TablesEvent = () => (
  <div className={styles.component}>
    <h2>Events:</h2>
    <Button className={styles.link} variant="contained" color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`} activeClassName='active'>New event</Button>
    <Button className={styles.link} variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/event/123abc`} activeClassName='active'>123abc</Button>
  </div>
);  
export default TablesEvent;
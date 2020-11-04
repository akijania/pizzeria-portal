import React from 'react';
import styles from './TablesBooking.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const bookings = [{ id: '1234' }, { id: '2763' }, { id: '2742' }];

const TablesBooking = () => (
  <Paper className={styles.component}>
    <h2 className={styles.title}>Tables Booking:</h2>
    <Button className={styles.link} variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booked table</Button>
    {bookings.length ? (
      bookings.map((booking) => (
        <Button
          key={booking.id}
          className={styles.link}
          variant="contained"
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/${booking.id}`}
          activeClassName="active"
        >
          {booking.id}
        </Button>
      ))
    ) : (
      <p>There are no tables booking today</p>
    )}
  </Paper>
);  
export default TablesBooking;
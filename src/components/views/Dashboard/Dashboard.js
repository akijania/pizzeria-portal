import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const orders = [{ id: '1234' }, { id: '2763' }, { id: '2742' }];
const bookings = [{ id: '1234' }, { id: '2763' }, { id: '2742' }];
const events = [{ id: '125abc' }, { id: '2763dhf' }, { id: '274dkd' }];

const Dashboard = () => (
  <Paper className={styles.component}>
    <h2>Number of orders: {orders.length}</h2>
    <Grid container spacing={3}>
      <Grid item xs={6} className={styles.component}>
        <h2>Tables Booking:</h2>
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
      </Grid>
      <Grid item xs={6} className={styles.component}>
        <h2>Events:</h2>
        {events.length ? (
          events.map((event) => (
            <Button
              key={event.id}
              className={styles.link}
              variant="contained"
              component={Link}
              to={`${process.env.PUBLIC_URL}/tables/event/${event.id}`}
              activeClassName="active"
            >
              {event.id}
            </Button>
          ))
        ) : (
          <p>There are no events today</p>
        )}
      </Grid>
    </Grid>
  </Paper>
);
export default Dashboard;

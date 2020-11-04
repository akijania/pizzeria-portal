import React from 'react';
import styles from './TablesEvent.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const events = [{ id: '125abc' }, { id: '2763dhf' }, { id: '274dkd' }];

const TablesEvent = () => (
  <Paper className={styles.component}>
    <h2 className={styles.title}>Events:</h2>
    <Button
      className={styles.link}
      variant="contained"
      color="primary"
      component={Link}
      to={`${process.env.PUBLIC_URL}/tables/event/new`}
      activeClassName="active"
    >
      New event
    </Button>
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
  </Paper>
);
export default TablesEvent;

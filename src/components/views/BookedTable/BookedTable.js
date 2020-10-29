import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTable.module.scss';

const BookedTable = ({bookingId}) => (
  <div className={styles.component}>
    <h2>{bookingId}</h2>
  </div>
);  
BookedTable.propTypes = {
  bookingId: PropTypes.string,
};
export default BookedTable;
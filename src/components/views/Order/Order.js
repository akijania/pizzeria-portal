import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({orderId}) => (
  <div className={styles.component}>
    <h2>{orderId}</h2>
  </div>
);  
Order.propTypes = {
  orderId: PropTypes.string,
};
export default Order;
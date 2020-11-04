import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import EditOrder from '../EditOrder/EditOrder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const products = [
  {
    id: 'cake',
    amount: 1,
  },
  {
    id: 'pizza',
    amount: 1,
    params: {
      sauce: {
        label: 'Sauce',
        options: {
          tomato: 'Tomato',
        },
      },
      toppings: {
        label: 'Toppings',
        options: {
          olives: 'Olives',
          redPeppers: 'Red peppers',
          greenPeppers: 'Green peppers',
          mushrooms: 'Mushrooms',
        },
      },
      crust: {
        label: 'pizza crust',
        options: {
          thick: 'thick',
        },
      },
    },
  },
  {
    id: 'salad',
    amount: 1,
    params: {
      ingredients: {
        label: 'Ingredients',
        options: {
          cucumber: 'Cucumber',
          tomatoes: 'Tomatoes',
          olives: 'Olives',
          cheese: 'Cheese',
          herbs: 'Fresh herbs',
        },
      },
    },
  },
];

const Order = ({ orderId }) => (
  <div className={styles.component}>
    <h2 className={styles.title}>Order nr {orderId} </h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>{orderId}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products === undefined
            ? ''
            : products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>amount: {product.amount}</TableCell>
                <TableCell>
                  {product.params === undefined
                    ? ''
                    : Object.values(product.params).map(
                      (value) =>
                        value.label +
                            ': ' +
                            Object.values(value.options).map(
                              (option) => ' ' + option
                            ) +
                            '  |  '
                    )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
    <div className={styles.edit}>
      <EditOrder />
    </div>
  </div>
);
Order.propTypes = {
  orderId: PropTypes.string,
};
export default Order;

import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const orders = [
  {
    products: [
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
    ],
    id: 1,
  },
  {
    id: '124abc',
    products: [
      {
        id: 'cake',
        amount: 1,
      },
    ],
  },
  {
    id: '125abc',
    products: [
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
    ],
  },
];

class Kitchen extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: 'primary' };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color === 'primary' ? 'secondary' : 'primary';
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Kitchen</h2>
        {orders.map((order) => (
          <Paper key={order.id} className={styles.component}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.products === undefined
                  ? ''
                  : order.products.map((product) => (
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
            <div className={styles.button}>
              <Button variant="contained" color={this.state.color} onClick={this.changeColor}>
          Done
              </Button>
            </div>
          </Paper>
        ))}
      </div>
    );}
    
}
export default Kitchen;

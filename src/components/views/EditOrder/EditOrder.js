import React from 'react';
import styles from './EditOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Cake from '../../features/Cake/Cake';
import Breakfast from '../../features/Breakfast/Breakfast';
import Pizza from '../../features/Pizza/Pizza';
import Salad from '../../features/Salad/Salad';
import Button from '@material-ui/core/Button';

const menu = {
  product: [
    {
      id: 'cake',
      class: 'small',
      name: 'Zio Stefano\'s Doughnut',
      price: 9,
    },
    {
      id: 'breakfast',
      class: 'small',
      name: 'Zia Giulia\'s Breakfast',
      price: 9,
      params: {
        coffee: {
          label: 'Coffee type',
          type: 'radios',
          options: {
            latte: {
              label: 'Latte',
              price: 1,
              default: true,
            },
            cappuccino: {
              label: 'Cappuccino',
              price: 1,
            },
            espresso: {
              label: 'Espresso',
              price: 1,
            },
            macchiato: {
              label: 'Macchiato ',
              price: 1,
            },
          },
        },
      },
    },
    {
      id: 'pizza',
      name: 'Nonna Alba\'s Pizza',
      price: 20,
      params: {
        sauce: {
          label: 'Sauce',
          type: 'radios',
          options: {
            tomato: {
              label: 'Tomato',
              price: 0,
              default: true,
            },
            cream: {
              label: 'Sour cream',
              price: 2,
            },
          },
        },
        toppings: {
          label: 'Toppings',
          type: 'checkboxes',
          options: {
            olives: {
              label: 'Olives',
              price: 2,
              default: true,
            },
            redPeppers: {
              label: 'Red peppers',
              price: 2,
              default: true,
            },
            greenPeppers: {
              label: 'Green peppers',
              price: 2,
              default: true,
            },
            mushrooms: {
              label: 'Mushrooms',
              price: 2,
              default: true,
            },
            basil: {
              label: 'Fresh basil',
              price: 2,
              default: true,
            },
            salami: {
              label: 'Salami',
              price: 3,
            },
          },
        },
        crust: {
          label: 'pizza crust',
          type: 'select',
          options: {
            standard: {
              label: 'standard',
              price: 0,
              default: true,
            },
            thin: {
              label: 'thin',
              price: 2,
            },
            thick: {
              label: 'thick',
              price: 2,
            },
            cheese: {
              label: 'cheese in edges',
              price: 5,
            },
            wholewheat: {
              label: 'wholewheat',
              price: 3,
            },
            gluten: {
              label: 'with extra gluten',
              price: 0,
            },
          },
        },
      },
    },
    {
      id: 'salad',
      name: 'Nonno Alberto\'s Salad',
      price: 9,
      params: {
        ingredients: {
          label: 'Ingredients',
          type: 'checkboxes',
          options: {
            cucumber: {
              label: 'Cucumber',
              price: 1,
              default: true,
            },
            tomatoes: {
              label: 'Tomatoes',
              price: 1,
              default: true,
            },
            olives: {
              label: 'Olives',
              price: 1,
              default: true,
            },
            feta: {
              label: 'Feta cheese',
              price: 1,
            },
            cheese: {
              label: 'Cheese',
              price: 1,
            },
            herbs: {
              label: 'Fresh herbs',
              price: 1,
              default: true,
            },
            pepper: {
              label: 'Black pepper',
              price: 1,
            },
          },
        },
      },
    },
  ],
};

const EditOrder = () => (
  <Paper className={styles.component}>
    <h2 className={styles.title}>Edit Order</h2>
    <Cake cake={menu.product[0]} />
    <Breakfast breakfast={menu.product[1]} />
    <Pizza pizza={menu.product[2]} />
    <Salad salad={menu.product[3]} />
    <div className={styles.button}>
      <Button variant="contained" color="primary">
        Edit order
      </Button>
    </div>
  </Paper>
);
export default EditOrder;

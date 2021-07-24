import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ShoppingContext from '../ShoppingContext';
import '../styles/CartItems.css';
import CartItems from './CartItems';

const addresses = ['123 JavaScript St', 'Oklahoma City', 'OK', '12345', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '10/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default class Review extends React.Component {
  static contextType = ShoppingContext;

  calculateSubtotal = () => {
    const shoppingCart = this.context.shoppingCart;
    let subtotal = 0;
    shoppingCart.forEach((cartItem) => {
      subtotal += parseFloat(cartItem.price);
    });
    return subtotal.toFixed(2);
  };

  calculateSalesTax = () => {
    let subtotal = this.calculateSubtotal();
    return (subtotal * 0.045).toFixed(2);
  };

  calculateTotal = () => {
    let subtotal = this.calculateSubtotal();
    let salesTax = this.calculateSalesTax();
    let total = parseFloat(subtotal) + parseFloat(salesTax);
    return parseFloat(total).toFixed(2);
  };

  render() {
    const { shoppingCart } = this.context;

    return (
      <React.Fragment>
        <Typography variant='h6' gutterBottom>
          Order summary
        </Typography>
        <div className='shopping-cart'>
        <div className='cart-items-container'>
          {shoppingCart.map((cartItem, idx) => {
            return (
              <CartItems
                key={idx}
                cartItem={cartItem}
                pathname={'/shopping-cart/checkout'}
              />
            );
          })}
        </div>
        </div>
        <section>
          <p>Subtotal: ${this.calculateSubtotal()}</p>
          <p>Shipping: FREE</p>
          <p>Taxes: ${this.calculateSalesTax()}</p>
          <p>Total: ${this.calculateTotal()} </p>
        </section>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom className={useStyles.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(', ')}</Typography>
          </Grid>
          <Grid item container direction='column' xs={12} sm={6}>
            <Typography variant='h6' gutterBottom className={useStyles.title}>
              Payment details
            </Typography>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

import React from 'react';
import ShoppingContext from '../ShoppingContext';
import '../styles/CartItems.css';
import CartItems from './CartItems';

const addresses = ['123 JavaScript St', 'Oklahoma City', 'OK', '12345', 'USA'];
const payments = [
  { name: 'Card type:', detail: 'Visa' },
  { name: 'Card holder:', detail: 'John Smith' },
  { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiration date:', detail: '10/2024' },
];
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
      <div>
        <h2>
          Order summary
        </h2>
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
        <div>
          <div>
            <h3>
              <u>Shipping</u>
            </h3>
            <p>John Smith</p>
            <p>{addresses.join(', ')}</p>
          </div>
          <div>
            <h3>
              <u>Payment details</u>
            </h3>
            <div>
              {payments.map((payment) => (
                <div key={payment.name}>
                  <div>
                    <p><strong>{payment.name}</strong>{'  '}{payment.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

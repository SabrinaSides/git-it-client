import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import CartItems from './CartItems';
import '../styles/ShoppingCart.css';

class ShoppingCart extends Component {
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
        <header className='banner'>
          <h1>Shopping Cart</h1>
        </header>

        <button
          className='button back-btn'
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
        {this.context.shoppingCart.length > 0 ? (
          <div>
          <div className='shopping-cart'>
            <div className='cart-items-container'>
              {shoppingCart.map((cartItem, idx) => {
                return (
                  <CartItems
                    key={idx}
                    cartItem={cartItem}
                    pathname={this.props.location.pathname}
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
              <button
                className='button'
                onClick={() =>
                  this.props.history.push('/shopping-cart/checkout')
                }
              >
                Check Out
              </button>
            </section>
          </div>
          
        ) : (
          <h2>No items in your cart...get to shopping!</h2>
        )}
      </div>
    );
  }
}

export default ShoppingCart;

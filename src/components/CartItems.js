import React, { Component } from 'react';
import '../styles/CartItems.css';
import ShoppingContext from '../ShoppingContext';

class CartItems extends Component {
    static contextType = ShoppingContext


    handleRemoveFromCart = (cartItemId) => {
        this.context.removeFromCart(cartItemId)
      }

  render() {
    const { cartItem } = this.props;
    return (
      <section className='cart-item'>
        <div>
          <img
            src={cartItem.img}
            alt={`${cartItem.title}`}
            className='cart-img'
          />
        </div>
        <div className='cart-details'>
          <p><strong>{cartItem.title}</strong></p>
          <p>Size: {cartItem.size}</p>
          {/* <input type='button' value='-'/>
          <input
            type='number'
            step='1'
            min='1'
            max=''
            value='1'
            title='Qty'
            className=''
            size='4'
            pattern=''
            inputMode=''
          />
          <input type='button' value='+'/> */}
          <p>Price: ${cartItem.price}</p>
          <button onClick={event => this.handleRemoveFromCart(cartItem.cartItemId)}>Remove</button>
        </div>
      </section>
    );
  }
}

export default CartItems;

import React, { Component } from 'react';
import '../styles/CartItems.css';

class CartItems extends Component {
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
          <p>Size, color</p>
          <input type='button' value='-' className='minus' />
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
            inputmode=''
          />
          <input type='button' value='+' className='plus' />
          <p>Price: {cartItem.price}</p>
          <button>Remove</button>
        </div>
      </section>
    );
  }
}

export default CartItems;

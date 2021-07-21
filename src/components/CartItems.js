import React, { Component } from 'react';
import config from '../config'
import '../styles/CartItems.css';
import ShoppingContext from '../ShoppingContext';

class CartItems extends Component {
    static contextType = ShoppingContext

    static defaultProps = {
      cartItem: []
    }

    handleRemoveFromCart = (cartItemId) => {
        const url = `${config.API_ENDPOINT}/shoppingCart/${cartItemId}`
        const options = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        }

        fetch(url, options)
          .then(() => {
            this.context.fetchData()
          })
      }

  render() {
    const { cartItem } = this.props;
    return (
      <section className='cart-item'>
        <div>
          <img
            src={cartItem.img}
            alt={`${cartItem.productname}`}
            className='cart-img'
          />
        </div>
        <div className='cart-details'>
          <p><strong>{cartItem.productname}</strong></p>
          {cartItem.category === 'tshirts' && <p>Size: {cartItem.size}</p>}
          <p>Price: ${cartItem.price}</p>
          {this.props.pathname === '/shopping-cart/checkout' ? <div></div> :
          <button className='button' onClick={event => this.handleRemoveFromCart(cartItem.id)}>Remove</button>}
        </div>
      </section>
    );
  }
}

export default CartItems;

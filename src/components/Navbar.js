import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import '../styles/Navbar.css';

class Navbar extends Component {
  static contextType = ShoppingContext;

  render() {
    const { shoppingCart } = this.context;
    let cartCount = shoppingCart.length;

    return (
      <div className='nav-bar'>
        <div className='icons'>
          {/* <div>[BurgerMenu]</div> */}
          <h2 onClick={() => this.props.history.push('/shop')}>Git It</h2>
          <div onClick={() => this.props.history.push('/shopping-cart')}>
            Cart[{cartCount}]
          </div>
        </div>
        {/* <form className='icons'>
          <label htmlFor='product-search'>[Search icon]:</label>
          <input
            type='text'
            id='product-search'
            name='product-search'
            placeholder='Search'
          />
          <br />
          <input type='submit' value='Submit' />
        </form> */}
      </div>
    );
  }
}

export default Navbar;

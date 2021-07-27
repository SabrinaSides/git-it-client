import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import '../styles/Navbar.css';

class Navbar extends Component {
  static contextType = ShoppingContext;

  static defaultProps = {
    location: {
      pathname: '',
    },
  };

  render() {
    const { shoppingCart } = this.context;
    let cartCount = shoppingCart.length;

    return (
      <div className='navbar'>
        <div className='navbar-content'>
          <div>
            <h2
              onClick={() => this.props.history.push('/shop')}
              className='link'
            >
              <MonetizationOnIcon />
              Git It
            </h2>
          </div>
          {this.props.location.pathname !== '/shopping-cart/checkout' ? (
            <div
              onClick={() => this.props.history.push('/shopping-cart')}
              className='link'
            >
              <div className='shopping-cart-icon'>
              <ShoppingCartIcon />
                <div>{cartCount}</div>          
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;

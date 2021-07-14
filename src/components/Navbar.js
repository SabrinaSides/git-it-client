import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='icons'>
          <div>[BurgerMenu]</div>
          <p onClick={() => this.props.history.push('/shop')}>
            <strong>Git It</strong>
          </p>
          <div onClick={() => this.props.history.push('/shopping-cart')}>[Cart]</div>
        </div>
        <form className='icons'>
          <label htmlFor='product-search'>[Search icon]:</label>
          <input type='text' id='product-search' name='product-search' placeholder='Search'/>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Navbar;

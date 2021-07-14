import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className='nav-bar'>
            <li
            // onClick={() => this.props.history.push('/')}
            >
              [Cart Symbol]
            </li>
            <li
            // onClick={() => this.props.history.push('/reports')}
            >
              GitIt
            </li>
            <li>[Hamburger Menu]</li>
          </ul>
        </div>
        <form>
          <label for='product-search'>Search:</label>
          <input type='text' id='product-search' name='product-search' />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Navbar;

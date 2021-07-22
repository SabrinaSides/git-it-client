import React, { Component } from 'react';
import tShirts from '../images/tshirt-stock.png';
import mug from '../images/mug-stock.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header className='banner'>
          <h1>Git It</h1>
          <h2>A Programmer's Shopping Paradise</h2>
        </header>

        <section onClick={() => this.props.history.push('/shop/tshirts')}>
          <h3 className='link'>Shop T-Shirts</h3>
          <img src={tShirts} alt='Rack of tshirts' className='home-img link' />
        </section>

        <section onClick={() => this.props.history.push('/shop/mugs')} >
          <h3 className='link'>Shop Mugs</h3>
          <img src={mug} alt='Coding-themed mug' className='home-img link' />
        </section>

        <section>
          <h3>About our Products:</h3>
          <ul>
            <li>Made in the USA</li>
            <li>Eco-conscious Production</li>
            <li>Designed by Programmers</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
import programmer from '../images/programmer.png'
import womanProgrammer from '../images/programmer-woman.png'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header className='banner'>
          <h1>Git It</h1>
          <h2>A Programmer's Shopping Paradise</h2>
        </header>
        <section>
            <h3>Wear Your Coding Nerdiness with Pride</h3>
          <p>Shop for coding related merch</p>
            <img src={programmer} alt='Programmer at desk' className='home-img' />
        </section>
        <section>
            <h3>Gifts for Family and Friends</h3>
          <p>Get the perfect gift for the programmer in your life</p>
          <img src={womanProgrammer} alt='Programmer at desk' className='home-img' />
        </section>
        <section>
            <h3>Look Great Even If You Don't Leave The House</h3>
          <p>Look great while writing great code</p>
        </section>
        <section>
            <h3>Start Shopping Now!</h3>
          <button className='button' onClick={() => this.props.history.push('/shop')}>Shop</button>
        </section>
      </div>
    );
  }
}

export default LandingPage;

import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Git It</h1>
          <h2>A Shop for Coding Merch</h2>
        </header>
        <section>
          <header>
            <h3>Wear Your Coding Nerdiness with Pride</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
          <p>Info about how GitIt sells coding related merch</p>
        </section>
        <section>
          <header>
            <h3>Gifts for Family and Friends</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of of coding tshirt</em>]
          </p>
          <p>Get the perfect gift for the programmer in your life</p>
        </section>
        <section>
          <header>
            <h3>Look Great Even If You Don't Leave The House</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of tshirt</em>]
          </p>
          <p>Variety of clever puns to choose from</p>
        </section>
        <section>
          <header>
            <h3>Start Shopping Now</h3>
          </header>
          <button className='button' onClick={() => this.props.history.push('/shop')}><span>Shop</span></button>
        </section>
      </div>
    );
  }
}

export default LandingPage;

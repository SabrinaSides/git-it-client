import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Git It</h1>
          <h2>Find What Feels Like You</h2>
          <p>
            [<em>Tshirt pic in background</em>]
          </p>
        </header>

        <h3>Shop The Products:</h3>
        <section>
          <h3 onClick={() => this.props.history.push('/shop/all')}>See all the t-shirts</h3>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
        </section>

        <section>
          <h3 onClick={() => this.props.history.push('/shop/men')}>See Men's t-shirts</h3>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
        </section>

        <section>
          <h3 onClick={() => this.props.history.push('/shop/women')}>See Women's t-shirts</h3>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
        </section>

        <section>
          About our Shirts: - icons with info on material - puns hand chosen by
          programmers - socially responsible production
        </section>
      </div>
    );
  }
}

export default HomePage;

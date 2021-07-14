import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div>
        <header className='banner'>
          <h1>Git It</h1>
          <h2>Find What Feels Like You</h2>
          <p>
            [<em>Tshirt pic in background</em>]
          </p>
        </header>

        <h3>Shop The Products:</h3>
        <section>
            {/*Need category to change in state on click */}
          <h3 onClick={() => this.props.history.push('/shop/tshirts')}>Shop T-Shirts</h3>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
        </section>

        <section>
          <h3 onClick={() => this.props.history.push('/shop/mugs')}>Shop Mugs</h3>
          <p>
            [<em>placeholder for screenshot of coding mug</em>]
          </p>
        </section>

        <section>
          <h3 onClick={() => this.props.history.push('/shop/stickers')}>Shop Stickers?</h3>
          <p>
            [<em>placeholder for screenshot of coding sticker</em>]
          </p>
        </section>

        <section>
          About our Products: - icons with info on material - puns hand chosen by
          programmers - socially responsible production
        </section>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Tshirt Product Name</h1>
          <p>
            [<em>placeholder for screenshot of tshirt</em>]
          </p>
        </header>

        <section>
          <p>
            [<em>Price</em>]
          </p>
          <form>
            <label for='size'>Size:</label>
            <select id='size' name='size'>
              <option value='x-small'>XS</option>
              <option value='small'>S</option>
              <option value='medium'>M</option>
              <option value='large'>L</option>
              <option value='x-large'>XL</option>
            </select>
          </form>
          <button>Add to Cart</button>
        </section>

        <section>Product Info:</section>

        <section>Reviews:</section>
      </div>
    );
  }
}

export default ProductPage;

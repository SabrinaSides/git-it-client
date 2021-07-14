import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';

//categories: all, men's, women's
class CategoryPage extends Component {
  static contextType = ShoppingContext;

  static defaultProps = {
    category: 'All'
  }

  render() {
    const {category} = this.context

    return (
      <div>
        <header>
          <h1>Git It</h1>
          <h2>{category} T-shirts</h2>
          <p>
            [<em>Tshirt pic in background</em>]
          </p>
        </header>

        <h3>Shop The Products:</h3>
        <section>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
          <p>T-shirt Title</p>
          <p>$0.00</p>
        </section>

        <section>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
          <p>T-shirt Title</p>
          <p>$0.00</p>
        </section>

        <section>
          <p>
            [<em>placeholder for screenshot of coding tshirt</em>]
          </p>
          <p>T-shirt Title</p>
          <p>$0.00</p>
        </section>
      </div>
    );
  }
}

export default CategoryPage;

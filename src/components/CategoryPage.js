import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import ProductPreview from './ProductPreview'

class CategoryPage extends Component {

  static contextType = ShoppingContext;

  static defaultProps = {
    location: {
      pathname: ''
    }
  }

  render() {

    const {products} = this.context

    const chosenCategory = products.filter( product => {
      return `/shop/${product.category}` === this.props.location.pathname
    })

    return (
      <div>
        <header className='banner'>
          <h1>{this.props.location.pathname === '/shop/tshirts' ? 'T-Shirts' : 'Mugs'}</h1>
        </header>

        <button className='button back-btn' onClick={() => this.props.history.goBack()}>Back</button>
        <h3>Shop The Products:</h3>
        {chosenCategory.map((product, idx) => {
        return (
          <ProductPreview product={product} key={idx} history={this.props.history}/>
        )
      })}
      </div>
    );
  }
}

export default CategoryPage;

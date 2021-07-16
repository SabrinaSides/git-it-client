import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import '../styles/ProductPreview.css'
class ProductPage extends Component {
  state = {
    chosenProduct: []
  }

  static contextType = ShoppingContext

  handleAddToCart = (product) => {
    this.context.addToCart(product)
    // console.log('added')
  }

  render() {
    const {products} = this.context

    let chosenProduct = products.find(product => {
        return `/shop/${product.category}/${product.title}` === this.props.location.pathname
    })

    // let productToCart = ..... chosenProduct + size

    return (
      <div>
        <header>
          <h1>{chosenProduct.title}</h1>
          <img src={chosenProduct.img} alt={`${chosenProduct.title}`} className='product-preview-img'/>
        </header>

        <section>
          <p>
            {chosenProduct.price}
          </p>
          <form>
            <label htmlFor='size'>Size:</label>
            <select id='size' name='size'>
              <option value='x-small'>XS</option>
              <option value='small'>S</option>
              <option value='medium'>M</option>
              <option value='large'>L</option>
              <option value='x-large'>XL</option>
            </select>
          </form>
          <button onClick={event => this.handleAddToCart(chosenProduct)}>Add to Cart</button>
        </section>

        <section>
          <p><strong>Product Info:</strong></p>
            <p>{chosenProduct.productInfo}</p>
          </section>

        <section>
        <p><strong>Reviews:</strong></p>
        </section>
      </div>
    )
  }
}

export default ProductPage;

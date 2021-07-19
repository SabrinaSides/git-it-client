import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import { v4 as uuidv4 } from 'uuid';
import '../styles/ProductPreview.css';
class ProductPage extends Component {
  state = {
    cartItemId: uuidv4(),
    title: '',
    category: '',
    price: '',
    searchTerms: [],
    img: null,
    productInfo: '',
    size: 'x-small',
  };

  static contextType = ShoppingContext;

  componentDidMount() {
    let chosenProduct = this.context.products.find((product) => {
      return (
        `/shop/${product.category}/${product.title}` ===
        this.props.location.pathname
      );
    });

    this.setState({
      title: chosenProduct.title,
      category: chosenProduct.category,
      price: chosenProduct.price,
      searchTerms: chosenProduct.searchTerms,
      img: chosenProduct.img,
      productInfo: chosenProduct.productInfo,
    });
  }

  handleAddToCart = () => {
    let product = this.state
    console.log(product)
    this.context.addToCart(product);
    //new cartId for every item added
    this.setState({
      cartItemId: uuidv4()
    })
  };

  render() {
    const { title, price, img, productInfo} = this.state;

    return (
      <div>
        <header>
          <h1>{title}</h1>
          <img src={img} alt={`${title}`} className='product-preview-img' />
        </header>

        <section>
          <p>${price}</p>
          <form
            onChange={(event) => this.setState({ size: event.target.value })}
          >
            <label htmlFor='size'>Size:</label>
            <select id='size' name='size'>
              <option value='x-small'>XS</option>
              <option value='small'>S</option>
              <option value='medium'>M</option>
              <option value='large'>L</option>
              <option value='x-large'>XL</option>
            </select>
          </form>
          <button onClick={(event) => this.handleAddToCart()}>
            Add to Cart
          </button>
        </section>

        <section>
          <p>
            <strong>Product Info:</strong>
          </p>
          <p>{productInfo}</p>
        </section>

        <section>
          <p>
            <strong>Reviews:</strong>
          </p>
        </section>
      </div>
    );
  }
}

export default ProductPage;

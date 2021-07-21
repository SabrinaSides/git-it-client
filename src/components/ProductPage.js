import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import { v4 as uuidv4 } from 'uuid';
import '../styles/ProductPreview.css';
class ProductPage extends Component {
  state = {
    cartItemId: uuidv4(),
    productname: '',
    category: '',
    price: '',
    //img: null,
    productInfo: '',
    size: 'x-small',
  };

  static contextType = ShoppingContext;

  componentDidMount() {
    let chosenProduct = this.context.products.find((product) => {
      return (
        `/shop/${product.category}/${product.productname}` ===
        this.props.location.pathname
      );
    });

    this.setState({
      productname: chosenProduct.productname,
      category: chosenProduct.category,
      price: chosenProduct.price,
      //img: chosenProduct.img,
      productInfo: chosenProduct.productInfo,
    });
  }

  handleAddToCart = () => {
    let product = this.state;
    this.context.addToCart(product);
    //new cartId for every item added
    this.setState({
      cartItemId: uuidv4(),
    });
  };

  render() {
    const { productname, price, img, productInfo } = this.state;

    return (
      <div>      
        <header className='banner'>
          <h1>{productname}</h1>
        </header>
        <button className='back-btn' onClick={() => this.props.history.goBack()}>Back</button>
        
        <section>
        <img src={img} alt={`${productname}`} className='product-preview-img' />
          <p>${price}</p>
          {this.state.category === 'tshirts' && (
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
          )}
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
      </div>
    );
  }
}

export default ProductPage;

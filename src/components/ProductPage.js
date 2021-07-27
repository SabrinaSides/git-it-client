import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import config from '../config';
import Popup from './Popup';
import '../styles/ProductPreview.css';
import '../styles/ProductPage.css'

class ProductPage extends Component {
  state = {
    productid: '',
    productname: '',
    category: '',
    price: '',
    img: '',
    productinfo: '',
    size: 'X-Small',
    popup: false,
  };

  static contextType = ShoppingContext;

  static defaultProps = {
    products: [],
    chosenProduct: [],
  };

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    let chosenProduct = this.context.products.find((product) => {
      return (
        `/shop/${product.category}/${product.id}` ===
        this.props.location.pathname
      );
    });

    fetch(`${config.API_ENDPOINT}/products/${chosenProduct.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((product) =>
        this.setState({
          productid: product.id,
          productname: product.productname,
          category: product.category,
          price: product.price,
          img: product.img,
          productinfo: product.productinfo,
        })
      )
      .catch((error) => this.setState(error));
  };

  handleAddToCart = () => {
    const { productid, productname, category, price, img, productinfo, size } =
      this.state;
    const newItem = {
      productid,
      productname,
      category,
      price,
      img,
      productinfo,
      size,
    };
    const url = `${config.API_ENDPOINT}/shoppingCart`;
    const options = {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res.json();
      })
      .then(() => {
        this.context.fetchData();

        //'added to cart' popup
        this.setState({
          popup: true,
        });

        setTimeout(() => {
          this.setState({
            popup: false,
          });
        }, 500);
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  render() {
    const { productname, price, img, productinfo } = this.state;

    return (
      <div>
        <header className='banner'>
          <h1>{productname}</h1>
        </header>
        <button
          className='back-btn button'
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>

        <section>
          <img
            src={img}
            alt={`${productname}`}
            className='product-preview-img'
          />
          <p>${price}</p>
          {this.state.category === 'tshirts' && (
            <form
              onChange={(event) => this.setState({ size: event.target.value })}
            >
              <label htmlFor='size'>Size:</label>
              <select id='size' name='size' className='size-input'>
                <option value='X-Small'>XS</option>
                <option value='Small'>S</option>
                <option value='Medium'>M</option>
                <option value='Large'>L</option>
                <option value='X-Large'>XL</option>
              </select>
            </form>
          )}
          <button
            className='button'
            onClick={(event) => this.handleAddToCart()}
          >
            Add to Cart
          </button>
          <Popup trigger={this.state.popup}>
            <p>Item Added To Cart</p>
          </Popup>
        </section>

        <section>
          <h3>
            <strong>Product Info:</strong>
          </h3>
          <p>{productinfo}</p>
        </section>
      </div>
    );
  }
}

export default ProductPage;

import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import '../styles/ProductPreview.css'
class ProductPage extends Component {
  static contextType = ShoppingContext

  // state = {
  //   tShirt: null
  // }

  // componentDidMount(){
  //   const chosenTshirt = tShirts
  //   console.log(tShirts)
  // }

  render() {
    const {tShirts} = this.context

    let chosenTshirt = tShirts.find(tShirt => {
        return `/shop/tshirt/${tShirt.title}` == this.props.location.pathname
    })

    console.log(chosenTshirt)

    return (
      <div>
        <header>
          <h1>{chosenTshirt.title}</h1>
          <img src={chosenTshirt.img} alt={`${chosenTshirt.title}`} className='product-preview-img'/>
        </header>

        <section>
          <p>
            {chosenTshirt.price}
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
          <button>Add to Cart</button>
        </section>

        <section>
          <p><strong>Product Info:</strong></p>
            <p>{chosenTshirt.productInfo}</p>
          </section>

        <section>
        <p><strong>Reviews:</strong></p>
        </section>
      </div>
    )
  }
}

export default ProductPage;

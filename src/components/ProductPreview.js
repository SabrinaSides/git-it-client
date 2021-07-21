import React, {Component} from 'react'
import '../styles/ProductPreview.css'

class ProductPreview extends Component {

  render(){
    const {product} = this.props

    return (
            <div onClick={() => this.props.history.push(`/shop/${product.category}/${product.productname}`)}>
          <img src={product.img} alt={`${product.productname} product`} className='product-preview-img' />
          <p>{product.productname}</p>
          <p>${product.price}</p>
            </div>
    )
  }
}

export default ProductPreview


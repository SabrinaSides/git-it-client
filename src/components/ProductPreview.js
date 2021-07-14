import React from 'react'
import '../styles/ProductPreview.css'

function ProductPreview({product}) {
    return (
            <div>
          <img src={product.img} alt={`${product.title} product`} className='product-preview-img' />
          <p>{product.title}</p>
          <p>{product.price}</p>
            </div>
    )
}

export default ProductPreview


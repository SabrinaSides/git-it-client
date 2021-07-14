import React from 'react'
import '../styles/ProductPreview.css'

function ProductPreview({tShirt}) {
    return (
            <div>
          <img src={tShirt.img} alt={`${tShirt.title} tshirt`} className='product-preview-img' />
          <p>{tShirt.title}</p>
          <p>{tShirt.price}</p>
            </div>
    )
}

export default ProductPreview


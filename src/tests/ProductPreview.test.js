import React from 'react'
import ReactDOM from 'react-dom'
import ProductPreview from '../components/ProductPreview'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ProductPreview/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
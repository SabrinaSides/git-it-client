import React from 'react'
import ReactDOM from 'react-dom'
import CheckoutReview from '../components/CheckoutReview'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CheckoutReview/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
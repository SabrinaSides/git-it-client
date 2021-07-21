import React from 'react'
import ReactDOM from 'react-dom'
import PaymentForm from '../components/PaymentForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <PaymentForm/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
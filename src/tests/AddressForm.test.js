import React from 'react'
import ReactDOM from 'react-dom'
import AddressForm from '../components/AddressForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <AddressForm/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
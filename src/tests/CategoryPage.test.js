import React from 'react'
import ReactDOM from 'react-dom'
import CategoryPage from '../components/CategoryPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CategoryPage/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
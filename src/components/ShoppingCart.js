import React, { Component } from 'react'
import ShoppingContext from '../ShoppingContext'
import CartItems from './CartItems'

class ShoppingCart extends Component {
    state = {
        //shoppingCart context
    }

    static contextType = ShoppingContext

    calculateSubtotal = () => {
      const shoppingCart = this.context.shoppingCart
      let subtotal = 0
      shoppingCart.forEach(cartItem => {
        subtotal += cartItem.price
      })
      return subtotal
    }

    calculateSalesTax = () => {
      let subtotal = this.calculateSubtotal()
      return (subtotal * 0.045).toFixed(2)
    }

    calculateTotal = () => {
      let subtotal = this.calculateSubtotal()
      let salesTax = this.calculateSalesTax()
      let total = parseFloat(subtotal) + parseFloat(salesTax)
      return total
    }

    render() {
      const {shoppingCart} = this.context


        return (
            <div>
                <header>
        <h1>Your Shopping Cart</h1>
      </header>
      {shoppingCart.map((cartItem, idx) => {
         return <CartItems key={idx} cartItem={cartItem}/>
        })}
      <section>
        <p>Subtotal: ${this.calculateSubtotal()}</p>
        <p>Shipping: FREE</p>
        <p>Taxes: ${this.calculateSalesTax()}</p>
        <p>Total: ${this.calculateTotal()} </p>
        <button>Sign In to Pay with Paypal </button>
      </section>
            </div>
        )
    }
}

export default ShoppingCart

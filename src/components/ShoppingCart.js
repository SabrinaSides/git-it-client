import React, { Component } from 'react'
import ShoppingContext from '../ShoppingContext'
import CartItems from './CartItems'

class ShoppingCart extends Component {
    state = {
        //shoppingCart context
    }

    static contextType = ShoppingContext

    render() {
      const {shoppingCart} = this.context

        return (
            <div>
                <header>
        <h1>Your Shopping Cart</h1>
      </header>
      {shoppingCart.map(cartItem => {
         return <CartItems key={cartItem.title} cartItem={cartItem}/>
        })}
      <section>
        <p>Subtotal: $0.00</p>
        <p>Shipping: FREE</p>
        <p>Taxes: $0.00 </p>
        <p>Total: $0.00 </p>
        <button>Sign In to Pay with Paypal </button>
      </section>
            </div>
        )
    }
}

export default ShoppingCart

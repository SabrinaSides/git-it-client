import React, { Component } from 'react'

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <header>
        <h1>Your Shopping Cart</h1>
      </header>
      <section>
        <p>[<em>placeholder for screenshot of t-shirt</em>]</p>
        <p>T-shirt Name</p>
        <p>Size, color</p>
        <input type="button" value="-" className="minus" /><input type="number" step="1" min="1" max="" value="1" title="Qty" className="" size="4" pattern="" inputmode=""/><input type="button" value="+" className="plus" />
        <p>Price</p>
      </section>
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

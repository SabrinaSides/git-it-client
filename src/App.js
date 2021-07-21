import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import ShoppingContext from './ShoppingContext';
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import ShoppingCart from './components/ShoppingCart'
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
// import dummyData from './dummy-data'
import config from './config'
import './App.css';

class App extends Component {
  state = {
    products: [],
    shoppingCart: [],
    error: ''
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    Promise.all([
      this.fetchProducts(),
      this.fetchShoppingCart()
    ])
      .then(([products, shoppingCart]) => this.setState({ products, shoppingCart }))
      .catch(error => this.setState(error))
  }
  
  fetchProducts = () => {
    return fetch(`${config.API_ENDPOINT}/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
  }

  fetchShoppingCart = () => {
    return fetch(`${config.API_ENDPOINT}/shoppingCart`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
  }

  // addToCart = (product) => {
  //   this.setState({
  //     shoppingCart: [...this.state.shoppingCart, product]
  //   })
  // }

  removeFromCart = (cartItemId) => {
    this.setState({
      shoppingCart: this.state.shoppingCart.filter(cartItem => {
        return cartItem.cartItemId !== cartItemId
      })
    })
  }

  render(){

    const contextValue = {
      products: this.state.products,
      shoppingCart: this.state.shoppingCart,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart
    }

  return (
    <ShoppingContext.Provider value={contextValue}>
    <div className="App">
      <nav>
      <Route path='/shop' component={Navbar} />
      <Route path='/shopping-cart' component={Navbar} />
      </nav>
      <main>
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/shop/:category/:product' component={ProductPage} />
        <Route path='/shop/:category' component={CategoryPage} />
        <Route path='/shop' component={HomePage} />
        <Route path='/shopping-cart/checkout' component={Checkout} />
        <Route path='/shopping-cart' component={ShoppingCart} />
        </Switch>
      </main>
    </div>
    </ShoppingContext.Provider>
  )
  }
}

export default App;

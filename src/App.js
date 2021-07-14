import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import ShoppingCart from './components/ShoppingCart'
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  state = {
    tShirts: []
  }


  render(){
  return (
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
        <Route path='/shopping-cart' component={ShoppingCart} />
        </Switch>
      </main>
    </div>
  )
  }
}

export default App;

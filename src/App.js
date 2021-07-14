import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import './App.css';

class App extends Component {
  state = {
    tShirts: []
  }


  render(){
  return (
    <div className="App">
      <nav></nav>
      <main>
        <Route exact path='/' component={LandingPage} />
        <Route path='/shop' component={HomePage} />
      </main>
    </div>
  )
  }
}

export default App;

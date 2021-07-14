import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import ProductPreview from './ProductPreview'

//categories: all, men's, women's
class CategoryPage extends Component {
  // state = {
  //   category: ''
  // }

  static contextType = ShoppingContext;

  // static defaultProps = {
  //   category: 'All'
  // }

  // componentDidMount(){
  //   this.setState({
  //     category: this.props.match.params.category
  //   })
  // }

  render() {

    const {tShirts} = this.context

    return (
      <div>
        <header>
          <h1>Git It</h1>
          <h2>All T-shirts</h2>
          <p>
            [<em>Tshirt pic in background</em>]
          </p>
        </header>

        <h3>Shop The Products:</h3>
        {tShirts.map(tShirt => {
        return (
        <section onClick={() => this.props.history.push(`/shop/${tShirt.category}/${tShirt.title}`)}>
          <ProductPreview tShirt={tShirt} key={tShirt.title}/>
        </section>
        )
      })}
      </div>
    );
  }
}

export default CategoryPage;

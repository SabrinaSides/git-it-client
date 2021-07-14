import React, { Component } from 'react';
import ShoppingContext from '../ShoppingContext';
import ProductPreview from './ProductPreview'

//categories: all, men's, women's
class CategoryPage extends Component {
  state = {
    products: []
  }

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

    const {products} = this.context

    const chosenCategory = products.filter( product => {
      return `/shop/${product.category}` === this.props.location.pathname
    })

    return (
      <div>
        <header>
          <h1>Git It</h1>
          <h2>{chosenCategory.category}</h2>
          <p>
            [<em>Tshirt pic in background</em>]
          </p>
        </header>

        <h3>Shop The Products:</h3>
        {chosenCategory.map(product => {
        return (
        <section onClick={() => this.props.history.push(`/shop/${product.category}/${product.title}`)}>
          <ProductPreview product={product} key={product.title}/>
        </section>
        )
      })}
      </div>
    );
  }
}

export default CategoryPage;

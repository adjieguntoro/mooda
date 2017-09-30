import React, { Component } from 'react'
import { shape, string, Object } from 'prop-types'
import './CategoryCard.scss'

class CategoryCard extends Component {
  static propTypes = {
    category : shape({
      img_category : string,
      name_category : string,
    })
  }

  state = {
    selectedCategory: false,
    categories : []
  }

  handleIsSelected = () => {
    this.setState({
      selectedCategory: !this.state.selectedCategory
    })
  }

  render () {
    if (!this.props.category) {
      // console.log(this.props.category.img_category)
      return null
    }
    return (
      <div className='card category-card' onClick={(e) => this.handleIsSelected()} >
        <figure className='image is-4by2'>
          <img src={this.props.category.img_category} alt={this.props.category.name_category} />
        </figure>
        <div className='card-label'> <h1 className='is-white'> {this.props.category.name_category} </h1></div>
        {
          this.state.selectedCategory &&
          <div className='checkbox' />
        }
      </div>
    )
  }
}

export default CategoryCard

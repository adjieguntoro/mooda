import React, { Component } from 'react'
import './CategoryCard.scss'

class CategoryCard extends Component {

  state = {
    selectedCategory: false
  }

  handleIsSelected = () => {
    this.setState({
      selectedCategory: !this.state.selectedCategory
    })
  }

  render () {
    return (
      <div className='card category-card' onClick={(e) => this.handleIsSelected()} >
        <figure className='image is-4by2'>
          <img src='http://via.placeholder.com/200x100' alt='Category' />
        </figure>
        <div className='card-label'></div>
        {
          this.state.selectedCategory &&
          <div className='checkbox' />
        }
      </div>
    )
  }
}

export default CategoryCard

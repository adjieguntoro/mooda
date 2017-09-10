import React, { Component } from 'react'
import CategoryCard from './../../../components/CategoryCard'
import Navbar from './../../../components/Navbar'
import './Category.scss'

class CategoryView extends Component {

  state = {
    selectCategory: false
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className=' categories-title'>
            <div className='title is-3'>Pick some topics you are interested in</div>
            <div className='title is-4'>We will use them to customize your reading list based on your interests</div>
          </div>
          <div className='category-list columns'>
            <div className='column' onClick={(e) => this.handleIsSelected()}>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
            <div className='column'>
              <CategoryCard />
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
            <div className='column'>
              <CategoryCard isSelected={this.state.selectCategory} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryView

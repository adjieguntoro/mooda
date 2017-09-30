import React, { Component } from 'react'
import CategoryCard from './../../../components/CategoryCard'
import Navbar from './../../../components/Navbar'
import './Category.scss'
import axios from 'axios'

class CategoryView extends Component {
  state = {
    selectCategory: false,
    categories : []
  }

  componentDidMount () {
    axios.get('http://188.166.231.171/api/v1/category')
         .then(res => {
           const categories = res.data
           this.setState({
             categories : categories
           })
         })
  }

  arrayHelper = (arr, length) => {
    const result = []
    const copy = arr.slice()
    while (copy.length) {
      result.push(copy.splice(0, length))
    }

    return result
  }

  render () {
    console.log(this.state.categories)
    if (this.state.categories.length === 0) {
      return null // or spinner
    }
    const newCategories = this.state.categories.data
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className=' categories-title'>
            <div className='title is-3'>Pick some topics you are interested in</div>
            <div className='title is-4'>We will use them to customize your reading list based on your interests</div>
          </div>
          
            {
               this.arrayHelper(newCategories, 4).map((ctgr, i) => {
                 return (
                   <div className='category-list columns is-desktop'>
                     {ctgr.map((category, i) => {
                       return (
                         <div className='column is-3' key={`category-${i}`}>
                           <CategoryCard category={category} />
                         </div>
                       )
                     })}
                   </div>
                 )
               })
            //   this.state.categories.data.map((category, i) => {
            //   // console.log(category)
            //   return (
            //     <div className='column is-3' key={`category-${i}`}>
            //       <CategoryCard category={category} />
            //     </div>
            //   )
            // })
            }
          </div>
        </div>
    )
  }
}

export default CategoryView

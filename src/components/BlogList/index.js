import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isBlogListLoaded: true, blogList: []}

  componentDidMount() {
    this.blogListFunc()
  }

  blogListFunc = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachValue => ({
      author: eachValue.author,
      avatarUrl: eachValue.avatar_url,
      id: eachValue.id,
      imageUrl: eachValue.image_url,
      title: eachValue.title,
      topic: eachValue.topic,
    }))
    console.log(updateData)

    this.setState({isBlogListLoaded: false, blogList: updateData})
  }

  render() {
    const {isBlogListLoaded, blogList} = this.state

    return (
      <ul>
        {isBlogListLoaded ? (
          <div data-testId="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem key={eachItem.id} eachItem={eachItem} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList

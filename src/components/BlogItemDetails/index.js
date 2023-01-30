import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isBlogListLoaded: true, blogList: []}

  componentDidMount() {
    this.BlogItemDetailsList()
  }

  BlogItemDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    console.log(data)

    this.setState({isBlogListLoaded: false, blogList: updateData})
  }

  render() {
    const {isBlogListLoaded, blogList} = this.state

    return (
      <div>
        {isBlogListLoaded ? (
          <div data-testId="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="total">
            <h1>{blogList.title}</h1>
            <div className="avatarBlock1">
              <img
                className="avatarProp"
                src={blogList.avatarUrl}
                alt={blogList.title}
              />
              <p>{blogList.author}</p>
            </div>
            <div>
              <img
                className="imageProp1"
                src={blogList.imageUrl}
                alt={blogList.title}
              />
            </div>
            <p>{blogList.content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

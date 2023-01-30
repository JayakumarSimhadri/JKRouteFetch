import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {eachItem} = this.props
    const {author, avatarUrl, id, imageUrl, title, topic} = eachItem

    return (
      <Link to={`/blogs/${id}`}>
        <li>
          <div>
            <img className="imageProp" src={imageUrl} alt={title} />
          </div>
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="avatarBlock">
              <img className="avatarProp" src={avatarUrl} alt={title} />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem

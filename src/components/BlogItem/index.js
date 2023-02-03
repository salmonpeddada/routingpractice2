// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props

  return (
    <li>
      <div className="item">
        <h1>{item.title}</h1>
        <p>{item.publishedDate}</p>
      </div>
      <p>{item.description}</p>
      <hr />
    </li>
  )
}

export default BlogItem

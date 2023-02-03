// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(each => (
        <BlogItem key={each.id} item={each} />
      ))}
    </ul>
  )
}

export default BlogList

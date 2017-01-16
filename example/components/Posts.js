import React, { PropTypes, Component } from 'react'
import ss from './styles.scss';
export default class Posts extends Component {
  render() {
    return (
      <ul className="test">
        {this.props.posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

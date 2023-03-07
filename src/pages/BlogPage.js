import React from 'react'
import { Link } from 'react-router-dom'

import { blogData } from '../data/blogData'

export const BlogPage = () => {
  const [newPost, setNewPost] = React.useState({
    title: '',
    slug: '',
    content: '',
    author: ''
  })

  return (
    <>
      <h1>BlogPage</h1>

      {blogData.map(post => (
        <BlogLink key={post.slug} post={post} />
      ))}

      <h3>Crear post</h3>
      <form>
        <div>
          <label>Titulo</label>
          <input type='text' value={newPost.title} />
        </div>
      </form>
    </>
  )
}

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}
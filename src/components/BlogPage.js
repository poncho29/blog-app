import React from 'react'
import { Link } from 'react-router-dom'
import { blogData } from './blogData'

export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>

      {blogData.map(post => (
        <BlogLink key={post.slug} post={post} />
      ))}
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
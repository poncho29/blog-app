import { useNavigate, useParams } from "react-router-dom"
import { blogData } from './blogData'

export const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const post = blogData.find(post => post.slug === slug)

  const goBack = () => {
    navigate('/blog')
  }

  return (
    <>
      <h2>{post.title}</h2>
      <button onClick={goBack}>Atras</button>
      <p>{post.content}</p>
      <p>{post.author}</p>
    </>
  )
}

import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../context/auth"
import { blogData } from '../data/blogData'

export const PostPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const auth = useAuth()

  const post = blogData.find(post => post.slug === slug)

  const canDelete = auth.user?.isAdmin || post.author === auth.user?.username

  const goBack = () => {
    navigate('/blog')
  }

  return (
    <>
      <h2>{post.title}</h2>
      <button onClick={goBack}>Atras</button>
      <p>{post.content}</p>
      <p>{post.author}</p>

      {canDelete &&
        <button>Eliminar post</button>
      }
    </>
  )
}

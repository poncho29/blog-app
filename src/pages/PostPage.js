import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Container, Image, Modal, Spinner } from "react-bootstrap"

import { useAuth } from "../context/auth"
import { usePosts } from "../context/posts"

import { useModal } from "../hooks/useModal"

import { PostForm } from "../components/forms/PostForm"
import { DeleteModal } from "../components/modals/DeleteModal"
import { ShowElement } from "../components/privates/ShowElement"

import DefaultImg from '../assets/images/default-post.jpeg';

export const PostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  
  const { user } = useAuth()
  const { posts, editPost, removePost } = usePosts()
  const [isEdit, openModalEdit, closeModalEdit] = useModal(false);
  const [isDelete, openModalDelete, closeModalDelete] = useModal(false);

  const [dataPost, setDataPost] = useState(null)

  useEffect(() => {
      if (id && posts) {
        const postSelect = posts.find((post) => post.id === id);
        setDataPost(postSelect);
      };
  }, [id, posts])

  const updatePost = (data) => {
    if (!data.urlImg) {
      data.urlImg = DefaultImg;
    }

    const uptPost = {
      ...dataPost,
      ...data
    }

    editPost(uptPost.id, uptPost)
    closeModalEdit()
  }

  const deletePost = (id) => {
    removePost(id)
    closeModalDelete()
    navigate('/blog')
  }
  
  if (!dataPost) {
    return (
      <Container className="w-100 h-100 d-flex justify-content-between align-items-center">
        <Spinner animation="grow" />
      </Container>
    )
  }

  return (
    <Container className="py-3">
      <div className="d-flex justify-content-between">
        <Button as={Link} variant='dark' to='/blog'>Atras</Button>

        <div className="d-flex justify-content-center gap-2">
          <ShowElement user={user} permissions={['edit']}>
            <Button variant='btn btn-outline-dark' onClick={openModalEdit}>Editar</Button>
          </ShowElement>
          <ShowElement user={user} permissions={['delete']}>
            <Button variant='btn btn-danger' onClick={openModalDelete}>Eliminar</Button>
          </ShowElement>
        </div>
      </div>

      <h2 className="mt-3 pb-3 border-bottom">{dataPost.title}</h2>
      
      <div className="p-3 border-bottom">
        <figure className="d-flex justify-content-center mb-0">
          <Image
            src={dataPost.urlImg}
            className='w-100 rounded-5'
            style={{ maxWidth: '600px'}}
          />
        </figure>
        <p className="fs-5 pt-3 mb-0 w-100" style={{ whiteSpace: 'pre-line' }}>
          {dataPost.content}
        </p>
      </div>

      <span className="d-block mt-3 text-end">
        <b>Autor: </b>{dataPost.author}
      </span>

      <Modal
        centered
        show={isEdit}
        keyboard={false}
        backdrop="static"
        onHide={closeModalEdit}
      >
        <PostForm
          data={dataPost}
          onSend={updatePost}
          onClose={closeModalEdit}
        />
      </Modal>

      <Modal
        centered
        show={isDelete}
        keyboard={false}
        backdrop="static"
        onHide={closeModalDelete}
      >
        <DeleteModal
          title='¿Está seguro de eliminar este post?'
          onButtonMessage='Eliminar'
          onClose={closeModalDelete}
          onSend={() => deletePost(dataPost.id)}
        />
      </Modal>
    </Container>
  )
}

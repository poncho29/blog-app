import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { useAuth } from '../context/auth';
import { usePosts } from '../context/posts';

import { useModal } from '../hooks/useModal';

import { generateId } from '../utils/generateId';

import { PostForm } from '../components/forms/PostForm';
import { BlogCard } from '../components/common/BlogCard';
import { ShowElement } from '../components/privates/ShowElement';

import DefaultImg from '../assets/images/default-post.jpeg';

export const BlogPage = () => {
  const { user } = useAuth();
  const { posts, addPost } = usePosts();

  const [isOpen, openModal, closeModal] = useModal(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Crear post
    </Tooltip>
  );

  const createPost = (data) => {
    if (!data.urlImg) {
      data.urlImg = DefaultImg;
    }

    const newPost = {
      id: generateId(),
      author: user.name,
      ...data
    }

    addPost(newPost)
    closeModal()
  }

  return (
    <Container>
      <h1 className='my-3'>Blogs</h1>

      <Row>
        {posts.length > 0 ?
          posts.map(post => (
            <Col
              key={post.id}
              xs={12} md={6} lg={4}
            >
              <BlogCard post={post} />  
            </Col>
          ))
          :
            <Col>No blogs</Col>
        }
      </Row>
      
      <ShowElement user={user} permissions={['create']}>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button
            type='submit'
            style={{ 
              width: '50px',
              height: '50px',
              bottom: '10px',
              right: '10px'
            }}
            className='
              d-flex justify-content-center align-items-center
              bg-dark rounded-circle position-fixed
            '
            onClick={openModal}
          >
            <span className='fs-2 fw-bold'>+</span>
          </Button>
        </OverlayTrigger>
      </ShowElement>

      <Modal
        centered
        show={isOpen}
        keyboard={false}
        backdrop="static"
        onHide={closeModal}
      >
        <PostForm
          onSend={createPost}
          onClose={closeModal}
        />
      </Modal>
    </Container>
  )
}
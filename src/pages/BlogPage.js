import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { useAuth } from '../context/auth';
import { useModal } from '../hooks/useModal';

import { BlogCard } from '../components/BlogCard'
import { CreatePost } from '../components/forms/CreatePost';

import DefaultImg from '../assets/images/default-post.jpeg';
import { usePosts } from '../context/posts';

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
      slug: data.title.toLowerCase().split(' ').join('-'),
      author: user.name,
      ...data
    }

    console.log(newPost);

    addPost(newPost)
    closeModal()
  }

  return (
    <Container>
      <h1 className='my-3'>Blogs</h1>

      <Row>
        {posts.map(post => (
          <Col
            key={post.slug}
            xs={12} md={6} lg={4}
          >
            <BlogCard post={post} />  
          </Col>
        ))}
      </Row>
      
      { user && (user.role === ('admin' || 'editor')) &&
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
      }

      <Modal
        centered
        show={isOpen}
        keyboard={false}
        backdrop="static"
        onHide={closeModal}
      >
        <CreatePost
          onSend={createPost}
          onClose={closeModal}
        />
      </Modal>
    </Container>
  )
}
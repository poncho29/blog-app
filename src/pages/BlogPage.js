import { Button, Col, Container, Row } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { blogData } from '../data/blogData'

import { BlogCard } from '../components/BlogCard'
import { useAuth } from '../context/auth';

export const BlogPage = () => {
  const { user } = useAuth()
  // const [newPost, setNewPost] = React.useState({
  //   title: '',
  //   slug: '',
  //   content: '',
  //   author: ''
  // })

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Crear post
    </Tooltip>
  );

  console.log(user)

  return (
    <Container>
      <h1 className='my-3'>Blogs</h1>

      <Row>
        {blogData.map(post => (
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
          >
            <span className='fs-2 fw-bold'>+</span>
          </Button>
        </OverlayTrigger>
      }
      {/* <h3>Crear post</h3>
      <form>
        <div>
          <label>Titulo</label>
          <input type='text' value={newPost.title} />
        </div>
      </form> */}
    </Container>
  )
}
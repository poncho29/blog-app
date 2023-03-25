import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const BlogCard = ({ post }) => {
  return (
    <Card className='mb-4'>
      <Card.Img
        variant="top"
        src={post.urlImg}
        style={{ height: '230px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.content}
        </Card.Text>

        <div className='d-flex justify-content-end'>
          <Button
            as={Link}
            variant="dark"
            to={`/blog/${post.slug}`}
          >
            Ver más
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

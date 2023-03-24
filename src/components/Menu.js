import { Link, NavLink } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { useAuth } from '../context/auth'

export const Menu = () => {
  const auth = useAuth()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to='/' className='fw-bold'>MY BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {routes.map(route => {
            if (route.private && !auth.user) return null

            if (route.publicOnly && auth.user) return null

            return (
              <Nav.Link
                as={NavLink}
                to={route.to}
                key={route.to}
                style={({ isActive }) => ({fontWeight: isActive ? 'bold'  : ''})}
              >
                {route.text}
              </Nav.Link>
            )
          })}     
          </Nav>

          { auth.user ?
            <Button
              type='button'
              className='fw-bolder bg-dark'
              onClick={() => auth.logout()}
            >
              Logout
            </Button>
            :
            <Button
              as={Link}
              to='/login'
              className='fw-bolder bg-dark'
            >
              Login
            </Button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home',
    private: false
  },
  {
    to: '/blog',
    text: 'Blog',
    private: false
  },
  {
    to: '/profile',
    text: 'Profile',
    private: true
  }
]

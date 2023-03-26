import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import { useAuth } from '../context/auth'

import DefaultAvatar from '../assets/images/default-avatar.jpeg';

export const Profile = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={12} md={4} className='d-flex justify-content-center'>
          <Image
            src={DefaultAvatar}
            className='rounded-circle'
            style={{ maxWidth: '600px'}}
          />
        </Col>
        <Col sm={12} md={8} className='d-flex flex-column justify-content-center'>
          <h3 className='border-bottom py-2 text-capitalize'>
            <b>Bienvenido: </b>{user.username}
          </h3>
          {/* <p className='mb-0'>Bienvenido </p> */}
          <p className='mb-0'><b>Rol: </b>{user.role}</p>
        </Col>
      </Row>      
    </Container>
  )
}

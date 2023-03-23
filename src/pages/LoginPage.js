import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { useAuth } from '../context/auth'

const schema = Yup.object().shape({
  username: Yup.string().required('EL usuario es requerido'),
  password: Yup.string().required('La contraseña es requerida').min(6),
});

export const LoginPage = () => {
  const auth = useAuth()

  if (auth.user) {
    return <Navigate to='/profile' />
  }

  return (
    <Container
      fluid
      className='w-100 bg-gray'
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <Row className='d-flex h-100 justify-content-center align-items-center'>
        <Col
          xs={8} md={5}
          className='shadow bg-body-tertiary p-5 rounded-4'
        >
          <h1 className='text-center'>Login</h1>

          <Formik
            validationSchema={schema}
            onSubmit={(values) =>  {
              auth.login(values)
            }}
            initialValues={{
              username: '',
              password: ''
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              handleChange,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikUsername">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Tú usuario"
                      aria-describedby="inputGroupPrepend"
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={touched.username && !!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Tú contraseña"
                      aria-describedby="inputGroupPrepend"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}                      
                      isInvalid={touched.password && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button
                  type='submit'
                  className='fw-bold w-100 bg-dark'
                >
                    LOGIN
                </Button>

                <pre>{JSON.stringify(values)}</pre>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

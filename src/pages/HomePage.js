import { Col, Container, Row } from 'react-bootstrap'

export const HomePage = () => {
  return (
    <Container>
      <h1 className='mt-3 text-center'>
        Proyecto del curso de React Router V6
      </h1>

      <Row className='mt-5 d-flex justify-content-center gap-3'>
        <Col md={8} className='p-2 border rounded-3'>
          <h3 className='m-0 text-center'>Credenciales</h3>
          <div className='mb-2 p-2 border-bottom'>
            <p className='m-0'><b>Rol Admin: </b> Puede crear, editar y eliminar posts.</p>
            <p className='m-0'><b>Usuario: </b>sebasmen</p>
            <p className='m-0'><b>Contraseña: </b>1234567</p>
          </div>

          <div className='mb-2 p-2 border-bottom'>
            <p className='m-0'><b>Rol Editor: </b>Puede crear y editar posts.</p>
            <p className='m-0'><b>Usuario: </b>juandc</p>
            <p className='m-0'><b>Contraseña: </b>1234567</p>
          </div>
          
          <p className='m-0'><i>* Cualquier otro usuario sera rol user y solo podra ver</i></p>
        </Col>

        <Col md={8} className='p-2 border rounded-3'>
          <h3 className='m-0 text-center'>Tecnologia usadas</h3>
          <ul>
            <li>React</li>
            <li>React Router DOM V6</li>
            <li>ReactBootstrap - Bootstrap</li>
            <li>Formik</li>
          </ul>
        </Col>

        <Col md={8} className='p-2 border rounded-3'>
          <h3 className='m-0 text-center'>API's usadas</h3>
          <ul>
            <li>Context API</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

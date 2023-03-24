import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const CreatePost = ({ onClose, onSend }) => {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    title: '',
    urlImg: '',
    content: ''
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      onSend(formState);
    }

    setValidated(true);
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <>
      <Modal.Header>
        <Modal.Title>Crear Post</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Título del post"
              value={formState.title}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              El título es requerido
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              name="urlImg"
              placeholder="Url de la imagen"
              value={formState.urlImg}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="description"
          >
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              rows={3}
              required
              as="textarea"
              name="content"  
              placeholder='Contenido del post'
              value={formState.content}   
              onChange={handleInputChange}         
            />
            <Form.Control.Feedback type="invalid">
              La descripción es requerida
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='w-100 d-flex justify-content-end gap-2'>
            <Button type="submit" variant="dark">
              Guardar
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button> 
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  )
}

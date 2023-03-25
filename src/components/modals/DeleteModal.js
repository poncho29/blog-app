import { Button, Modal } from "react-bootstrap"

export const DeleteModal = ({
  title = '',
  bodyText = '',
  onButtonMessage = '',
  onClose = () => {},
  onSend = () => {}
}) => {
  return (
    <>
      <Modal.Header >
        <Modal.Title className=" w-100 text-center">{title}</Modal.Title>
      </Modal.Header>
      { bodyText &&
        <Modal.Body>{bodyText}</Modal.Body>
      }
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="danger" onClick={onSend}>
          {onButtonMessage}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>        
      </Modal.Footer>
    </>
  )
}

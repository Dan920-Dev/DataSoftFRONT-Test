import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BookModal({ book, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{book.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={book.image} alt={book.name} style={{ width: '100%' }} />
        <p>Id de Libro: {book.id}</p>
        <p>{book.summary}</p>
        <p>Genero: {book.gen_name}</p>
        <p className="text-muted">Precio: ${book.price}</p>
        {book.state && <div className={`badge ${book.state === 'DIS' ? 'bg-success' : 'bg-danger'}`}>
  {book.state === 'DIS' ? 'Disponible' : 'Ocupado'}</div>}
  {book.user_name && <p className="Text-muted"> Alquilado por: 
  {book.user_name === 'N/A' ? '' : book.user_name}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;
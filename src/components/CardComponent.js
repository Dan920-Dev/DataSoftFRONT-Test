import React, { useState } from 'react';
import BookModal from './BookModal';

const CardComponent = ({ book }) => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="card" style={{ width: "17rem", marginBottom: "1rem", marginTop: "1rem" }}>
        <img src={book.image} className="card-img-top mx-auto d-block" alt={book.name} style={{ width: '150px', height: '200px', marginTop: "1rem" }} />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">${book.price}</p>
          {book.state && <span className="badge bg-success">En Stock</span>}
          <div className="mt-2">
            <button onClick={() => setModalShow(true)} className="btn btn-primary">
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      <BookModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="x1"
        centered
        book={book}
      />
    </>

  );
};

export default CardComponent;

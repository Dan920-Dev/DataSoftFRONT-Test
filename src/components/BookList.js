
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent'
import api from '../services/api';

function BookList({ endpoint }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('Endpoint is: ', endpoint);
    api.get(`/${endpoint}`) 
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(error => {
        
        console.error("Error al obtener los libros:", error);
      });
  }, [endpoint]);

  // Renderizado
  return (
    <div className="container">
      <div className="row">
        {books.map(book => (
          <div className="col-sm-4" key={book.id}>
            <CardComponent book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
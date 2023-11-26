// NavigationBar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar({ onSelectEndpoint }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Book Market</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => onSelectEndpoint('book/all')}>All Books</Nav.Link>
        <Nav.Link onClick={() => onSelectEndpoint('book/byGenre/1')}>Infantil</Nav.Link>
        <Nav.Link onClick={() => onSelectEndpoint('book/byGenre/2')}>Suspenso</Nav.Link>
        <Nav.Link onClick={() => onSelectEndpoint('book/byGenre/3')}>Terror</Nav.Link>
        {/* Agrega más enlaces según sea necesario */}
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;

import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar({ onSelectEndpoint, onLogout }) {
    return (
        <div className="d-flex flex-column vh-100 sticky-top" style={{ width: '250px', backgroundColor: '#f8f9fa' }}>
            <Navbar className="flex-column h-100">
                <Navbar.Brand href="#home">Book Market</Navbar.Brand>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-0" onClick={() => onSelectEndpoint('book/all')}>All Books</Nav.Link>
                    <Nav.Link eventKey="link-1" onClick={() => onSelectEndpoint('book/byGenre/1')}>Infantil</Nav.Link>
                    <Nav.Link eventKey="link-2" onClick={() => onSelectEndpoint('book/byGenre/2')}>Suspenso</Nav.Link>
                    <Nav.Link eventKey="link-3" onClick={() => onSelectEndpoint('book/byGenre/3')}>Terror</Nav.Link>
                    
                    <Nav.Link eventKey="link-5" onClick={onLogout}>Cerrar sesión</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavigationBar;

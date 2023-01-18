import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function AppNavbar() {
  const cart = useSelector(state => state.cart)

  return (
	 <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Link to="/" className='navbar-brand'>CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Products</Link>
            <Link to="cart" className='nav-link'>Cart ({cart.length})</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

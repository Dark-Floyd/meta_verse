import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Z&D</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Sign In</Nav.Link>
          <Nav.Link href="#features">Sign Up</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar

import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import colors from '../constants/colors'

const CustomNavbar = (connected) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Z&D</Navbar.Brand>
        <Nav className="me-auto">
          {connected.connected ? null : (
            <div>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
            </div>
          )}

          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/lands">
            <Nav.Link>Lands</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Map Legend">
            <NavDropdown.Item
              style={{ backgroundColor: colors.owned, color: 'white' }}
            >
              Owned
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ backgroundColor: colors.park, color: 'white' }}
            >
              Park
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ backgroundColor: colors.road, color: 'white' }}
            >
              Road
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ backgroundColor: colors.for_sale, color: 'white' }}
            >
              For Sale
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ backgroundColor: colors.not_for_sale, color: 'white' }}
            >
              Not For Sale
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar

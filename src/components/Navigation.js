import React, { useState } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from '@reach/router'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar className="navbar-main fixed-top" expand="md">
      <Container fluid>
        <NavbarBrand href="/">{process.env.REACT_APP_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-menu ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <Navbar
      className={`navbar-main fixed-top ${scrolled && 'scrolled'}`}
      expand="md"
    >
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
            <NavItem>
              <NavLink tag={Link} to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

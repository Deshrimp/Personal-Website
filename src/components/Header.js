import React from "react"

import "bootstrap-css-only"
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap"
import styled from "styled-components"
import "../style.css"

const FixedNavbar = styled(Navbar)`
  position: fixed;
  width: 100%;
  top: 0;
`

class Header extends React.PureComponent {
  render() {
    return (
      <FixedNavbar className="topnav" expand="sm">
        <div className="container">
          <NavbarBrand>Jessica Yanez</NavbarBrand>
          <Nav
            className="ml-auto"
            tag="div"
            navbar
            horizontal
            fill
            class="topnav"
          >
            <NavLink active href="#home">
              Home
            </NavLink>
            <NavLink href="#WebDevelopment">Web Development</NavLink>
            <NavLink href="#Art">Art</NavLink>
            <NavLink href="#">About & Contact</NavLink>
          </Nav>
        </div>
      </FixedNavbar>
    )
  }
}

export { Header }

import React from "react"

import "bootstrap-css-only"
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap"
import styled from "styled-components"
import "../style.css"

const FixedNavbar = styled(Navbar)`
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 3px solid #d9c0c0;
  
`

class Header extends React.PureComponent {
  render() {
    return (
      <FixedNavbar id="navbar" className="topnav" /* expand="lg" */>
        <div className="container">
          <NavbarBrand>Jessica Yanez</NavbarBrand>
          <Nav className="ml-auto topnav" tag="div" navbar fill>
            <NavLink active href="#home">
              Home
            </NavLink>
            <NavLink href="#WebDevelopment">Web Development</NavLink>
            <NavLink href="#Art">Art</NavLink>
            <NavLink href="#Contact">About {"&"} Contact</NavLink>
          </Nav>
        </div>
      </FixedNavbar>
    )
  }
}

export { Header }

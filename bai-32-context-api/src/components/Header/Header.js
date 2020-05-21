import React, { useState } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return  <div>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">FreelHuflit</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">Transactions</NavLink>
        </NavItem>
        <NavItem className="cart">
          <img alt="not found" src="https://cdn.glitch.com/1eeeaa03-4c95-4acc-925a-ac933fed2ce6%2Fsupermarket.svg?v=1587797125082"/>
        </NavItem>
      </Nav>
      <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                UserName
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem>
                  Create Shop
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    </Collapse>
  </Navbar>
</div>
}

import React, { useState, useContext } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export default function Header() {
  const context = useContext(DataContext);
  const isLoged = context.auth.isAuthenticated;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">
          FreelHuflit
        </Link>
        {/* <NavbarBrand href="/">FreelHuflit</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </NavItem>
          </Nav>
          {!isLoged && (
            <Button type="primary" size="small">
              <Link to="/login">
                Login
              </Link>
            </Button>
          )}
          {isLoged && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {context.account.user.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/manageBook">Manage Book</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/addBook">Add Book</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => context.auth.resetUser()}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

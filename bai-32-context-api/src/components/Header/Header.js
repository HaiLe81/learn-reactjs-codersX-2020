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
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { Badge } from "antd";

export default function Header() {
  const context = useContext(DataContext);
  const isAdmin = context.account.user.isAdmin;

  const [isOpen, setIsOpen] = useState(false);
  const cartSize = context.cart.cartSize;
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
              {isAdmin && (
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              )}
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">Users</NavLink> */}
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/transactions">
                Transactions
              </Link>
            </NavItem>
            <NavItem className="cart">
              <Link to="/cart">
                <img
                  alt="not found"
                  src="https://cdn.glitch.com/1eeeaa03-4c95-4acc-925a-ac933fed2ce6%2Fsupermarket.svg?v=1587797125082"
                />
                <Badge count={cartSize} />
              </Link>
            </NavItem>
          </Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {context.account.user.name}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/profile">Profile</Link>
              </DropdownItem>
              <DropdownItem>Create Shop</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => context.auth.resetUser()}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

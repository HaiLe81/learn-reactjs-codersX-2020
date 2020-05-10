import React, { useState } from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookList from "../BookList/BookList";
import Home from "../Home/Home";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <header>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand href="/">FreelHuflit</NavbarBrand> */}
          <Link to="/" className="navbar-brand">
            FreelHuflit
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://www.facebook.com/banhthi.tet.50">
                  Facebook
                </NavLink>
              </NavItem>
              <NavItem />
              <NavItem>
                <Link className="nav-link" to="/books">
                  BookList
                </Link>
                {/* <NavLink to="/books">BookList</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      <Switch>
        <Route path="/books" name="q" component={BookList} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

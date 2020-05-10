import React, { useState } from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookList from "../BookList/BookList";
import Home from "../Home/Home";
import { Row, Col } from "antd";

export default function Header(props) {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <Row>
        <Col span={24}>
          <ul>
            <li>
              <Link className="navbar-brand" to="/">
                FreelHuflit
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/books">
                Book
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      {/* <Navbar color="light" light expand="md">
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
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      <Switch>
        <Route path="/books" name="q" component={BookList} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

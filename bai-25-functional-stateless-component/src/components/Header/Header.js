import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Header/Header.css";
import PropTypes from "prop-types";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = props => {
  const { user, existShop } = props;
  return (
    <div className="container pt-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          FreelHuflit
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                User
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Book
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Transactions
              </a>
            </li>
            <li class="nav-item wrapper">
              <a className="cart" href="/">
                <img
                  className="nav-link"
                  src="https://cdn.glitch.com/1eeeaa03-4c95-4acc-925a-ac933fed2ce6%2Fsupermarket.svg?v=1587797125082"
                  alt="not found"
                />
                <span className="count">0</span>
              </a>
            </li>
          </ul>
          {user && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {user.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Profile</DropdownItem>
                {existShop && <DropdownItem>Create Shop 2</DropdownItem>}
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </div>
      </nav>
    </div>
  );
};
Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    wrongLoginCount: PropTypes.number,
    id: PropTypes.string.isRequired
  }),
  existShop: PropTypes.bool.isRequired
};
export default Header;

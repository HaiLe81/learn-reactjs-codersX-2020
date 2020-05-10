import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeaderCustomer/HeaderCustomer.css";

const HeaderCustomer = () => {
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
            <li class="nav-item">
              <a class="nav-link" href="/">
                BookShop
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderCustomer;

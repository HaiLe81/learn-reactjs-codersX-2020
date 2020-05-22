import React from "react";
import "./styles.css";
// import 'antd/dist/antd.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Books from "./components/Books/Books";
import Login from "./components/auth/login/login";
import SignUp from "./components/auth/signup/signup";
import Transactions from "./components/Transactions/Transactions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import { RouteWithAuth } from "./custom-routes/RouteWithAuth";
import { Cart } from "./components/cart/cart";

export default function App() {
  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <RouteWithAuth path="/">
              <Header />
              <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/books" component={Books} />
                <Route path="/users" component={Users} />
                <Route path="/" exact component={Home} />
              </Switch>
            </RouteWithAuth>
          </Switch>
        </DataProvider>
      </Router>
    </div>
  );
}

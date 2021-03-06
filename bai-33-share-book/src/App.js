import React from "react";
import "./styles.css";
// import 'antd/dist/antd.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Login from "./components/auth/login/login";
import SignUp from "./components/auth/signup/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import { RouteWithAuth } from "./custom-routes/RouteWithAuth";
import { ManageBook } from "./components/manageBook/manageBook";
import AddBook from "./components/AddBook/AddBook";

export default function App() {
  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Header />
          <Switch>
            {/* <Header /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/books" component={Books} />
            <Route path="/" exact component={Home} />
            <RouteWithAuth path="/">
              <Switch>
                <Route path="/addBook" component={AddBook} />
                <Route path="/manageBook" component={ManageBook} />
              </Switch>
            </RouteWithAuth>
          </Switch>
        </DataProvider>
      </Router>
    </div>
  );
}

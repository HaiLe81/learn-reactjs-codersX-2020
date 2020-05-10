import React, { useEffect, useState } from "react";
import "./BookList.css";
import { Table } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";

export default function BookList(props) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // fetch data
    const url = "https://express-bookstore.herokuapp.com/api/v1/books/";
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview"
      })
    })
      .then(res => res.json())
      .then(res => {
        setBooks(res.fullBook);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(function filter() {
    const query = props.location.search;
    console.log("query", query);
    var url;
    if (!query) {
      url = "https://express-bookstore.herokuapp.com/api/v1/books/search?q=";
    } else {
      url = `https://express-bookstore.herokuapp.com/api/v1/books/search${query}`;
    }

    fetch(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview"
      })
    })
      .then(res => res.json())
      .then(res => {
        setBooks(res.listBook);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="q"
            // id=""
            placeholder="Enter your book"
          />
        </FormGroup>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Cover</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((item, index) => (
              <tr key={index}>
                <th scope="row">{`${(index += 1)}`}</th>
                <td>
                  <img src={item.coverUrl} alt="not found" />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

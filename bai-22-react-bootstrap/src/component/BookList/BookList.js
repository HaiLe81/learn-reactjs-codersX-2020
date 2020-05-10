import React, { useEffect, useState } from "react";
import "./BookList.css";
// import { Table } from "reactstrap";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Form, FormGroup, Input } from "reactstrap";
// const { Search } = Input;

export default function BookList(props) {
  const [books, setBooks] = useState([]);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Book Cover",
      dataIndex: "coverUrl",
      key: "coverUrl",
      render: url => <img src={url} alt="not found" />
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    }
  ];
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
    // fetch data
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
      <Table
        rowKey={record => record.uid}
        columns={columns}
        dataSource={books}
      />
    </div>
  );
}

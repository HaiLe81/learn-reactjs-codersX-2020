import React, { useContext } from "react";
import "./Books.css";
import { DataContext } from "../../context/DataProvider";
import { Table, Space, message } from "antd";
// import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function Books() {
  const context = useContext(DataContext);
  const books = context.listBook.books;
  const addToCart = context.actions.addToCart;

  const alertAdded = (title) => message.warning(`${title} is Added`);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => <Space size="middle">{index}</Space>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Cover Book",
      dataIndex: "coverUrl",
      key: "coverUrl",
      render: (url) => <img src={url} alt="not found" />,
    },
    {
      title: "Action",
      // dataIndex: "id",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <PlusOutlined onClick={() => addToCart(record, () => alertAdded(record.title))} />
        </Space>
      ),
    },
  ];
  return (
    <div className="books">
      <div className="searchBar">
        <form>
          <div className="form-group d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Book"
              name="q"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="b-table">
        <Table rowKey="id" dataSource={books} columns={columns} />
      </div>
    </div>
  );
}

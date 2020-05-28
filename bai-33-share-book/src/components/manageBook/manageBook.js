import React, { useContext } from "react";
import "./manageBook.css";
import { DataContext } from "../../context/DataProvider";
import { Table, Space, Button, message } from "antd";
import { randomLucky } from "../../services/luckynumber";

export const ManageBook = () => {
  const context = useContext(DataContext);
  const books = context.listBook.bookByUser;
  const random = (text) => {
    randomLucky(text).then((res) => {
      if (!res.user) {
        message[res.status](res.message);
      } else {
        message[res.status](`${res.message} ${res.user}`);
      }
    });
  };
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
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Book Category",
      dataIndex: "type",
      index: "type",
    },
    {
      title: "Action",
      key: "id",
      // dataIndex: ["id", "subType"],
      dataIndex: "id",
      render: (text) => {
        return (
          <Button onClick={() => random(text)} type="primary" size="small">
            Random
          </Button>
        );
      },
    },
  ];
  return (
    <div className="container mt-5">
      <Table rowKey="id" columns={columns} dataSource={books} />
    </div>
  );
};

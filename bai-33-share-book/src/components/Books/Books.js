import React, { useContext } from "react";
import "./Books.css";
import { DataContext } from "../../context/DataProvider";
import { Table, Space } from "antd";

export default function Books() {
  const context = useContext(DataContext);
  const books = context.listBook.books;
  const users = context.listUser.users;

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
      title: "Book Category",
      dataIndex: "type",
      index: "type",
      filters: [
        {
          text: "Chính Trị",
          value: "Chính Trị",
        },
        {
          text: "Giáo Trình",
          value: "Giáo Trình",
        },
        {
          text: "Tiểu Thuyết",
          value: "Tiểu Thuyết",
        },
        {
          text: "Văn Học Nghệ Thuật",
          value: "Văn Học Nghệ Thuật",
        },
        {
          text: "Lịch Sử",
          value: "Lịch Sử",
        },
        {
          text: "Chinh Thám",
          value: "Chinh Thám",
        },
      ],
      onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
      title: "By User",
      dataIndex: "byUser",
      index: "byUser",
      render: (text) => {
        const result = users.find((item) => item.id === text);
        return result.name;
      },
    }
  ];
  return (
    <div className="books">
      <div className="b-table">
        <Table rowKey="id" dataSource={books} columns={columns} />
      </div>
    </div>
  );
}

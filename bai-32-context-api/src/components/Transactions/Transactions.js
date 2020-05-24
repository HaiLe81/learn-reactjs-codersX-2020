import React, { useContext } from "react";
import "./Transactions.css";
import { Table, Space, message } from "antd";
import { DataContext } from "../../context/DataProvider";

export default function Transactions() {
  const context = useContext(DataContext);
  const data = context.listTrans.transactions;
  const users = context.listUser.users;
  const books = context.listBook.books
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => <Space size="middle">{index}</Space>,
    },
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
      render: (text) => {
        const result = users.find((item) => item.id === text);
        if (!result) return "Not Found";
        return result.name;
      },
    },
    {
      title: "Book",
      dataIndex: "bookId",
      key: "bookId",
      render: (text) => {
        let bookTitle = text.reduce((acc,cur) => {
          const title = books.find(item => item.id === cur).title
          return acc.concat(title);
        },[]).join(",")
        return bookTitle;
      }
    }
    // {
    //   title: "Action",
    //   // dataIndex: "id",
    //   key: "action",
    //   render: (record) => (
    //     <Space size="middle">
    //       <PlusOutlined
    //         onClick={() => addToCart(record, () => alertAdded(record.title))}
    //       />
    //     </Space>
    //   ),
    // },
  ];
  return (
    <div className="pt-5 t-wrapper">
      <div className="t-table">
        <Table rowKey="id" dataSource={data} columns={columns} />
      </div>
    </div>
  );
}

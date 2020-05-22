import React, { useContext, useMemo } from "react";
import "./cart.css";
import { DataContext } from "../../context/DataProvider";
import { Table, Space } from "antd";
import { MinusOutlined } from "@ant-design/icons";

export const Cart = () => {
  const context = useContext(DataContext);
  const cart = context.cart.cart;

  const books = useMemo(() => {
    let items = cart ? cart : [];
    items = Object.values(items);
    return items;
  }, [cart]);

  const removeBookInCart = context.actions.removeBookInCart;

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
      render: (book) => (
        <Space size="middle">
          <MinusOutlined onClick={() => removeBookInCart(book.id)} />
        </Space>
      ),
    },
  ];
  return (
    <div className="Cart">
      <Table rowKey="id" dataSource={books} columns={columns} />
    </div>
  );
};

import React, { useContext, useMemo, useState } from "react";
import "./cart.css";
import { DataContext } from "../../context/DataProvider";
import { Table, Space, Button, message } from "antd";
import { MinusOutlined } from "@ant-design/icons";

export const Cart = () => {
  const context = useContext(DataContext);
  const cart = context.cart.cart;
  const [loading, setLoading] = useState(false);

  const books = useMemo(() => {
    let items = cart ? cart : [];
    items = Object.values(items);
    return items;
  }, [cart]);
  const removeBookInCart = context.actions.removeBookInCart;
  const rent = context.actions.rentBook;
  const rentBook = () => {
    rent()
      .then((_) => {
        message.success("Rent Book Success!");
      })
      .catch((error) => message.error(error.message))
      .finally((_) => setLoading(false));
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
      <div>
        <Button
          loading={loading}
          disabled={cart === null ? true : false}
          type="primary"
          onClick={rentBook}
        >
          Rent
        </Button>
      </div>
    </div>
  );
};

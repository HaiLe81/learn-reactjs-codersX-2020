import React, { useContext } from "react";
import "./Users.css";
import { DataContext } from "../../context/DataProvider";
import { Table, Space, Button } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    render: (text, record, index) => <Space size="middle">{index}</Space>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Avatar",
    dataIndex: "avatarUrl",
    key: "avatarUrl",
    render: (url) => <img src={url} alt="not found" />,
  },
  {
    title: "Action",
    dataIndex: "id",
    key: "id",
    render: (text, record, index) => (
      <Space size="middle">
        <Button type="primary">
          <Link to="/">View</Link>
          {/* View */}
        </Button>
      </Space>
    ),
  },
];
export default function Users() {
  const context = useContext(DataContext);

  const listUser = context.listUser.users;

  return (
    <div className="users">
      <div className="searchBar">
        <form>
          <div className="form-group d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Name User"
              name="q"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="u-table">
        <Table rowKey="id" dataSource={listUser} columns={columns} />
      </div>
    </div>
  );
}

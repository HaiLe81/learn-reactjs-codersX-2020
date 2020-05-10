import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "../ManageShop/ManageShop.css";

const ManageShop = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="container pt-3">
      <h5>My Books</h5>
      <Table className="mt-3" dark>
        <thead>
          <tr>
            <th>STT</th>
            <th>Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>999 Điều cần biết để thành công</td>
            <td>
              <Button>Đang Mượn</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Learn Reactjs</td>
            <td>
              <Button>Hoàn Thành</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Learn Nodejs</td>
            <td>
              <Button>Hoàn Thành</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>Add Books</h5>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Learn Reactjs</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Learn Reactjs</DropdownItem>
          <DropdownItem>Learn Express</DropdownItem>
          <DropdownItem>Tôi tài giỏi bạn cũng thế</DropdownItem>
          <DropdownItem>1000 Điều Khó Hiểu Của Phụ Nữ</DropdownItem>
          <DropdownItem>Bí kíp susan thầy giáo ba</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button className="mt-3" color="primary">
        Add
      </Button>
    </div>
  );
};
export default ManageShop;

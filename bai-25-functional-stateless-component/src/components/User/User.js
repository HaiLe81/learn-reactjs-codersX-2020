import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Form,
  Table,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "../User/User.css";
// import PropTypes from "prop-types";

const User = props => {
  return (
    <div className="container pt-3">
      <h1>List User</h1>
      <Form inline>
        <Input type="text" name="q" />
        <Button color="primary">Search</Button>
      </Form>
      <Button className="mt-3" color="primary">
        Create User
      </Button>
      <Table className="mt-3" dark>
        <thead>
          <tr>
            <th>STT</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Phạm Thị Thanh</td>
            <td>
              <Button>View</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Lê Khắc Hải</td>
            <td>
              <Button>View</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Admin</td>
            <td>
              <Button>View</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default User;

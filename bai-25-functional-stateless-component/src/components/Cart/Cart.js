import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "../Cart/Cart.css";

const Cart = props => {
  return (
    <div className="container pt-3">
      <h1>My Order</h1>
      <Table className="mt-3" dark>
        <thead>
          <tr>
            <th>STT</th>
            <th>Book Name</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>999 Điều cần biết để thành công</td>
            <td>8</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Learn Reactjs</td>
            <td>1</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Learn Nodejs</td>
            <td>1</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button className="mt-3" color="primary">
        Rent
      </Button>
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
export default Cart;

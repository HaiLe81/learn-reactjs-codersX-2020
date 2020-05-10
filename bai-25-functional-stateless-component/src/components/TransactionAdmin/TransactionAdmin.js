import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "../TransactionAdmin/TransactionAdmin.css";

const TransactionAdmin = props => {
  return (
    <div className="container pt-3">
      <h1>Transactions</h1>
      <Button className="mt-3" color="primary">
        Create Transaction
      </Button>
      <Table className="mt-3" dark>
        <thead>
          <tr>
            <th>STT</th>
            <th>User</th>
            <th>List Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Phạm Thị Thanh</td>
            <td>
              <ul>
                <li>999 Điều cần biết để thành công</li>
                <li>Bí kíp Susan Thầy Giáo Ba</li>
              </ul>
            </td>
            <td>
              <Button>Đang Mượn</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Lê Khắc Hải</td>
            <td>
              <ul>
                <li>999 Điều cần biết để thành công</li>
                <li>Bí kíp Susan Thầy Giáo Ba</li>
              </ul>
            </td>
            <td>
              <Button>Hoàn Thành</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Phạm Thị Thanh</td>
            <td>
              <ul>
                <li>999 Điều cần biết để thành công</li>
                <li>Bí kíp Susan Thầy Giáo Ba</li>
              </ul>
            </td>
            <td>
              <Button>Hoàn Thành</Button>
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
export default TransactionAdmin;

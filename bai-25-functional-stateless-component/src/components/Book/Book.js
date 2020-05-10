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
import "../Book/Book.css";

const Book = props => {
  return (
    <div className="container pt-3">
      <h1>List Book</h1>
      <Form inline>
        <Input type="text" name="q" />
        <Button color="primary">Search</Button>
      </Form>
      <Button className="mt-3" color="primary">
        Create Book
      </Button>
      <Table className="mt-3" dark>
        <thead>
          <tr>
            <th>STT</th>
            <th>Book Title</th>
            <th />
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>9999 Điều Cần Biết Để Thành Công</td>
            <td>
              <img
                className="rounded-circle"
                alt="not found"
                src="https://arm256.com/jspui/image/default-cover-item.jpg"
              />
            </td>
            <td>
              <Button>Add</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Học Code Tại CodersX</td>
            <td>
              <img
                className="rounded-circle"
                alt="not found"
                src="http://res.cloudinary.com/hai-le/image/upload/v1588086306/wbe3zfw3xa8gbch5rihr.png"
              />
            </td>
            <td>
              <Button>Add</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bý kíp Susan Thầy Giáo Ba</td>
            <td>
              <img
                className="rounded-circle"
                alt="not found"
                src="https://arm256.com/jspui/image/default-cover-item.jpg"
              />
            </td>
            <td>
              <Button>Add</Button>
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
export default Book;

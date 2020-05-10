import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../CreateBook/CreateBook.css";

const CreateBook = () => {
  return (
    <div className="container pt-3">
      <h1>Create Book</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputTitle">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputDescription">Description</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputDescription"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputBookCover">Book Cover</label>
          <input type="file" className="block" id="exampleInputBookCover" />
        </div>
        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateBook;

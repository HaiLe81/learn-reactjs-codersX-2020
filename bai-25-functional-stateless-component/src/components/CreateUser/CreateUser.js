import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CreateUser = () => {
  return (
    <div className="container pt-3">
      <h1>Create User</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputname">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateUser;

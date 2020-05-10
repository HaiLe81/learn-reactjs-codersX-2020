import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Profile/Profile.css";

const CreateBook = () => {
  return (
    <div className="container pt-3">
      <div className="img">
        <img
          className="avatar img-fluid rounded-circle"
          src="https://i.ya-webdesign.com/images/default-avatar-png-18.png"
          alt="not found"
        />
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputTitle">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail">Email</label>
          <input type="text" className="form-control" id="exampleInputEmail" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword">Password</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputAvatarCover">Avatar</label>
          <input type="file" className="block" id="exampleInputAvatarCover" />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};
export default CreateBook;

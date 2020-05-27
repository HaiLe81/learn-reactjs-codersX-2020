import React, { useState, useContext } from "react";
import "./AddBook.css";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, message } from "antd";
import { DataContext } from "../../context/DataProvider";
import { createBook } from "../../services/book";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function AddBook() {
  const context = useContext(DataContext);
  const userId = context.account.user.id;
  const [image, setImage] = useState("");

  const onFinish = (values) => {
    values.coverUrl = image;
    const data = {
      title: values.title,
      description: values.description,
      byUser: userId,
      coverUrl: values.coverUrl,
      type: values.type,
      subType: values.subType,
    };
    console.log('data', data)
    createBook(data)
      .then((res) => {
        message[res.status](res.message);
      })
      .catch((err) => {
        message[err.status](err.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "darwin");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/hai-le/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    setImage(file.secure_url);
  };

  return (
    <div className="container mt-5">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input book title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="type" label="Book Category">
          <Select>
            <Select.Option value="Chinh Thám">Chinh Thám</Select.Option>
            <Select.Option value="Giáo Trình">Giáo Trình</Select.Option>
            <Select.Option value="Tiểu Thuyết">Tiểu Thuyết</Select.Option>
            <Select.Option value="Văn Học Nghệ Thuật">
              Văn Học Nghệ Thuật
            </Select.Option>
            <Select.Option value="Lịch Sử">Lịch Sử</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="subType" label="subType">
          <Select>
            <Select.Option value="public">Give away</Select.Option>
            <Select.Option value="private">Normal</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Upload">
          <div className="custom-file">
            <input
              name="file"
              type="file"
              placeholder="Upload an image"
              onChange={upLoadImage}
            />
          </div>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

import React, { useState, useMemo, useContext } from "react";
import "./login.css";
import "antd/dist/antd.css";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import { useRouter } from "../../../hooks/useRouter";
import { login } from "../../../services/auth";
import { DataContext } from "../../../context/DataProvider";

export default function Login() {
  const context = useContext(DataContext);

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const onChangeFields = (_, allFields) => {
    const isValid = allFields.every(
      (field) => field.errors.length === 0 && field.touched === true
    );
    setIsValidForm(isValid);
  };

  const initialValues = useMemo(() => {
    const { email = "", password = "" } = router.state || {};
    if (email) setIsValidForm(true);
    return { email, password };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = ({ email, password }) => {
    setLoading(true);
		login(email, password)
			.then((res) => {
        setLoading(false);
        context.auth.setIsAuthenticated(true)
        context.account.setUser(res.user)
				message[res.status](res.message);
        let to = '/'
				if (router.state && router.state.from) {
          to = router.state.from
        }
        router.push(to);
			})
			.catch((error) => {
        setLoading(false);
				message[error.status](error.message);
			});
	};

  return (
    <div className="sign-in-page d-flex-center flex-column">
      <div className="card">
        <div className="title" />
        <div className="sign-in-form">
          <Form
            initialValues={initialValues}
            onFieldsChange={onChangeFields}
            scrollToFirstError
            name="sign-in"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Hãy nhập email của bạn!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
              hasFeedback
            >
              <Input className="form-input" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Hãy nhập mật khẩu của bạn!" },
              ]}
              hasFeedback
            >
              <Input.Password className="form-input" placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!isValidForm}
                type="primary"
                htmlType="submit"
                loading={loading}
                className="form-button"
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
          <Link className="forgot-link" to="/forget">
            Bạn quên mật khẩu?
          </Link>
        </div>
      </div>
      <div className="card d-flex-center">
        <span>
          Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
        </span>
      </div>
    </div>
  );
}

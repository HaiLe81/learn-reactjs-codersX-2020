import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "/auth";

export const registerAccount = async ({ name, email, password }) => {
  try {
    await axios({
      method: "post",
      url: `${pathname}/register`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return { status: status.success, message: messages.register.success };
  } catch (error) {
    const { message = messages.register.failed } =
      (error.response && error.response.data) || {};
    throw new RequestException(status.error, message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios({
      method: "post",
      url: `${pathname}/login`,
      data: {
        email: email,
        password: password,
      },
    });
    const { user } = response.data;
    return { status: status.success, message: messages.login.success, user };
  } catch (error) {
    const { message = messages.login.failed } =
      (error.response && error.response.data) || {};
    throw new RequestException(status.error, message);
  }
};

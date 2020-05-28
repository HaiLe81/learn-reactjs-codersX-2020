import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "bookShare";

export const registerNumber = async ({ userId, email }) => {
  try {
    const response = await axios({
      method: "post",
      url: `${pathname}/luckynumber`,
      data: { userId, email },
    });
    const { number } = response.data;

    return {
      status: status.success,
      message: messages.number.create.success,
      number,
    };
  } catch (error) {
    throw new RequestException(status.error, messages.number.create.failed);
  }
};

export const randomLucky = async (bookId) => {
  try {
    const response = await axios({
      method: "post",
      url: `${pathname}/luckynumbers`,
      data: { bookId: bookId },
    });
    const { user } = response.data;
    if (!user) {
      return {
        status: status.success,
        message: response.data.message,
      };
    }
    return {
      status: status.success,
      message: messages.randomLucky.create.success,
      user,
    };
  } catch (error) {
    throw new RequestException(
      status.error,
      messages.randomLucky.create.failed
    );
  }
};

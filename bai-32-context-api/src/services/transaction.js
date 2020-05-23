import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "/transactions";

export const createTransacton = async ({ userId, bookId }) => {
  try {
    await axios({
      method: "post",
      url: `${pathname}/`,
      data: {
        user: userId,
        book: bookId
      },
    });
    return { status: status.success, message: messages.transactions.success };
  } catch (error) {
    const { message = messages.transactions.create.failed } =
      (error.response && error.response.data) || {};
    throw new RequestException(status.error, message);
  }
};
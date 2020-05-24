import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "/transactions";

export const createTransacton = async (userId, bookId) => {
  return axios({
    method: "post",
    url: `${pathname}/`,
    data: {
      userId: userId,
      bookId: bookId,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const messageError =
        (err.response && err.response.data && err.response.data.message) ||
        "add transaction failed";
      throw new Error(messageError);
    });
};

export const getTransaction = async () => {
  try {
    const result = await axios({
      method: "get",
      url: `${pathname}/`,
    }).then((res) => res.data.fillListTransactions);
    return result;
  } catch (error) {
    throw new RequestException(status.error, messages.transactions.get.failed);
  }
};

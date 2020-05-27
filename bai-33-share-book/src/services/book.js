import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "/bookShare/books";

export const getBooks = async () => {
  try {
    const result = await axios({
      method: "get",
      url: `${pathname}/`,
    }).then((res) => res.data.fullBook);
    return result;
  } catch (error) {
    throw new RequestException(status.error, messages.books.get.failed);
  }
};

export const createBook = async ({
  title,
  description,
  type,
  subType,
  coverUrl,
  byUser,
}) => {
  try {
    const response = await axios({
      method: "post",
      url: `${pathname}`,
      data: {
        title,
        description,
        type,
        subType,
        coverUrl,
        byUser,
      },
    });
    const { newBook } = response.data;

    return {
      status: status.success,
      message: messages.books.create.success,
      newBook,
    };
  } catch (error) {
    throw new RequestException(status.error, messages.books.create.failed);
  }
};

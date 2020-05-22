import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "/books";

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
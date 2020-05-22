import { axios } from "../config/axios";
import { status, messages } from "../config/globals";
import { RequestException } from "../utils/index";

const pathname = "/users";

export const getUsers = async () => {
  try {
    const result = await axios({
      method: "get",
      url: `${pathname}/`,
    }).then((res) => res.data.listUser);
    return result;
  } catch (error) {
    throw new RequestException(status.error, messages.users.get.failed);
  }
};

export const getUser = async (id) => {
  try {
    const result = await axios({
      method: "get",
      url: `${pathname}/:id`,
    }).then(res => res.data.user)
    return result;
  } catch (error) {
    throw new RequestException(status.error, messages.user.get.failed);
  }
};

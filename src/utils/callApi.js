import { api } from "./config";
import Axios from "axios";

export const CallAPI = (uri, method = "GET", body, headers, Api = api) => {
  return Axios({
    method,
    url: `${Api}/${uri}`,
    data: body
  });
};

import { api, apiDevFast } from "./config";
import Axios from "axios";

export const CallAPI = (
  uri,
  method = "GET",
  body,
  headers,
  Api = apiDevFast
) => {
  return Axios({
    method,
    url: `${Api}/${uri}`,
    data: body,
    headers
  });
};

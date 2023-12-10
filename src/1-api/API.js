import axios from "axios";
import AuthServices from "../6-services/AuthService";
import endpoints from "./endpoints";

const API = axios.create({
  baseURL: `${endpoints.serverBaseURL}/api/v1`,
});

API.interceptors.request.use((req) => {
  const aToken = sessionStorage.getItem("access");
  if (aToken && req.headers) {
    req.headers["authorization"] = aToken;
  }
  return req;
});
API.interceptors.response.use(
  (res) => {
    console.log("response intersepetor");
    return res;
  },
  async (err) => {
    console.error(err);
    if (err.response.status == 420) {
      // access token expaired
      const response = await AuthServices.refreshToken();
      // token refresh
      if (response.data?.data) {
        const { accessT, refreshT } = response?.data?.data;
        sessionStorage.clear();
        sessionStorage.setItem("refresh ", refreshT);
        sessionStorage.setItem("accesss ", accessT);
        return Promise.resolve({ data: null, message: "token refreshed" });
      } else {
        //clud not refreshed token
        sessionStorage.clear();
        window.location.href = "/login";
      }
    } else {
      return Promise.reject(err);
    }
  }
);

export default API;

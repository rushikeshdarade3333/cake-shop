import API from "../1-api/API";
import endpoints from "../1-api/endpoints";
class AuthService {
  static UserLogin(user) {
    return API.post(endpoints.api.auth.userLogin, user).then((response) => {
      const accessToken = response.headers["x-access-token"];
      const refreshToken = response.headers["x-refresh-token"];
      sessionStorage.setItem("refresh", refreshToken);
      sessionStorage.setItem("access", accessToken);
      return response;
    });
  }
  static validateToken() {
    
    return API.post(endpoints.api.auth.validateToken, {});
  }

  static refreshToken() {
    const refresh = sessionStorage.getItem("refresh");
    if (!refresh) return Promise.reject("Token not avilable");
    return API.post(endpoints.api.auth.refreshToken, { refresh });
  }
}

export default AuthService;

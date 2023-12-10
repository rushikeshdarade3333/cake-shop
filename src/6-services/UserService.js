import API from "../1-api/API";
import endpoints from "../1-api/endpoints";
class UserService {
  static createUser(user) {
    return API.post(endpoints.api.user.create, user);
  }
  static updateUser(id, user) {
    return API.put(endpoints.api.user.update + id, user);
  }

  static deleteUser(id) {
    return API.delete(endpoints.api.user.delete + id);
  }
  static fetchOneUser(id) {
    return API.get(endpoints.api.user.getOne + id);
  }

  static fetchAllUser(query) {
    return API.get(endpoints.api.user.getAll);
  }

  static fetchAllUser(query) {
    const url = query
      ? endpoints.api.user.getAll + query
      : endpoints.api.user.getAll;
    return API.get(url);
  }
}

export default UserService;

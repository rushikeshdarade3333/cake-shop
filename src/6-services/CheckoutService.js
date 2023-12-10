import API from "../1-api/API";
import endpoints from "../1-api/endpoints";
class CheckoutService {
  static createUser(user) {
    return API.post(endpoints.api.checkout.create, user);
  }
  static updateUser(id, user) {
    return API.put(endpoints.api.checkout.update + id, user);
  }

  static deleteUser(id) {
    return API.delete(endpoints.api.checkout.delete + id);
  }
  static fetchOneUser(id) {
    return API.get(endpoints.api.checkout.getOne + id);
  }

  static fetchAllUser(query) {
    const url = query
      ? endpoints.api.checkout.getAll + query
      : endpoints.api.checkout.getAll;
    return API.get(url);
  }
}

export default CheckoutService;

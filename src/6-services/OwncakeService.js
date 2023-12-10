import API from "../1-api/API";
import endpoints from "../1-api/endpoints";
class OwncakeService {
  static createOwncake(cake) {
    return API.post(endpoints.api.owncake.create, cake);
  }
  static updatecakes(id, cake) {
    return API.put(endpoints.api.owncake.update + id, cake);
  }

  static deletecakes(id) {
    return API.delete(endpoints.api.owncake.delete + id);
  }
  static fetchOnecakes(id) {
    return API.get(endpoints.api.owncake.getOne + id);
  }

  static fetchAllcakes(query) {
    return API.get(endpoints.api.owncake.getAll);
  }

  static fetchAllcakes(query) {
    const url = query
      ? endpoints.api.owncake.getAll + query
      : endpoints.api.owncake.getAll;
    return API.get(url);
  }
}

export default OwncakeService;

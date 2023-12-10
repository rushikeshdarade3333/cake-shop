import API from "../1-api/API";
import endpoints from "../1-api/endpoints";
class CakeService {
  static createUser(cake) {
    return API.post(endpoints.api.cake.create, cake);
  }
  static fetchAllBooking(cakes) {
    return API.post(endpoints.api.cake.getAll, cakes);
  }
}

export default CakeService;

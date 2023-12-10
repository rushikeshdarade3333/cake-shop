import API from "../1-api/API";
import endpoints from "../1-api/endpoints";

class BookingService {
  static createBooking(booking) {
    return API.post(endpoints.api.booking.create, booking);
  }
  static updateBooking(id, cake) {
    return API.put(endpoints.api.booking.update + id, cake);
  }

  static deleteBooking(id) {
    return API.delete(endpoints.api.booking.delete + id);
  }
  static fetchOneBooking(id) {
    return API.get(endpoints.api.booking.getone + id);
  }

  static fetchAllBooking(query) {
    const url = query
      ? endpoints.api.booking.getAll + query
      : endpoints.api.booking.getAll;
    return API.get(url);
  }
}

export default BookingService;

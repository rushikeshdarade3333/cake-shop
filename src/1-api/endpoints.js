export default {
  serverBaseURL: "https://cakeshop-server.vercel.app",
  // serverBaseURL: "http://localhost:2020",
  api: {
    user: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getOne: "/users/",
      getAll: "/users",
    },
    cake: {
      create: "/cake",
      update: "/cake/",
      delete: "/cake/",
      getone: "/cake/",
      getAll: "/cake",
    },
    booking: {
      create: "/booking",
      update: "/booking/",
      delete: "/booking/",
      getone: "/booking/",
      getAll: "/booking",
    },
    checkout: {
      create: "/checkout",
      update: "/checkout/",
      delete: "/checkout/",
      getOne: "/checkout/",
      getAll: "/checkout",
    },
    owncake: {
      create: "/owncake",
      update: "/owncake/",
      delete: "/owncake/",
      getOne: "/owncake/",
      getAll: "/owncake",
    },
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
  },
};

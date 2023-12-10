import { lazy } from "react";

import ShopIcon from "@mui/icons-material/Shop";
import CategoryIcon from "@mui/icons-material/Category";
import CustomerIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Cake";
import DeliveryMapIcon from "@mui/icons-material/Map";
import Abc from "@mui/icons-material/Label";
import AccessAlarm from "@mui/icons-material/RequestPage";

const Customers = lazy(() =>
  import("../../3-feature/admin/customers/Customers")
);
const ShopProfile = lazy(() =>
  import("../../3-feature/admin/shop-profile/ShopProfile")
);
const CakeBooking = lazy(() =>
  import("../../3-feature/admin/cake-bookings/CakeBooking")
);
const Booking = lazy(() => import("../../3-feature/admin/Booking/Booking"));
const Checkout = lazy(() => import("../../3-feature/admin/checkout/Checkout"));
const BookCake = lazy(() => import("../../3-feature/admin/cart/BookCake"));
const Cart = lazy(() => import("../../3-feature/admin/cart/Cart"));
const CheckoutList = lazy(() =>
  import("../../3-feature/admin/checkout/CheckoutList")
);
const Owncakeinput = lazy(() =>
  import("../../3-feature/admin/owncake/Owncakeinput")
);
const OwnBooking = lazy(() =>
  import("../../3-feature/admin/owncake/OwnBooking")
);
const UserProfile = lazy(() =>
  import("../../3-feature/admin/profile/UserProfile")
);

export default [
  {
    label: "Shop Profile",
    path: "",
    ShowInMenu: true,
    component: <ShopProfile />,
    icon: <ShopIcon />,
    roles: ["admin", "customer", "divevryman"],
    hasSubRoutes: false,
  },
  {
    label: "Categories",
    path: "cakebooking",
    ShowInMenu: true,
    component: <CakeBooking />,
    icon: <BookIcon />,
    roles: ["admin", "customer"],
    hasSubRoutes: true,
  },
  {
    label: "Owncake",
    path: "owncakes",
    ShowInMenu: true,
    component: <Owncakeinput />,
    icon: <AccessAlarm />,
    roles: ["admin", "customer"],
    hasSubRoutes: true,
  },

  {
    label: "Cart",
    path: "cart",
    ShowInMenu: false,
    component: <Cart />,
    icon: <BookIcon />,
    addRoute: true,
    roles: ["admin", "customer"],
    hasSubRoutes: true,
  },
  {
    label: "Checkout",
    path: "checkout",
    ShowInMenu: false,
    addRoute: true,
    component: <Checkout />,
    icon: <DeliveryMapIcon />,
    roles: ["admin", "customer"],
    hasSubRoutes: true,
  },
  {
    label: "Booking",
    path: "book-room",
    ShowInMenu: false,
    addRoute: true,
    component: <BookCake />,
    roles: ["admin", "customer"],
    hasSubRoutes: true,
  },
  {
    label: "Customers",
    path: "customers",
    ShowInMenu: true,
    component: <Customers />,
    icon: <CustomerIcon />,
    roles: ["admin"],
    hasSubRoutes: true,
  },
  {
    label: "Booking",
    path: "Booking",
    ShowInMenu: true,
    component: <Booking />,
    icon: <CategoryIcon />,
    roles: ["admin"],
    hasSubRoutes: true,
  },

  {
    label: "Ownbookinglist",
    path: "Ownbookinglist",
    ShowInMenu: true,
    component: <OwnBooking />,
    icon: <Abc />,
    roles: ["admin"],
    hasSubRoutes: true,
  },

  {
    label: "Booking Cake List",
    path: "checkoutlist",
    ShowInMenu: true,
    component: <CheckoutList />,
    icon: <DeliveryMapIcon />,
    roles: ["admin", "divevryman"],
    hasSubRoutes: true,
  },

  {
    label: "userprofile",
    path: "userprofile",
    ShowInMenu: false,
    component: <UserProfile />,
    addRoute: true,
    roles: ["admin", "customer"],
    hasSubRoutes: true,
  },
];

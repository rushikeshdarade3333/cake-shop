import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectUser } from "../../../src/Slices/authSlice.js";
import routes from "../../5-shared/routes/AdminRoutes";
const SideBarRoute = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        {Array.isArray(routes) &&
          routes
            .filter((route) => route.roles.includes(loggedUser.role))
            .map(({ path, component, hasSubRoutes }, i) => (
              <Route
                key={path + "-" + i}
                path={hasSubRoutes ? `${path}/*` : path}
                element={component}
              />
            ))}
      </Routes>
    </Suspense>
  );
};

export default SideBarRoute;

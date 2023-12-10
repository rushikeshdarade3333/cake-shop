import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import BlankLayout from "./4-layout/blank-layout/BlankLayout";
import FullLayout from "./4-layout/full-layout/FullLayout";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addUser } from "../src/Slices/authSlice.js";

import { useEffect } from "react";
import AuthService from "./6-services/AuthService";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    AuthService.validateToken()
      .then((response) => {
        console.log(response.data, "valid token");
        dispatch(addUser(response?.data.data));
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 403) {
          sessionStorage.clear();
          navigate("/login");
        }
      });
  });

  const token = sessionStorage.getItem("access");
  return loggedUser._id || token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
        <Route
          path="/secured/*"
          element={
            <ProtectedRoute>
              <FullLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

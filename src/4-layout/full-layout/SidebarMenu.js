import React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import routes from "../../5-shared/routes/AdminRoutes";
import { selectUser } from "../../Slices/authSlice";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const SidebarMenu = ({ open }) => {
  const loggedUser = useSelector(selectUser);
  return (
    <>
      <List>
        {Array.isArray(routes) &&
          routes
            .filter((route) => route.ShowInMenu)
            .filter((route) => route?.roles.includes(loggedUser.role))
            .map(({ path, label, icon }, index) => (
              <ListItem
                key={path + "-" + index}
                disablePadding
                sx={{ display: "block" }}
              >
                <NavLink
                  end
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#999",
                    textDecoration: "none",
                    fontSize: "20px",
                  })}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default SidebarMenu;

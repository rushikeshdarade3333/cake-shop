import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import routes from "../../5-shared/routes/FrontendRoutes";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./box.css";

const NavLink = styled(Link)({
  textDecoration: "none",
  margin: "0 5px",
});
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tasty Cake Shop
      </Typography>
      <Divider />
      <List>
        {routes.map(({ path, label }) => (
          <ListItem key={path}>
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) => ({
                width: "100",
                color: isActive ? "#aaa" : "#000",
              })}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className="box"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundImage:
          "url(https://media.istockphoto.com/photos/woman-making-cakes-in-cake-manufacture-picture-id1143548242?k=6&m=1143548242&s=170667a&w=0&h=7f9oP0Iv6tJ4vodh1aLTvtMu52dyFu2zKckWDVNoUFc=)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
      }}
    >
      <AppBar component="nav" style={{ backgroundColor: "	#000" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: 30,
              display: {
                xs: "none",
                sm: "block",
                fontWeight: "bold",
                fontSize: 34,
              },
            }}
          >
            <img
              style={{ height: 50, width: 50 }}
              src={"Images/cake-svgrepo-com.svg"}
            />{" "}
            Tasty Cake Shop
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  color: isActive ? "#aaa" : "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                })}
              >
                {label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Routes>
          {Array.isArray(routes) &&
            routes.map(({ path, component }, i) => (
              <Route key={path + i} path={path} element={component} />
            ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default Header;

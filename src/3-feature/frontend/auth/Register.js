import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import UserService from "../../../6-services/UserService";
import { Paper } from "@mui/material";
import Swal from "sweetalert2";

const theme = createTheme();

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    name: {
      first: "",
      last: "",
    },
    status: 1,
    role: "customer",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    if (user?.name)
      setUser({ ...user, name: { ...user?.name, [name]: value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(user);
  };

  const registerUser = () => {
    const fd = new FormData();
    fd.append("name.first", user.name?.first);
    fd.append("name.last", user.name?.last);
    fd.append("email", user.email);
    fd.append("mobile", user.mobile);
    fd.append("gender", user.gender);
    fd.append("password", user.password);
    fd.append("status", user.status);
    fd.append("role", user.role);

    UserService.createUser(fd)
      .then((response) => {
        const message = response.data.message || "created";
        alert("successfully register");
        navigate("/login");
      })
      .catch((err) => {
        const message = err.response.data.message || "not created ";
        alert(message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" display="flex">
        <CssBaseline />
        <Grid>
          <Paper
            style={{
              padding: "30px",
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="first"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={handleNameChange}
                      value={user.name.first}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="last"
                      autoComplete="family-name"
                      onChange={handleNameChange}
                      value={user.name.last}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      value={user.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mobile"
                      label="Mobile No "
                      name="mobile"
                      autoComplete="mobile"
                      onChange={handleChange}
                      value={user.mobile}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="gender"
                      label="Gender "
                      name="gender"
                      autoComplete="gender"
                      onChange={handleChange}
                      value={user.gender}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChange}
                      value={user.password}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default Register;

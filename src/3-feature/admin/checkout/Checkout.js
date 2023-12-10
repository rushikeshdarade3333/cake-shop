import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CheckoutService from "../../../6-services/CheckoutService";

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
    fd.append("flatno", user.flatno);
    fd.append("email", user.email);
    fd.append("landmark", user.landmark);
    fd.append("city", user.city);
    fd.append("state", user.state);
    fd.append("pincode", user.pincode);
    fd.append("mobile", user.mobile);
    fd.append("status", user.status);
    fd.append("role", user.role);

    CheckoutService.createUser(fd)
      .then((response) => {
        const message = response.data.message || "created";
        alert(message);
      })
      .catch((err) => {
        const message = err.response.data.message || "not created ";
        alert(message);
      });
  };
  const handleBooking = () => {
    navigate(`/secured/book-room`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="sm"
        style={{ backgroundColor: "#fff" }}
      >
        <Box>
          <Typography component="h1" variant="h5">
            <h2 style={{ fontWeight: "bold" }}>Checkout page</h2>
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
                  label="mobile"
                  name="mobile"
                  autoComplete="mobile"
                  onChange={handleChange}
                  value={user.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  rows={5}
                  fullWidth
                  id="flatno"
                  label="Full Address"
                  name="flatno"
                  autoComplete="flatno"
                  onChange={handleChange}
                  value={user.flatno}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              color="success"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleBooking}
            >
              go
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;

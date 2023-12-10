import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import OwncakeService from "../../../6-services/OwncakeService";
// import { styled } from "@mui/styles";
import { NavLink } from "react-router-dom";

const Owncakeinput = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    flavour: "",
    categorie: "",
    message: "",
  };
  const [Owncakeinput, setOwncakeinput] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwncakeinput({ ...Owncakeinput, [name]: value });
    e.preventDefault();
  };
  const handleSubmit = () => {
    console.log("Owncakeinput: ", Owncakeinput);
    OwncakeService.createOwncake(Owncakeinput)
      .then((response) => {
        // loadMemberships();
        alert("fev cake requst Sent  ");
      })
      .catch((err) => {
        alert("requst not Sent");
      });
    setOwncakeinput(initialState);
  };

  return (
    <Box>
      <Box
        sx={{
          color: "#ed563b",
          fontWeight: "700",
          letterSpacing: "2.5px",
          fontSize: 40,
          p: 4,
        }}
        align="center"
      >
        Booking Your Own Cake As You required
      </Box>
      <Box
        mx="auto"
        // height="400px"
        borderRadius="10px"
        sx={{
          boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
          width: { lg: "80%" },
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#fff",
        }}
      >
        {/* <Card
        sx={{
          maxWidth: 450,
          marginLeft: "5px",
          padding: "5px 5px",
        }}
      > */}
        <CardContent>
          <Grid container spacing={1} sx={{ color: "white" }}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                placeholder="Enter first name"
                varient="outlined"
                name="firstName"
                value={Owncakeinput.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                varient="outlined"
                name="lastName"
                value={Owncakeinput.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter email"
                varient="outlined"
                name="email"
                value={Owncakeinput.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="number"
                label="Phone"
                placeholder="Enter phone number"
                varient="outlined"
                name="mobile"
                value={Owncakeinput.mobile}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} item>
              <TextField
                type="flavour"
                label="Flavour"
                placeholder="Enter you req flavour"
                varient="outlined"
                name="flavour"
                value={Owncakeinput.flavour}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} item>
              <TextField
                type="categorie"
                label="Categorie"
                placeholder="Enter you req categorie"
                varient="outlined"
                name="categorie"
                value={Owncakeinput.categorie}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} item>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Enter message"
                varient="outlined"
                name="message"
                value={Owncakeinput.message}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item sx={{ display: "flex" }}>
              <Box onClick={handleSubmit} style={{ color: "red" }}>
                Send your reqirement
                <ListItemIcon>
                  <SendIcon sx={{ margin: "0 auto", color: "white" }} />
                </ListItemIcon>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        {/* </Card> */}
      </Box>
    </Box>
  );
};

export default Owncakeinput;

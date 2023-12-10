import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Slices/authSlice.js";
import Swal from "sweetalert2";
import UserService from "../../../6-services/UserService";
import DeleteIcon from "@mui/icons-material/Delete";

const UserProfile = () => {
  const loggedUser = useSelector(selectUser);
  const { name, email, mobile, gender, createdAt } = loggedUser;

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            loggedUser();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Not Deleted!", "User has not been deleted.", "error");
          });
      }
    });
  }; //deleteUsers
  return (
    <Grid
      mx="auto"
      borderRadius="10px"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "5px 5px 25px rgba(0,0,0,0.4)",
        width: { xs: "300px", md: "800px" },
        padding: "30px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            name="first_name"
            value={name.first}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            name="last_name"
            value={name.last}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={email}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={mobile}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Gender"
            name="gender"
            value={gender}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Accunt create"
            name="createdAt"
            value={createdAt}
            disabled
          />
        </Grid>
        <Grid>
          <IconButton color="error" onClick={deleteUser}>
            <DeleteIcon />
            Delete Accunt
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfile;

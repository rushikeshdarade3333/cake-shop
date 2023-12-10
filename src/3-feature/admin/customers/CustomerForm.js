import * as React from "react";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Divider } from "@mui/material";
import UserService from "../../../6-services/UserService";
import CustomerContext from "./CustomerContext";

const userSchema = yup.object().shape({
  name: yup.object({
    first: yup.string().min(3, "too short"),
    last: yup.string().min(3, "too short"),
  }),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits"),
  email: yup.string().email(),
  password: yup.string().min(5, "too short"),
  gender: yup.string(),
  role: yup.string(),
  avatar: yup.string(),
  idDoc: yup.string(),
  status: yup.number(),
  dob: yup.date(),
  address: yup.object({
    street: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup.string(),
  }),
});

const CustomerForm = () => {
  const { initialUser, handleDialogClose, operation, loadUsers } =
    React.useContext(CustomerContext);

  const handleSubmit = (user) => {
    const fd = new FormData();
    fd.append("name.first", user.name?.first);
    fd.append("name.last", user.name?.last);

    if (user.address) {
      for (const p in user.address) fd.append(`address.${p}`, user.address[p]);

      for (const p in user.address) fd.append(`address.${p}`, user.address[p]);
    }

    const propsArr = ["name", "_id", "address", "createdAt"];
    for (const prop in user) {
      if (!propsArr.includes(prop)) fd.append(prop, user[prop]);
    }

    if (operation == "edit") {
      // update user
      UserService.updateUser(user._id, fd)
        .then((response) => {
          alert("user updated...");
          loadUsers && loadUsers();
          handleDialogClose();
        })
        .catch((err) => {
          alert("not updated");
          console.error(err);
        });
    } else {
      // create user
      UserService.createUser(fd)
        .then((response) => {
          alert("user created...");
          loadUsers && loadUsers();
          handleDialogClose();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <Formik
      initialValues={{
        name: {
          first: "",
          last: "",
        },
        mobile: "",
        email: "",
        password: "",
        gender: "",
        status: 1,
        role: "admin",
        ...initialUser,
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                name="name.first"
                value={values.name.first}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.name && touched?.name.first && errors?.name?.first
                    ? true
                    : false
                }
                helperText={
                  touched?.name && touched?.name.first && errors?.name?.first
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                name="name.last"
                value={values.name.last}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.name && touched?.name.last && errors?.name?.last
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Mobile"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.mobile && errors?.mobile ? true : false}
                helperText={touched?.mobile && errors?.mobile}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.email && errors?.email ? true : false}
                helperText={touched?.email && errors?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.password && errors?.password ? true : false}
                helperText={touched?.password && errors?.password}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Select
                  labelId="role"
                  id="demo-simple-select"
                  value={values.role}
                  label="Role"
                  name="role"
                  onChange={handleChange}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  labelId="status"
                  id="demo-simple-select"
                  value={values.status}
                  label="Status"
                  name="status"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={0}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} container justifyContent="space-evenly">
              <Divider />
              <Button type="submit" variant="contained" color="primary">
                {operation == "edit" ? "Update" : "Create"}
              </Button>
              <Button
                onClick={handleDialogClose}
                variant="contained"
                color="secondary"
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default CustomerForm;

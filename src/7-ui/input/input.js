import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Input = ({ items, touched, errors, handleBlur, handleChange }) => {
  return (
    <>
      {Array.isArray(items) &&
        items.map(({ label, name, type, value }, i) => (
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label={label}
              name={name}
              type={type}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[name] && errors[name] ? true : false}
              helperText={touched[name] && errors[name]}
            />
          </Grid>
        ))}
    </>
  );
};

export default Input;
